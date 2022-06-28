package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgGameCreate{}, "tictactoe/GameCreate", nil)
	cdc.RegisterConcrete(&MsgGaJoin{}, "tictactoe/GaJoin", nil)
	cdc.RegisterConcrete(&MsgGameJoin{}, "tictactoe/GameJoin", nil)
	cdc.RegisterConcrete(&MsgGamePlay{}, "tictactoe/GamePlay", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgGameCreate{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgGaJoin{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgGameJoin{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgGamePlay{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
