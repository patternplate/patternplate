import { validate } from './validate';
import { PatternplateConfig, ValidationInput } from './types';

export function isValid<T>(input: ValidationInput): input is ValidationInput<PatternplateConfig> {
  const [, valid] = validate(input);
  return valid;
}
