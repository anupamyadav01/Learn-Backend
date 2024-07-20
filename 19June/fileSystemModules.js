const { error } = require("console");
const fs = require("fs");

// fs.writeFile("data.txt", "This is data of data.txt file", (e) => {
//   if (e) console.log("Error occured while writing in file", e);
// });
// console.log("Hello World");
// fs.readFile("data.txt", (error, data) => {
//   if (error) {
//     console.log("Error occured while reading file", error);
//   } else {
//     console.log(data.toString());
//   }
// });

// const data = fs.readFileSync("data.txt");
// console.log(data.toString());

// console.log("Bye World");
// fs.appendFile("data.txt", "\n This is appended data", (error) => {
//   if (error) throw error;
//   console.log("Data appended successfully");
// });

// fs.appendFileSync("data.txt", "\nThis is new data");
// fs.unlink("data.txt", (error) => {
//   if (error) throw error;
//   console.log("File deleted successfully");
// });

// fs.exists("data.txt", (error) => {
//   if (error) {
//     console.log("File doesn't exists", error);
//     return;
//   } else {
//     console.log("File exists");
//   }
// });

// fs.access("data.txt", (error) => {
//   if (error) {
//     console.log("File doesn't exists", error);
//     return;
//   } else {
//     console.log("File exists");
//   }
// });
