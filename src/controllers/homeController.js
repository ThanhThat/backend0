const getHomeController = (req, res) => {
  res.render("sample.ejs");
};

const getAbc = (req, res) => {
  res.send("This is page Abc");
};

module.exports = {
  getHomeController,
  getAbc,
};
