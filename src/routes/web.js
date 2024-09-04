const router = require("express").Router();
const { getHomeController, getAbc } = require("../controllers/homeController");

router.get("/", getHomeController);

router.get("/abc", getAbc);

module.exports = router;
