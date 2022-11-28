import type { ErrorResponse } from "../typings/interfaces";

/**
 * @class OpenTDB error constructor
 * @private
 */
export default class OpenTDBError extends TypeError {
  constructor(error: ErrorResponse) {
    super(error.text);
    this.name = `OpenTDBError [${error.header}]`;
  }
}
