const {
  getAllUser,
  getOneUser,
  createUser,
} = require("../services/CRUDService");
const connection = require("../config/database");

const getHomepage = async (req, res) => {
  const result = await getAllUser();

  return res.render("home.ejs", { listUser: result });
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;

  // connection.query(
  //   `INSERT INTO users(email, name, city) VALUES (?, ?, ?)`,
  //   [email, name, city],
  //   function (err, result, fields) {
  //     res.send("create new user successfully");
  //   }
  // );

  await createUser(email, name, city);

  res.send("Create new User successfully!");
};

const getUpdatePage = async (req, res, next) => {
  const userId = req.params;

  const result = await getOneUser(userId);

  let currentUser = result && result.length > 0 ? result[0] : {};

  console.log(currentUser);

  return res.render("update.ejs", { currentUser });
};

module.exports = {
  getHomepage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
