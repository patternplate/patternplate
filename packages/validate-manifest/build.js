const Fs = require('fs');
const Schema = require('./lib/schema');

Fs.writeFileSync('./lib/full-schema.json', JSON.stringify(Schema.schema, null, '  '));
Fs.writeFileSync('./lib/pattern-schema.json', JSON.stringify(Schema.pattern, null, '  '));
Fs.writeFileSync('./lib/package-schema.json', JSON.stringify(Schema.pkg, null, '  '));
