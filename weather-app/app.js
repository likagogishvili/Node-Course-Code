// aee72dc2be28b1051d12dc09c5a0fdb1

const request = require("postman-request");
let url =
  "http://api.weatherstack.com/current?access_key=0a82bdc4c6628b5f968dd500d30a8857&query=38.897675,-77.036547&units=f";
request({ url: url, json: true }, (error, response) => {
  const data = response.body.current;
  console.log(
    `${data.weather_descriptions[0]}. It is currently ${data.temperature} degress out. It fells like ${data.feelslike} degress out.`
  );
});
const geocodeURL =
  "http://api.positionstack.com/v1/forward?access_key=464c77e6152c5755b3d434eac521373a&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC"
request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to lovation services");
  }else if (response.body.length === 0) {
    console.log("unable to find api data");
  } 
else {
    let latitude= response.body.data[0].latitude
    let longitude= response.body.data[0].longitude
    console.log(latitude, longitude)
  }
});
