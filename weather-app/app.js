// aee72dc2be28b1051d12dc09c5a0fdb1
const geocode = require("./utils/geocode");
const forcast = require("./utils/forecast");

// const request = require("postman-request");
// geocode("Philadelphia", (error, data) => {
//   if (error) {
//     console.log("Error", error);
//   } else {
//     console.log("Data", data);
//   }
// });

// forcast(38.897675, -77.036547, (error, data) => {
//   if (error) {
//     console.log("Error", error);
//   } else {
//     console.log("Data", data);
//   }
// });

////callback chaining
const adress = process.argv[2]
if(!adress){
  console.log('Please Provide an adress')
}else{
  geocode(adress, (error, data) => {
    if (error) {
      return console.log(error);
    } else {
      forcast(data.latitude, data.longitude, (error, forcastData) => {
        if (error) {
          return console.log(error);
        } else {
          forcastData['location']=data.location
          return console.log(forcastData);
        }
      });
    }
  });
  
}