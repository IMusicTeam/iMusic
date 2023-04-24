require("./src/config/database");
const express = require("express");
const cors = require("cors");

const app = express();
// use JSON parser
app.use(express.json({ limit: '50mb' }));

// use cors
app.use(cors());

const mainRoute = require('./src/routers/route');

app.use("/", mainRoute);

// start server
const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log(`IMusic, App is connected to http://localhost:${port}`);
});
