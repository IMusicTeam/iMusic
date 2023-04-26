require("./src/config/database");
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
// use JSON parser
app.use(express.json({ limit: '50mb' }));
app.use(express.static('public'));

// use cors
app.use(cors());

//use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mainRoute = require('./src/routers/route');

app.use("/IMusic", mainRoute);

// start server
const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log(`IMusic, App is connected to http://localhost:${port}`);
});