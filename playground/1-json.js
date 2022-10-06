const fs = require("fs");
const { userInfo } = require("os");

// const book ={
//     title:'It Ends with Us',
//     author: 'Colleen Hoover'
// }

// creatingData
// const bookJSON = JSON.stringify(book)
// const parsedData = JSON.parse(bookJSON)
// fs.writeFileSync('1-json.json', bookJSON)

//reading data
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
console.log(user.name);

user.name = "Lika";
user.age = 21;

const useJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", useJSON);
