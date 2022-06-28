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

func CmdGaJoin() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "ga-join [game-id] [p-2]",
		Short: "Broadcast message gaJoin",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argGameID := args[0]
			argP2 := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgGaJoin(
				clientCtx.GetFromAddress().String(),
				argGameID,
				argP2,
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
