console.log("Clinet side JS file is loaded");

// fetch("http://puzzle.mead.io/puzzle").then((res) => {
//   res.json().then((data) => {
//     console.log(data);
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const locationInp = document.querySelector("#location");
const forcast = document.querySelector("#forcast");
const error = document.querySelector("#error");


weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        error.textContent = data.error;
        locationInp.textContent = "";
        forcast.textContent = "";

      } else {
        console.log(data)
        error.textContent = "";
        locationInp.textContent = `Location - ${data.location}`;
        forcast.textContent = `Forecast - ${data.temperature} °C`;
      }
    });
  });
});
