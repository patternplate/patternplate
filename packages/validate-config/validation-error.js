class ValidationError extends Error {
  constructor(errors, name) {
    super();

    this.name = "ValidationError";

    this.message = `${name || ""} Invalid Options\n\n`;

    this.errors = errors.map(err => {
      err.dataPath = err.dataPath.replace(/\//g, ".");
      return err;
    });

    this.message = this.errors.reduce(
      (msg, err) => `${msg}options${err.dataPath} ${err.message}\n`,
      this.message
    );

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ValidationError;
