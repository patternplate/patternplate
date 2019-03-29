import {EventEmitter} from "events";

export interface WebSocketClientInit {
  readonly src: string;
  readonly reconnect: boolean;
  readonly interval: number;
}

export class WebSocketClient {
  private readonly src: string;
  private readonly reconnect: boolean;
  private readonly interval: number;

  private opened: boolean = false;
  private ended: boolean = false;
  private ee: EventEmitter = new EventEmitter();
  private instance?: WebSocket;
  private loop: NodeJS.Timer;

  constructor({src, reconnect, interval}: WebSocketClientInit) {
    this.src = src;
    this.reconnect = reconnect;
    this.interval = interval;
  }

  private exec(type: "message", args: [MessageEvent]): void;
  private exec(type: "error", args: [Event]): void;
  private exec(type: "close", args: [CloseEvent]): void;
  private exec(type: "open", args: [Event]): void;
  private exec(type: string, args: any[]): void {
    this.ee.listeners(type).forEach(l => l(...args));
  }

  public open(): void {
    const open = () => {
      this.instance = new WebSocket(this.src);

      // Make Chrome behave and close the websocket connection
      // before unloading the browsing context. Ref: https://github.com/websockets/ws/issues/1256
      window.addEventListener("beforeunload", this.close);

      this.instance.addEventListener("open", (...args) => {
        this.opened = true;
        this.exec("open", args);
      });

      this.instance.addEventListener("close", (...args) => {
        window.removeEventListener("beforeunload", this.close);
        this.opened = false;
        this.exec("close", args);
      });

      this.instance.addEventListener("error", (...args) => {
        window.removeEventListener("beforeunload", this.close);
        this.opened = false;
        this.exec("error", args);
      });

      this.instance.addEventListener("message", (...args) => {
        this.exec("message", args);
      });
    };

    open();

    if (this.reconnect) {
      this.loop = setInterval(() => {
        if (this.ended  || this.opened) {
          return;
        }
        open();
      }, this.interval);
    }
  }

  public close(): void {
    this.ended = true;

    if (this.opened) {
      this.instance.close();
    }
  }

  public onOpen(handler): void {
    this.ee.on("open", handler);
  }

  public onClose(handler): void {
    this.ee.on("close", handler);
    this.instance.addEventListener("close", handler);
  }

  public onError(handler): void {
    this.ee.on("error", handler);
    this.instance.addEventListener("error", handler);
  }

  public onMessage(handler): void {
    this.ee.on("message", handler);
    this.instance.addEventListener("message", handler);
  }
}
