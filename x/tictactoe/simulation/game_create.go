package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"tictactoe/x/tictactoe/keeper"
	"tictactoe/x/tictactoe/types"
)

func SimulateMsgGameCreate(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgGameCreate{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the GameCreate simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "GameCreate simulation not implemented"), nil, nil
	}
}
