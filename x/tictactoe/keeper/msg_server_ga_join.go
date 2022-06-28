package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"tictactoe/x/tictactoe/types"
)

func (k msgServer) GaJoin(goCtx context.Context, msg *types.MsgGaJoin) (*types.MsgGaJoinResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgGaJoinResponse{}, nil
}
