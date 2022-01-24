const { User } = require("../models/User");
const emailToken = require("../models/emailToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const Joi = require("joi");
// const { format } = require("path");

module.exports.generateEmailVerificationLink_post = async (req, res) => {
  try {
    const schema = Joi.object({ email: Joi.string().email().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    if (user)
      return res.status(400).send("user with given email already exists");
    let token = await emailToken.findOne({ email: email });
    if (!token) {
      token = await new emailToken({
        email: email,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }
    const link = `${process.env.BASE_URL}/emailVerification/${token.token}`;
    await sendEmail(email, "Verify Email", link);

    res.send("email Verification link sent to your email account");
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
};

module.exports.emailVerification_get = async (req, res) => {
  try {
    const token = await emailToken.findOne({
      token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link or expired");

    const link = `/signup/${token.token}`;
    res.redirect(link);
  } catch (error) {
    console.log(error);
  }
};
