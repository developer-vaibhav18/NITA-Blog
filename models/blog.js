const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    author: {
      // take user Id
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    snippet: {
      type: String,
      required: true,
    },

    body: {
      image: {
        type: String,
      },
      text: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

// creating model

const Blog = mongoose.model("Blog", blogSchema);

// exporting model
module.exports = Blog;
