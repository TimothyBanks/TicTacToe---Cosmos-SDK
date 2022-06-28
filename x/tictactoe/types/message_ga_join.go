package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgGaJoin = "ga_join"

var _ sdk.Msg = &MsgGaJoin{}

func NewMsgGaJoin(creator string, gameID string, p2 string) *MsgGaJoin {
	return &MsgGaJoin{
		Creator: creator,
		GameID:  gameID,
		P2:      p2,
	}
}

func (msg *MsgGaJoin) Route() string {
	return RouterKey
}

func (msg *MsgGaJoin) Type() string {
	return TypeMsgGaJoin
}

func (msg *MsgGaJoin) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgGaJoin) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgGaJoin) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
