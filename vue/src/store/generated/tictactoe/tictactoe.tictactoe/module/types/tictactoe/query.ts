/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../tictactoe/params";
import { GameInfo } from "../tictactoe/game_info";

export const protobufPackage = "tictactoe.tictactoe";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGameInfoRequest {
  gameID: number;
}

export interface QueryGameInfoResponse {
  game: GameInfo | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGameInfoRequest: object = { gameID: 0 };

export const QueryGameInfoRequest = {
  encode(
    message: QueryGameInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.gameID !== 0) {
      writer.uint32(8).uint64(message.gameID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGameInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGameInfoRequest } as QueryGameInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGameInfoRequest {
    const message = { ...baseQueryGameInfoRequest } as QueryGameInfoRequest;
    if (object.gameID !== undefined && object.gameID !== null) {
      message.gameID = Number(object.gameID);
    } else {
      message.gameID = 0;
    }
    return message;
  },

  toJSON(message: QueryGameInfoRequest): unknown {
    const obj: any = {};
    message.gameID !== undefined && (obj.gameID = message.gameID);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGameInfoRequest>): QueryGameInfoRequest {
    const message = { ...baseQueryGameInfoRequest } as QueryGameInfoRequest;
    if (object.gameID !== undefined && object.gameID !== null) {
      message.gameID = object.gameID;
    } else {
      message.gameID = 0;
    }
    return message;
  },
};

const baseQueryGameInfoResponse: object = {};

export const QueryGameInfoResponse = {
  encode(
    message: QueryGameInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.game !== undefined) {
      GameInfo.encode(message.game, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGameInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGameInfoResponse } as QueryGameInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.game = GameInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGameInfoResponse {
    const message = { ...baseQueryGameInfoResponse } as QueryGameInfoResponse;
    if (object.game !== undefined && object.game !== null) {
      message.game = GameInfo.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    return message;
  },

  toJSON(message: QueryGameInfoResponse): unknown {
    const obj: any = {};
    message.game !== undefined &&
      (obj.game = message.game ? GameInfo.toJSON(message.game) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGameInfoResponse>
  ): QueryGameInfoResponse {
    const message = { ...baseQueryGameInfoResponse } as QueryGameInfoResponse;
    if (object.game !== undefined && object.game !== null) {
      message.game = GameInfo.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of GameInfo items. */
  GameInfo(request: QueryGameInfoRequest): Promise<QueryGameInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tictactoe.tictactoe.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  GameInfo(request: QueryGameInfoRequest): Promise<QueryGameInfoResponse> {
    const data = QueryGameInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tictactoe.tictactoe.Query",
      "GameInfo",
      data
    );
    return promise.then((data) =>
      QueryGameInfoResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
