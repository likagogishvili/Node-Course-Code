const http = require("http");
let url =
  "http://api.weatherstack.com/current?access_key=25bd9c397378e7037e43b7a80a130c8d&query=45,-75&units=f";

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunck) => {
    data = data + chunck.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});
request.end();
