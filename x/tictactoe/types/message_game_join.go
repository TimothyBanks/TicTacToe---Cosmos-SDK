package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgGameJoin = "game_join"

var _ sdk.Msg = &MsgGameJoin{}

func NewMsgGameJoin(creator string, gameID string, p2 string) *MsgGameJoin {
	return &MsgGameJoin{
		Creator: creator,
		GameID:  gameID,
		P2:      p2,
	}
}

func (msg *MsgGameJoin) Route() string {
	return RouterKey
}

func (msg *MsgGameJoin) Type() string {
	return TypeMsgGameJoin
}

func (msg *MsgGameJoin) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgGameJoin) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgGameJoin) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
