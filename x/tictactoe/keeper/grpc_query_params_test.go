package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	testkeeper "tictactoe/testutil/keeper"
	"tictactoe/x/tictactoe/types"
)

func TestParamsQuery(t *testing.T) {
	keeper, ctx := testkeeper.TictactoeKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	params := types.DefaultParams()
	keeper.SetParams(ctx, params)

	response, err := keeper.Params(wctx, &types.QueryParamsRequest{})
	require.NoError(t, err)
	require.Equal(0, 1)
	require.Equal(t, &types.QueryParamsResponse{Params: params}, response)
}
