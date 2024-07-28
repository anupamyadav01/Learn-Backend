const fs = require("fs");

const fileName = "users.json";
const users = [
  {
    id: 1,
    name: "Anupam",
    age: 21,
  },
];
const newUser = {
  id: 2,
  name: "Jhon deo",
  age: 50,
};

const writeFileFunc = (filePath, data) => {
  fs.writeFile(filePath, data, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("File created successfully");
  });
};

const readFileFunc = (filePath) => {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(data.toString());
    // console.log(JSON.parse(data.toString()));
    const oldData = JSON.parse(data.toString());
    oldData.push(newUser);
    writeFileFunc(fileName, JSON.stringify(oldData));
  });
};

const appendFileFunc = (filePath, data) => {
  fs.appendFile(filePath, "\n" + data, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Data appended successfully");
  });
};

// writeFileFunc(fileName, JSON.stringify(users));
readFileFunc(fileName);

// appendFileFunc(fileName, JSON.stringify(newUser));
