var fs = require('fs');
const fileNameBower = './bower.json';
const fileNamePackage = './package.json';
var bowerjson = require(fileNameBower);
var npmjson = require(fileNamePackage);

const version = npmjson.version;
bowerjson.dependencies["vaadin-core"] = version;
npmjson.dependencies["@vaadin/vaadin-core"] = version;

fs.writeFileSync(fileNameBower, JSON.stringify(bowerjson, null, 2));
fs.writeFileSync(fileNamePackage, JSON.stringify(npmjson, null, 2));

