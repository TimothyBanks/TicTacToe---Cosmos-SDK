package keeper

import (
	"context"
	"strconv"

	"tictactoe/x/tictactoe/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// Allows a player to make a move on an active game they are a part of.
func (k msgServer) GamePlay(goCtx context.Context, msg *types.MsgGamePlay) (*types.MsgGamePlayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	id, err := strconv.ParseUint(msg.GameID, 10, 64)
	if err != nil {
		return &types.MsgGamePlayResponse{}, status.Error(codes.InvalidArgument, "Game ID must be a number.")
	}
	game := k.GetGame(ctx, id)
	if game == nil {
		return &types.MsgGamePlayResponse{}, status.Error(codes.InvalidArgument, "Game with ID does not exist")
	}
	if !(game.P1 == msg.Player || game.P2 == msg.Player) {
		return &types.MsgGamePlayResponse{}, status.Error(codes.InvalidArgument, "Invalid player.")
	}
	if !(game.State == types.GameState_P1Turn || game.State == types.GameState_P2Turn) {
		return &types.MsgGamePlayResponse{}, status.Error(codes.InvalidArgument, "Can not play a game that hasn't started or is finished.")
	}
	x, _ := strconv.ParseUint(msg.X, 10, 64)
	y, _ := strconv.ParseUint(msg.Y, 10, 64)
	const n = 3
	if x >= n || y >= n {
		return &types.MsgGamePlayResponse{}, status.Error(codes.InvalidArgument, "Invalid move.")
	}
	index := y*n + x
	if game.Board[index] != types.BoardState_Unset {
		return &types.MsgGamePlayResponse{}, status.Error(codes.InvalidArgument, "Position already taken.")
	}

	gameState := types.GameState_P2Turn
	if msg.Player == game.P1 {
		game.Board[index] = types.BoardState_P1
	} else {
		game.Board[index] = types.BoardState_P2
		gameState = types.GameState_P1Turn
	}

	// Determine if there is a winner or draw.
	draw := true
	for i := 0; i < 9; i++ {
		if game.Board[i] == types.BoardState_Unset {
			// Any unset board position means we aren't yet at a draw.
			// This requires the loop to be fully executed each time.
			draw = false
			continue
		}
		// If i is the start of a row, column or diagonal then check if that row, column or diagonal
		// is assigned to the same player.
		if (i%3 == 0 && game.Board[i] == game.Board[i+1] && game.Board[i] == game.Board[i+2]) ||
			(i < 3 && game.Board[i] == game.Board[i+3] && game.Board[i] == game.Board[i+6]) ||
			(i == 0 && game.Board[i] == game.Board[4] && game.Board[i] == game.Board[8]) ||
			(i == 2 && game.Board[i] == game.Board[4] && game.Board[i] == game.Board[6]) {
			if game.Board[i] == types.BoardState_P1 {
				gameState = types.GameState_P1Winner
			} else {
				gameState = types.GameState_P2Winner
			}
			break
		}
	}

	if gameState == types.GameState_P1Winner || gameState == types.GameState_P2Winner {
		game.State = gameState
	} else if draw {
		game.State = types.GameState_Draw
	} else {
		game.State = gameState
	}

	k.SetGame(ctx, *game)
	return &types.MsgGamePlayResponse{}, nil
}
