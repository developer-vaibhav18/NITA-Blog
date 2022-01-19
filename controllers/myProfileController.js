const e = require("express");
const User = require("../models/User");

module.exports.myProfile_get = (req, res) => {
  res.render("myProfile");
};

module.exports.myProfileEdit_get = (req, res) => {
  res.render("myProfileEdit");
};

module.exports.myProfileEdit_post = async (req, res) => {
  const { id, password, name, batch, branch, about } = req.body;

  try {
    await User.findByIdAndUpdate(
      { _id: id.$oid },
      {
        password: password,
        name: name,
        batch: batch,
        branch: branch,
        about: about,
      },
      (err, docs) => {
        if (err) {
          console.log(err);
        } else {
          console.log(docs);
        }
      }
    );
    console.log("Success!");
    res.status(200).json({ docs: "docs" });
  } catch {
    console.log("Failed!");
  }
};
