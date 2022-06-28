package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"tictactoe/x/tictactoe/types"
)

var _ = strconv.Itoa(0)

func CmdGamePlay() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "game-play [game-id] [player] [x] [y]",
		Short: "Broadcast message GamePlay",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argGameID := args[0]
			argPlayer := args[1]
			argX := args[2]
			argY := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgGamePlay(
				clientCtx.GetFromAddress().String(),
				argGameID,
				argPlayer,
				argX,
				argY,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
