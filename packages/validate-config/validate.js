const Ajv = require('ajv');
const errors = require('ajv-errors');
const keywords = require('ajv-keywords');
const ValidationError = require('./validation-error');

const ajv = new Ajv({
  allErrors: true,
  jsonPointers: true,
});

errors(ajv);
keywords(ajv, ['instanceof', 'typeof']);

const validateOptions = (schema, options, name) => {
  if (!ajv.validate(schema, options)) {
    throw new ValidationError(ajv.errors, name);
  }

  return true;
};

module.exports = validateOptions;
