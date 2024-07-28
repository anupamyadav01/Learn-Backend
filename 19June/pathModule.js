const path = require("path");

const fullPath = path.join(__dirname, "anupamyadav", "data.txt");
// console.log(fullPath);
// console.log(__filename);

const absolutePath = path.resolve("folder", "data.txt");
// console.log(absolutePath);
const baseName = path.basename(absolutePath);
const dirname = path.dirname(absolutePath);
// console.log(dirname);

// absolute path end to end address
// E:\Node Js\19June\folder

// relative path
// ../data.json

const extensionName = path.extname(absolutePath);
// console.log(extensionName);
const pathDetails = path.parse(absolutePath);
console.log(pathDetails);
