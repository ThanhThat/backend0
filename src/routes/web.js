const router = require("express").Router();
const {
  getHomepage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require("../controllers/homeController");

router.get("/", getHomepage);

router.get("/create-user", getCreatePage);
router.get("/update-user/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

module.exports = router;
