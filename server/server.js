require("./src/config/database");
const express = require("express");
var session = require("express-session");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
app.use("/uploads", express.static(__dirname + '/uploads'))
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
// use JSON parser
app.use(express.json());
// use cors
app.use(cors({ origin: "*" }));
//use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mainRoute = require('./src/routers/route');

app.use("/IMusic", mainRoute);
  
// start server
const port = process.env.PORT || 9946;
app.listen(port, () => {
    console.log(`IMusic, App is connected to http://localhost:${port}`);
});