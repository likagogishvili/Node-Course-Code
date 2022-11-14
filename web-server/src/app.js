const path = require("path");
const express = require("express");
const hbs = require('hbs')


const app = express();


//Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
//setting new path for views
const viewPath = path.join(__dirname, "../templates/views");

//setting new path for partials
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
//setting new path for views
app.set("views", viewPath);
//register partioals
hbs.registerPartials(partialsPath)


//Setup static directory to serve
app.use(express.static(publicDirectoryPath));




app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Lika Gogishvili",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Lika Gogishvili",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    massage:
      "If you’re parting on good terms, don’t burn any bridges – after all, customers may return down the line. Be friendly and take steps to keep in touch. Hi [Customer name],On behalf of my team, we’re all sad to see you go. We’re pleased to have collaborated with you all this time and hope our services were useful. I hope we’ll stay in touch and get to work together again in the future. Please don’t hesitate to provide feedback and suggestions to help us improve, even from afar.Best of luck!",
    name: "Lika Gogishvili",
  });
});
app.get("/help/*", (req, res) => {
  res.render('404',{
    title:'404',
    name:'Lika gogishvili',
    errorMessage:'help article not found'
  })
});
app.get("*", (req, res) => {
  res.render('404',{
    title:'404',
    name:'Lika gogishvili',
    errorMessage:'Page not Found'
  })
});



//sending objects on web page
// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "Lika",
//       age: "21",
//     },
//     {
//       name: "John",
//       age: "21",
//     },
//   ]);
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About</h1>"

//   );
// });

app.get("/weather", (req, res) => {
  res.send({
    forecas: "It is snowing",
    location: "philadelphia",
  });
});

app.listen(3000, () => {
  console.log("Server is up onn port 3000.");
});
