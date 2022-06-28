package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgGamePlay = "game_play"

var _ sdk.Msg = &MsgGamePlay{}

func NewMsgGamePlay(creator string, gameID string, player string, x string, y string) *MsgGamePlay {
	return &MsgGamePlay{
		Creator: creator,
		GameID:  gameID,
		Player:  player,
		X:       x,
		Y:       y,
	}
}

func (msg *MsgGamePlay) Route() string {
	return RouterKey
}

func (msg *MsgGamePlay) Type() string {
	return TypeMsgGamePlay
}

func (msg *MsgGamePlay) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgGamePlay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgGamePlay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
