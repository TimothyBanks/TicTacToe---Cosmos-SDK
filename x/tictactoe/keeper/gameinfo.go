package keeper

import (
	"encoding/binary"

	"tictactoe/x/tictactoe/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) GetGameCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.GameCountKey))
	byteKey := []byte(types.GameCountKey)
	bz := store.Get(byteKey)
	if bz == nil {
		return 0
	}
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetGameCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.GameCountKey))
	byteKey := []byte(types.GameCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

func (k Keeper) GetGame(ctx sdk.Context, id uint64) *types.GameInfo {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.GameKey))
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, id)
	data := store.Get(byteKey)
	if data == nil {
		return nil
	}
	var info types.GameInfo
	if err := k.cdc.Unmarshal(data, &info); err != nil {
		return nil
	}
	return &info
}

func (k Keeper) SetGame(ctx sdk.Context, info types.GameInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.GameKey))
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, info.Id)
	appendedValue := k.cdc.MustMarshal(&info)
	store.Set(byteKey, appendedValue)
}
