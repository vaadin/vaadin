var fs = require('fs');
const fileName = './bower.json';
var bowerjson = require(fileName);

const version = require('./package.json').version;
bowerjson.dependencies["vaadin-core"] = version;

fs.writeFileSync(fileName, JSON.stringify(bowerjson, null, 2));
