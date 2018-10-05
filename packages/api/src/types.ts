import * as chokidar from "chokidar";
import * as Observable from "zen-observable";
import * as Fs from "fs";
import * as Types from "@patternplate/types";

export type FsLike = typeof Fs;

export interface ObservableQueue<T> extends Observable<T[]> {
  queue: T[];
  stop(): void;
}

export interface ObservableWatcher extends Observable<QueueMessage> {
  watcher: chokidar.FSWatcher;
  stop(): void;
}

export type MsgQueue = ObservableQueue<QueueMessage>;

export type QueueMessage =
  | QueueStartMessage
  | QueueReadyMessage
  | QueueDoneMessage
  | QueueErrorMessage
  | QueueExceptionMessage
  | QueueShutDownMessage
  | QueueStopMessage
  | QueueHeartbeatMessage
  | QueueWatchMessage
  | QueueChangeMessage;

export interface QueueStartMessage {
  type: "start";
  target: Types.CompileTarget;
}

export interface QueueReadyMessage {
  type: "ready";
}

export interface QueueShutDownMessage {
  type: "shutdown";
  target: Types.CompileTarget;
}

export interface QueueDoneMessage {
  type: "done";
  target: Types.CompileTarget;
  payload: { fs: any } // typeof fs not compatible with JSONSchema Generator
}

export interface QueueErrorMessage {
  type: "error";
  target?: Types.CompileTarget;
  payload: Error | Error[];
}

export interface QueueExceptionMessage {
  type: "exception";
  payload: {
    code: number;
    stdout: string;
    stderr: string;
  };
}

export interface QueueHeartbeatMessage {
  type: "heartbeat";
  target: Types.CompileTarget;
}

export interface QueueStopMessage {
  type: "stop";
  target: Types.CompileTarget;
}

export interface QueueWatchMessage {
  type: "watch";
  target: Types.CompileTarget;
}

export interface QueueChangeMessage {
  type: "change";
  payload: {
    file: string;
    contentType: Types.ContentType;
  };
}

export interface RouteOptions {
  cwd: string;
  config: Types.PatternplateConfig;
  queue: MsgQueue;
}
