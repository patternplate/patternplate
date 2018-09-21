import * as Types from "./types";

export class PatternplateDuplicateIdError extends Error {
  public errno = Types.LoadMetaErrorType.DuplicateId;
}
