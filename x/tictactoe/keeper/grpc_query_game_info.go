package keeper

import (
	"context"

	"tictactoe/x/tictactoe/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GameInfo(goCtx context.Context, req *types.QueryGameInfoRequest) (*types.QueryGameInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	game := k.GetGame(ctx, req.GameID)
	if game == nil {
		return nil, status.Error(codes.InvalidArgument, "Game with ID does not exist")
	}
	return &types.QueryGameInfoResponse{Game: game}, nil
}
