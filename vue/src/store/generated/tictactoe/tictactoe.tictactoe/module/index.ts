// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgGameJoin } from "./types/tictactoe/tx";
import { MsgGameCreate } from "./types/tictactoe/tx";
import { MsgGamePlay } from "./types/tictactoe/tx";


const types = [
  ["/tictactoe.tictactoe.MsgGameJoin", MsgGameJoin],
  ["/tictactoe.tictactoe.MsgGameCreate", MsgGameCreate],
  ["/tictactoe.tictactoe.MsgGamePlay", MsgGamePlay],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgGameJoin: (data: MsgGameJoin): EncodeObject => ({ typeUrl: "/tictactoe.tictactoe.MsgGameJoin", value: MsgGameJoin.fromPartial( data ) }),
    msgGameCreate: (data: MsgGameCreate): EncodeObject => ({ typeUrl: "/tictactoe.tictactoe.MsgGameCreate", value: MsgGameCreate.fromPartial( data ) }),
    msgGamePlay: (data: MsgGamePlay): EncodeObject => ({ typeUrl: "/tictactoe.tictactoe.MsgGamePlay", value: MsgGamePlay.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
