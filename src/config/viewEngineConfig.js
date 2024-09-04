const express = require("express");
const path = require("path");

const viewEngineConfig = (app) => {
  // config template engine
  app.set("views", path.join("./src", "views"));
  app.set("views engine", "ejs");

  // config static file
  app.use(express.static(path.join("./src", "public")));
};

module.exports = viewEngineConfig;
