const request = require("postman-request");
const geocode = (address, callback) => {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${address}&limit=5&appid=`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.length) {
      if (response.body.features.length === 0) {
        callback("Unable to find location. Try another search.", undefined);
      }
    } else {
      callback(undefined, {
        latitude: response.body[1].lat,
        longitude: response.body[1].lon,
        location: response.body[1].name,
      });
    }
  });
};

module.exports = geocode;
