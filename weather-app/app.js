// aee72dc2be28b1051d12dc09c5a0fdb1
// const geocode = require('./utils/geocode')
const forcast = require('./utils/forecast')

const request = require("postman-request");


// geocode("Philadelphia", (error, data) => {
//   console.log("Error", error)
//   console.log("Data", data)
// });


forcast(38.897675,-77.036547, (error, data) => {
  console.log("Error", error)
  console.log("Data", data)
});