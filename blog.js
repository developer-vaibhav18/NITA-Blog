const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  author: {
    // take user Id
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  snippet: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },
  
},{ timestamps: true });

// creating model

const Blog = mongoose.model('blog', blogSchema);

// exporting model
module.exports = {
  Blog,
}