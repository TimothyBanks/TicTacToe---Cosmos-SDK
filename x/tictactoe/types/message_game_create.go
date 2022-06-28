package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgGameCreate = "game_create"

var _ sdk.Msg = &MsgGameCreate{}

func NewMsgGameCreate(creator string, p1 string) *MsgGameCreate {
	return &MsgGameCreate{
		Creator: creator,
		P1:      p1,
	}
}

func (msg *MsgGameCreate) Route() string {
	return RouterKey
}

func (msg *MsgGameCreate) Type() string {
	return TypeMsgGameCreate
}

func (msg *MsgGameCreate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgGameCreate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgGameCreate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
