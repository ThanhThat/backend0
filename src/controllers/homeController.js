const connection = require("../config/database");

const getHomepage = (req, res) => {
  let users = [];
  // Get data in database <=> simple query

  connection.query("SELECT * FROM users", function (err, result, fields) {
    users = result;
    console.log("check result >> ", result);

    console.log("check user >> ", users);
    res.send(JSON.stringify(users));
  });
};

const getAbc = (req, res) => {
  res.send("This is page Abc");
};

module.exports = {
  getHomepage,
  getAbc,
};
