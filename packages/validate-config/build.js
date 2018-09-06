const getSchema = require('./lib/get-schema').getSchema;
process.stdout.write(JSON.stringify(getSchema(), null, '  '));
