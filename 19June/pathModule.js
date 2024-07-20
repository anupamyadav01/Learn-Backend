const path = require("path");

const fullPath = path.join(__dirname, "anupamyadav", "data.txt");
// console.log(fullPath);
// console.log(__filename);

const absolutePath = path.resolve("folder", "data.txt");
// console.log(absolutePath);
const baseName = path.basename(absolutePath);
const dirname = path.dirname(absolutePath);
console.log(dirname);
