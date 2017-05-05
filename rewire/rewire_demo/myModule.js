let fs = require("fs");
let path = "/somewhere/on/the/disk";
let Service = require('./service');

function readSomethingFromFileSystem(cb) {
    console.log("Reading from file system ...");
    fs.readFile(path, "utf8", cb);
    Service.show();
}

exports.readSomethingFromFileSystem = readSomethingFromFileSystem;