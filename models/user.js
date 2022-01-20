const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },

    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Minimum password length is 6 characters"],
      validate: [
        (ispassword = (v) => {
          return true;
        }),
        "Password error",
      ],
    },

    firstName: {
      type: String,
      required: true,
    },

    secondName: {
      type: String,
      required: true,
    },

    batch: {
      startYear: {
        type: Number,
        required: true,
        validate: [
          (isYear = (v) => {
            // need to modified
            return true;
          }),
          "Invalid Year(enter like 2019)",
        ],
      },
      endYear: {
        type: Number,
        required: true,
        validate: [
          (isYear = (v) => {
            // need to modified
            return true;
          }),
          "Invalid Year(enter like 2019)",
        ],
      },
    },

    branch: {
      type: String,
      required: true,
      validate: [
        (isBranch = (v) => {
          // need to modified
          return true;
        }),
        "Error Message",
      ],
    },

    about: {
      type: String,
    },

    isAlumini: {
      type: Boolean,
    },

    profilePicture: {
      // isLink
      type: String,
    },

    SocialMedias: {
      linkedin: {
        // isLink
        type: String,
      },
      twitter: {
        // isLink
        type: String,
      },
    },

    isAdmin: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

// fire a function before doc saved to db
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const User = mongoose.model("user", userSchema);

module.exports = User;
