const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

require('./models');

const app = express();

// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json
app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// GET home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
});

// handle author-management related requests
// first import the author router
const authorRouter = require("./routes/authorRouter");

// the author routes are added onto the end of '/author-management'
app.use("/author-management", authorRouter);

// start app and listen for incoming requests on port 3000
app.listen(process.env.PORT||3000, () => {
  console.log("The library app is listening on port 3000!");
});
