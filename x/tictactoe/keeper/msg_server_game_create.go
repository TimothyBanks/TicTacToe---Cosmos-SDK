package keeper

import (
	"context"
	"strconv"

	"tictactoe/x/tictactoe/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) GameCreate(goCtx context.Context, msg *types.MsgGameCreate) (*types.MsgGameCreateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	id := k.GetGameCount(ctx)
	game := types.GameInfo{
		Id:    id,
		P1:    msg.P1,
		State: types.GameState_New}
	game.Board = []types.BoardState{types.BoardState_Unset, types.BoardState_Unset,
		types.BoardState_Unset, types.BoardState_Unset, types.BoardState_Unset,
		types.BoardState_Unset, types.BoardState_Unset, types.BoardState_Unset,
		types.BoardState_Unset}
	k.SetGame(ctx, game)
	k.SetGameCount(ctx, id+1)
	return &types.MsgGameCreateResponse{GameID: strconv.FormatUint(id, 10)}, nil
}
