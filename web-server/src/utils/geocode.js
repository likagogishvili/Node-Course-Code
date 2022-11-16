// id =f8578069342171e6ec32807958bcdc8f
const request = require("postman-request");
const geocode = (address, callback) => {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${address}&limit=5&appid=f8578069342171e6ec32807958bcdc8f`;
  request({ url: url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } 
      else if (body.length === 0) {
        callback("Unable to find location. Try another search.", undefined);
      }
     else {
      if(body[1]){
        callback(undefined, {
          latitude: body[1].lat,
          longitude: body[1].lon,
          location: body[1].name,
        });
      }
 
    }
  });
};

module.exports = geocode;
