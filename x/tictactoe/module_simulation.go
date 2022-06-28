package tictactoe

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"tictactoe/testutil/sample"
	tictactoesimulation "tictactoe/x/tictactoe/simulation"
	"tictactoe/x/tictactoe/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = tictactoesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgGameCreate = "op_weight_msg_game_create"
	// TODO: Determine the simulation weight value
	defaultWeightMsgGameCreate int = 100

	opWeightMsgGaJoin = "op_weight_msg_ga_join"
	// TODO: Determine the simulation weight value
	defaultWeightMsgGaJoin int = 100

	opWeightMsgGameJoin = "op_weight_msg_game_join"
	// TODO: Determine the simulation weight value
	defaultWeightMsgGameJoin int = 100

	opWeightMsgGamePlay = "op_weight_msg_game_play"
	// TODO: Determine the simulation weight value
	defaultWeightMsgGamePlay int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	tictactoeGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&tictactoeGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgGameCreate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgGameCreate, &weightMsgGameCreate, nil,
		func(_ *rand.Rand) {
			weightMsgGameCreate = defaultWeightMsgGameCreate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgGameCreate,
		tictactoesimulation.SimulateMsgGameCreate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgGaJoin int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgGaJoin, &weightMsgGaJoin, nil,
		func(_ *rand.Rand) {
			weightMsgGaJoin = defaultWeightMsgGaJoin
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgGaJoin,
		tictactoesimulation.SimulateMsgGaJoin(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgGameJoin int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgGameJoin, &weightMsgGameJoin, nil,
		func(_ *rand.Rand) {
			weightMsgGameJoin = defaultWeightMsgGameJoin
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgGameJoin,
		tictactoesimulation.SimulateMsgGameJoin(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgGamePlay int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgGamePlay, &weightMsgGamePlay, nil,
		func(_ *rand.Rand) {
			weightMsgGamePlay = defaultWeightMsgGamePlay
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgGamePlay,
		tictactoesimulation.SimulateMsgGamePlay(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
