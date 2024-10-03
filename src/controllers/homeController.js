const {
  getAllUser,
  getOneUser,
  createUser,
  updateUser,
  deleteById,
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

const getUpdatePage = async (req, res) => {
  const userId = req.params;

  const result = await getOneUser(userId.id);

  let currentUser = result && result.length > 0 ? result[0] : {};

  return res.render("update.ejs", { currentUser });
};

const postUpdateUser = async (req, res) => {
  const { email, name, city } = req.body;
  const userId = req.params;

  const result = await updateUser(userId.id, name, email, city);

  const listUser = await getAllUser();

  return res.render("home.ejs", { listUser: listUser });
};

const getDeletePage = async (req, res) => {
  const userId = req.params;
  const result = await getOneUser(userId.id);

  console.log(result);

  const currentUser = result.length > 0 ? result[0] : {};
  console.log("current user: ", currentUser);

  res.render("delete.ejs", { currentUser });
};

const postDeleteById = async (req, res) => {
  const userId = req.params;
  await deleteById(userId.id);

  res.redirect("/");
};

module.exports = {
  getHomepage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  getDeletePage,
  postDeleteById,
};
