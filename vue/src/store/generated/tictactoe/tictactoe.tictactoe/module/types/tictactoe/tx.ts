/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "tictactoe.tictactoe";

export interface MsgGameCreate {
  creator: string;
  p1: string;
}

export interface MsgGameCreateResponse {
  gameID: string;
}

export interface MsgGameJoin {
  creator: string;
  gameID: string;
  p2: string;
}

export interface MsgGameJoinResponse {}

export interface MsgGamePlay {
  creator: string;
  gameID: string;
  player: string;
  x: string;
  y: string;
}

export interface MsgGamePlayResponse {}

const baseMsgGameCreate: object = { creator: "", p1: "" };

export const MsgGameCreate = {
  encode(message: MsgGameCreate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.p1 !== "") {
      writer.uint32(18).string(message.p1);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgGameCreate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgGameCreate } as MsgGameCreate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.p1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGameCreate {
    const message = { ...baseMsgGameCreate } as MsgGameCreate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.p1 !== undefined && object.p1 !== null) {
      message.p1 = String(object.p1);
    } else {
      message.p1 = "";
    }
    return message;
  },

  toJSON(message: MsgGameCreate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.p1 !== undefined && (obj.p1 = message.p1);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgGameCreate>): MsgGameCreate {
    const message = { ...baseMsgGameCreate } as MsgGameCreate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.p1 !== undefined && object.p1 !== null) {
      message.p1 = object.p1;
    } else {
      message.p1 = "";
    }
    return message;
  },
};

const baseMsgGameCreateResponse: object = { gameID: "" };

export const MsgGameCreateResponse = {
  encode(
    message: MsgGameCreateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.gameID !== "") {
      writer.uint32(10).string(message.gameID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgGameCreateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgGameCreateResponse } as MsgGameCreateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGameCreateResponse {
    const message = { ...baseMsgGameCreateResponse } as MsgGameCreateResponse;
    if (object.gameID !== undefined && object.gameID !== null) {
      message.gameID = String(object.gameID);
    } else {
      message.gameID = "";
    }
    return message;
  },

  toJSON(message: MsgGameCreateResponse): unknown {
    const obj: any = {};
    message.gameID !== undefined && (obj.gameID = message.gameID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgGameCreateResponse>
  ): MsgGameCreateResponse {
    const message = { ...baseMsgGameCreateResponse } as MsgGameCreateResponse;
    if (object.gameID !== undefined && object.gameID !== null) {
      message.gameID = object.gameID;
    } else {
      message.gameID = "";
    }
    return message;
  },
};

const baseMsgGameJoin: object = { creator: "", gameID: "", p2: "" };

export const MsgGameJoin = {
  encode(message: MsgGameJoin, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.gameID !== "") {
      writer.uint32(18).string(message.gameID);
    }
    if (message.p2 !== "") {
      writer.uint32(26).string(message.p2);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgGameJoin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgGameJoin } as MsgGameJoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.gameID = reader.string();
          break;
        case 3:
          message.p2 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGameJoin {
    const message = { ...baseMsgGameJoin } as MsgGameJoin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.gameID !== undefined && object.gameID !== null) {
      message.gameID = String(object.gameID);
    } else {
      message.gameID = "";
    }
    if (object.p2 !== undefined && object.p2 !== null) {
      message.p2 = String(object.p2);
    } else {
      message.p2 = "";
    }
    return message;
  },

  toJSON(message: MsgGameJoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.gameID !== undefined && (obj.gameID = message.gameID);
    message.p2 !== undefined && (obj.p2 = message.p2);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgGameJoin>): MsgGameJoin {
    const message = { ...baseMsgGameJoin } as MsgGameJoin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.gameID !== undefined && object.gameID !== null) {
      message.gameID = object.gameID;
    } else {
      message.gameID = "";
    }
    if (object.p2 !== undefined && object.p2 !== null) {
      message.p2 = object.p2;
    } else {
      message.p2 = "";
    }
    return message;
  },
};

const baseMsgGameJoinResponse: object = {};

export const MsgGameJoinResponse = {
  encode(_: MsgGameJoinResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgGameJoinResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgGameJoinResponse } as MsgGameJoinResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgGameJoinResponse {
    const message = { ...baseMsgGameJoinResponse } as MsgGameJoinResponse;
    return message;
  },

  toJSON(_: MsgGameJoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgGameJoinResponse>): MsgGameJoinResponse {
    const message = { ...baseMsgGameJoinResponse } as MsgGameJoinResponse;
    return message;
  },
};

const baseMsgGamePlay: object = {
  creator: "",
  gameID: "",
  player: "",
  x: "",
  y: "",
};

export const MsgGamePlay = {
  encode(message: MsgGamePlay, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.gameID !== "") {
      writer.uint32(18).string(message.gameID);
    }
    if (message.player !== "") {
      writer.uint32(26).string(message.player);
    }
    if (message.x !== "") {
      writer.uint32(34).string(message.x);
    }
    if (message.y !== "") {
      writer.uint32(42).string(message.y);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgGamePlay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgGamePlay } as MsgGamePlay;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.gameID = reader.string();
          break;
        case 3:
          message.player = reader.string();
          break;
        case 4:
          message.x = reader.string();
          break;
        case 5:
          message.y = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGamePlay {
    const message = { ...baseMsgGamePlay } as MsgGamePlay;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.gameID !== undefined && object.gameID !== null) {
      message.gameID = String(object.gameID);
    } else {
      message.gameID = "";
    }
    if (object.player !== undefined && object.player !== null) {
      message.player = String(object.player);
    } else {
      message.player = "";
    }
    if (object.x !== undefined && object.x !== null) {
      message.x = String(object.x);
    } else {
      message.x = "";
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = String(object.y);
    } else {
      message.y = "";
    }
    return message;
  },

  toJSON(message: MsgGamePlay): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.gameID !== undefined && (obj.gameID = message.gameID);
    message.player !== undefined && (obj.player = message.player);
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgGamePlay>): MsgGamePlay {
    const message = { ...baseMsgGamePlay } as MsgGamePlay;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.gameID !== undefined && object.gameID !== null) {
      message.gameID = object.gameID;
    } else {
      message.gameID = "";
    }
    if (object.player !== undefined && object.player !== null) {
      message.player = object.player;
    } else {
      message.player = "";
    }
    if (object.x !== undefined && object.x !== null) {
      message.x = object.x;
    } else {
      message.x = "";
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = object.y;
    } else {
      message.y = "";
    }
    return message;
  },
};

const baseMsgGamePlayResponse: object = {};

export const MsgGamePlayResponse = {
  encode(_: MsgGamePlayResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgGamePlayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgGamePlayResponse } as MsgGamePlayResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgGamePlayResponse {
    const message = { ...baseMsgGamePlayResponse } as MsgGamePlayResponse;
    return message;
  },

  toJSON(_: MsgGamePlayResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgGamePlayResponse>): MsgGamePlayResponse {
    const message = { ...baseMsgGamePlayResponse } as MsgGamePlayResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  GameCreate(request: MsgGameCreate): Promise<MsgGameCreateResponse>;
  GameJoin(request: MsgGameJoin): Promise<MsgGameJoinResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  GamePlay(request: MsgGamePlay): Promise<MsgGamePlayResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  GameCreate(request: MsgGameCreate): Promise<MsgGameCreateResponse> {
    const data = MsgGameCreate.encode(request).finish();
    const promise = this.rpc.request(
      "tictactoe.tictactoe.Msg",
      "GameCreate",
      data
    );
    return promise.then((data) =>
      MsgGameCreateResponse.decode(new Reader(data))
    );
  }

  GameJoin(request: MsgGameJoin): Promise<MsgGameJoinResponse> {
    const data = MsgGameJoin.encode(request).finish();
    const promise = this.rpc.request(
      "tictactoe.tictactoe.Msg",
      "GameJoin",
      data
    );
    return promise.then((data) => MsgGameJoinResponse.decode(new Reader(data)));
  }

  GamePlay(request: MsgGamePlay): Promise<MsgGamePlayResponse> {
    const data = MsgGamePlay.encode(request).finish();
    const promise = this.rpc.request(
      "tictactoe.tictactoe.Msg",
      "GamePlay",
      data
    );
    return promise.then((data) => MsgGamePlayResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
