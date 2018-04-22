const validateSchema = require("@webpack-contrib/schema-utils");

import {schema} from './schema';
import {PatternplatePlugin} from './types';

export * from './types';

export interface ValidateOptions {
  target: any;
  name: string;
}

export type ValidateResult = [Error | null, boolean];

export const validatePlugin = ({ target, name }: ValidateOptions): ValidateResult => {
  try {
    validateSchema({
      name,
      schema,
      target,
      log: false,
      exit: false,
      throw: true
    });
  } catch (err) {
    return [err, false];
  }

  return [null, true];
}

export const isPlugin = (target: any): target is PatternplatePlugin => {
  const [, valid] = validatePlugin({ target, name: '' });
  return valid;
}
