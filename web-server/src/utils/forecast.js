const request = require("postman-request");
const forecast = (latitude, longitude, callback) => {
  let url = `http://api.weatherstack.com/current?access_key=25bd9c397378e7037e43b7a80a130c8d&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.current === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        // weather_descriptions: body.current.weather_descriptions[0],
        // temperature: ((body.current.temperature-32)/1.80000).toFixed(1),
        // feelslike: ((body.current.feelslike-32)/1.80000).toFixed(1),
        weather_descriptions: "clowdy",
        temperature: 26,
        feelslike: 25,
      });
    }
  });
};
module.exports = forecast;
