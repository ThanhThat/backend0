const router = require("express").Router();
const {
  getHomepage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  getDeletePage,
  postDeleteById,
} = require("../controllers/homeController");

router.get("/", getHomepage);

router.get("/create-user", getCreatePage);
router.get("/update-user/:id", getUpdatePage);
router.post("/create-user", postCreateUser);
router.post("/update-user/:id", postUpdateUser);
router.get("/delete/:id", getDeletePage);
router.post("/delete/:id", postDeleteById);

module.exports = router;
