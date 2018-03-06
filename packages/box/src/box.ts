export interface Box<T> {
  error: Error | null;
  result: T;
}

/**
 * Decorate an async function to return boxed values
 * instead of throwing in the event of errors
 * @param fn function to decorate
 */
export function box<T>(fn: (...args: any[]) => T) {
  if (typeof fn !== "function") {
    throw new TypeError("fn provided to box must be a function");
  }

  return async (...args): Promise<Box<T>> => {
    try {
      return { error: null, result: await fn(...args) };
    } catch (error) {
      return { error, result: null };
    }
  };
};
