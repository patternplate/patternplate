import * as T from "./types";

export function wait(observable: T.ObservableQueue<T.QueueMessage>): Promise<{fs: T.FsLike}> {
  return new Promise((resolve, reject) => {
    const [message] = observable.queue;

    if (!message) {
      return;
    }

    switch (message.type) {
      case 'done':
        return resolve(message.payload);
      case 'error':
        return reject(message.payload);
      default:
        observable.subscribe(
          queue => {
            const [message] = queue;
            switch (message.type) {
              case 'done':
                return resolve(message.payload);
              case 'error':
                return reject(message.payload);
              default:
                return null;
            }
          },
          reject
        );
    }
  });
}
