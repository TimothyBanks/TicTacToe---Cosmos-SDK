package keeper

import (
	"context"
	"hash/fnv"
	"strconv"

	"tictactoe/x/tictactoe/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) GameJoin(goCtx context.Context, msg *types.MsgGameJoin) (*types.MsgGameJoinResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	id, err := strconv.ParseUint(msg.GameID, 10, 64)
	if err != nil {
		return &types.MsgGameJoinResponse{}, status.Error(codes.InvalidArgument, "Game ID must be a number.")
	}
	game := k.GetGame(ctx, id)
	if game == nil {
		return &types.MsgGameJoinResponse{}, status.Error(codes.InvalidArgument, "Game with ID does not exist")
	}
	if game.P1 == msg.P2 {
		return &types.MsgGameJoinResponse{}, status.Error(codes.InvalidArgument, "Player 1 and Player 2 cannot be the same player.")
	}
	if game.State != types.GameState_New {
		return &types.MsgGameJoinResponse{}, status.Error(codes.InvalidArgument, "Can not join active or finished game.")
	}
	game.P2 = msg.P2

	h := fnv.New32a()
	h.Write([]byte(game.P1 + game.P2))
	hValue := h.Sum32()
	game.State = types.GameState_P2Turn
	if (hValue>>31)&0x1 == 0 {
		game.State = types.GameState_P1Turn
	}
	k.SetGame(ctx, *game)
	return &types.MsgGameJoinResponse{}, nil
}
