const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use("/", (req, res, next) => {
//   console.log("This always runs");
//   next();
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/add-product", (req, res, next) => {
  //   console.log("In   middleware");
  res.send(
    `<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product </button></form>`
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  //   console.log("In another  middleware");
  res.send("<p>Hi there</p>");
});
app.listen(3000);
