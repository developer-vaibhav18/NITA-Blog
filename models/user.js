const mongoose = require('mongoose');
const { isEmail } = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },

  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
    validate: [ispassword = (v) => {
      // need to modified
      return true;
    }, 'Password error']
  },

  name: {
    firstName, secondName: {
      type: String,
      required: true
    }
  },

  batch: {
    startYear, endYear: {
      type: Number,
      required: true,
      validate: [isYear = (v) => {
        // need to modified
        return true;
      }, 'Invalid Year(enter like 2019)']
    }
  },

  branch: {
    type: String,
    required: true,
    validate: [isBranch = (v)=> {
      // need to modified
      return true;
    }, 'Error Message']
  },

  about: {
    type: String
  },
  
  isAlumini: {
    type: Boolean
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
    }
  },

  isAdmin: {
    type: Boolean
  }
}, { timestamps: true });

// creating model

const User = mongoose.model('user', userSchema);

// exporting model
module.exports = {
  User,
}
