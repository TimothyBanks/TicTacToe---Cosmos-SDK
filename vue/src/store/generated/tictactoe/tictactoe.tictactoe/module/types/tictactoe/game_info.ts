/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "tictactoe.tictactoe";

export enum GameState {
  New = 0,
  Active = 1,
  P1Turn = 2,
  P2Turn = 3,
  Draw = 4,
  P1Winner = 5,
  P2Winner = 6,
  UNRECOGNIZED = -1,
}

export function gameStateFromJSON(object: any): GameState {
  switch (object) {
    case 0:
    case "New":
      return GameState.New;
    case 1:
    case "Active":
      return GameState.Active;
    case 2:
    case "P1Turn":
      return GameState.P1Turn;
    case 3:
    case "P2Turn":
      return GameState.P2Turn;
    case 4:
    case "Draw":
      return GameState.Draw;
    case 5:
    case "P1Winner":
      return GameState.P1Winner;
    case 6:
    case "P2Winner":
      return GameState.P2Winner;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GameState.UNRECOGNIZED;
  }
}

export function gameStateToJSON(object: GameState): string {
  switch (object) {
    case GameState.New:
      return "New";
    case GameState.Active:
      return "Active";
    case GameState.P1Turn:
      return "P1Turn";
    case GameState.P2Turn:
      return "P2Turn";
    case GameState.Draw:
      return "Draw";
    case GameState.P1Winner:
      return "P1Winner";
    case GameState.P2Winner:
      return "P2Winner";
    default:
      return "UNKNOWN";
  }
}

export enum BoardState {
  Unset = 0,
  P1 = 1,
  P2 = 2,
  UNRECOGNIZED = -1,
}

export function boardStateFromJSON(object: any): BoardState {
  switch (object) {
    case 0:
    case "Unset":
      return BoardState.Unset;
    case 1:
    case "P1":
      return BoardState.P1;
    case 2:
    case "P2":
      return BoardState.P2;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BoardState.UNRECOGNIZED;
  }
}

export function boardStateToJSON(object: BoardState): string {
  switch (object) {
    case BoardState.Unset:
      return "Unset";
    case BoardState.P1:
      return "P1";
    case BoardState.P2:
      return "P2";
    default:
      return "UNKNOWN";
  }
}

export interface GameInfo {
  id: number;
  P1: string;
  P2: string;
  state: GameState;
  board: BoardState[];
}

const baseGameInfo: object = { id: 0, P1: "", P2: "", state: 0, board: 0 };

export const GameInfo = {
  encode(message: GameInfo, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.P1 !== "") {
      writer.uint32(18).string(message.P1);
    }
    if (message.P2 !== "") {
      writer.uint32(26).string(message.P2);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    writer.uint32(42).fork();
    for (const v of message.board) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GameInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameInfo } as GameInfo;
    message.board = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.P1 = reader.string();
          break;
        case 3:
          message.P2 = reader.string();
          break;
        case 4:
          message.state = reader.int32() as any;
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.board.push(reader.int32() as any);
            }
          } else {
            message.board.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameInfo {
    const message = { ...baseGameInfo } as GameInfo;
    message.board = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.P1 !== undefined && object.P1 !== null) {
      message.P1 = String(object.P1);
    } else {
      message.P1 = "";
    }
    if (object.P2 !== undefined && object.P2 !== null) {
      message.P2 = String(object.P2);
    } else {
      message.P2 = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = gameStateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.board !== undefined && object.board !== null) {
      for (const e of object.board) {
        message.board.push(boardStateFromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GameInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.P1 !== undefined && (obj.P1 = message.P1);
    message.P2 !== undefined && (obj.P2 = message.P2);
    message.state !== undefined && (obj.state = gameStateToJSON(message.state));
    if (message.board) {
      obj.board = message.board.map((e) => boardStateToJSON(e));
    } else {
      obj.board = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GameInfo>): GameInfo {
    const message = { ...baseGameInfo } as GameInfo;
    message.board = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.P1 !== undefined && object.P1 !== null) {
      message.P1 = object.P1;
    } else {
      message.P1 = "";
    }
    if (object.P2 !== undefined && object.P2 !== null) {
      message.P2 = object.P2;
    } else {
      message.P2 = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.board !== undefined && object.board !== null) {
      for (const e of object.board) {
        message.board.push(e);
      }
    }
    return message;
  },
};

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
