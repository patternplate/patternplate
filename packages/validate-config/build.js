const {schema} = require('./lib/schema');
process.stdout.write(JSON.stringify(schema, null, '  '));
