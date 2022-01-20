const User = require("../models/User");

module.exports.searchRoutes_post = async (req, res) => {
  const { firstName, secondName } = req.body.name;
  User.find(
    {
      firstName: { $regex: firstName, $options: "$i" },
      secondName: { $regex: secondName, $options: "$i" },
    },
    (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        console.log(docs);
        res.status(200).json({ docs: docs });
      }
    }
  );
};
