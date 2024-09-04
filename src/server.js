require("dotenv").config();
const express = require("express");
const viewEngineConfig = require("./config/viewEngineConfig");
const webRouter = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// Config view engine and static file
viewEngineConfig(app);

// Khai bao route
app.use("/", webRouter);

// Get data in database <=> simple query
connection.query("SELECT * FROM users", function (err, result, fields) {
  console.log(result);
  console.log(fields);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
