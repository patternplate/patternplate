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

export enum CompileTarget {
  Node = "node",
  Web = "web"
}

export enum ContentType {
  Config = "config",
  Pattern = "pattern",
  Doc = "doc"
}

export interface QueueStartMessage {
  type: "start";
  target: CompileTarget;
  payload: {};
}

export interface QueueReadyMessage {
  type: "ready";
}

export interface QueueShutDownMessage {
  type: "shutdown";
  target: CompileTarget;
}

export interface QueueDoneMessage {
  type: "done";
  target: CompileTarget;
  payload: { fs: typeof Fs };
}

export interface QueueErrorMessage {
  type: "error";
  target?: CompileTarget;
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
  target: CompileTarget;
}

export interface QueueStopMessage {
  type: "stop";
  target: CompileTarget;
}

export interface QueueWatchMessage {
  type: "watch";
  target: CompileTarget;
}

export interface QueueChangeMessage {
  type: "change";
  payload: {
    file: string;
    contentType: ContentType;
  };
}

export interface RouteOptions {
  cwd: string;
  config: Types.PatternplateConfig;
  queue: MsgQueue;
}
