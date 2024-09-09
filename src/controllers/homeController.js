const connection = require("../config/database");

const getHomepage = (req, res) => {
  let users = [];
  // Get data in database <=> simple query
  connection.query("SELECT * FROM users", function (err, result, fields) {
    users = result;
    // res.send(JSON.stringify(users));
    return res.render("home.ejs");
  });
};

const getAbc = (req, res) => {
  res.send("This is page Abc");
};

module.exports = {
  getHomepage,
  getAbc,
};
