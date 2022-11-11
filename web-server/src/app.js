const path  = require('path')
const express = require("express");
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Lika",
      age: "21",
    },
    {
      name: "John",
      age: "21",
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>"
  
  );
});

app.get("/weather", (req, res) => {
  res.send({
    forecas: 'It is snowing',
    location: 'philadelphia'
  });
});

app.listen(3000, () => {
  console.log("Server is up onn port 3000.");
});
