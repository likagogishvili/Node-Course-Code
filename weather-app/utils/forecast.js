const request = require("postman-request");
const forecast = (latitude, longitude, callback) => {
  let url = `http://api.weatherstack.com/current?access_key=0a82bdc4c6628b5f968dd500d30a8857&query=${latitude},${longitude}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.current === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        weather_descriptions: response.body.current.weather_descriptions[0],
        temperature: ((response.body.current.temperature-32)/1.80000).toFixed(1),
        feelslike: ((response.body.current.feelslike-32)/1.80000).toFixed(1),
      });
    }
  });
};
module.exports = forecast;
