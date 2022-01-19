const User = require("../models/User");

module.exports.myProfile_get = (req, res) => {
  res.render("myProfile");
};

module.exports.myProfileEdit_get = (req, res) => {
  res.render("myProfileEdit");
};

module.exports.myProfileEdit_post = async (req, res) => {
  const {
    email,
    password,
    name,
    batch,
    branch,
    about,
    isAlumini,
    profilePicture,
    SocialMedias,
    isAdmin,
  } = req.body;

  try {
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
