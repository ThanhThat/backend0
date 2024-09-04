require("dotenv").config();
const express = require("express");
const viewEngineConfig = require("./config/viewEngineConfig");
const webRouter = require("./routes/web");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// Config view engine and static file
viewEngineConfig(app);

// Khai bao route
app.use("/", webRouter);

// connect database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307, // default 3306
  user: "root",
  password: "123456", // default empty
  database: "hoidanit",
});

// Get data in database <=> simple query
connection.query("SELECT * FROM users", function (err, result, fields) {
  console.log(result);
  console.log(fields);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
