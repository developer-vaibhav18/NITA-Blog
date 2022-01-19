const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      // res.render("index", { blogs: result, title: "All blogs" });
      // res.send(JSON.stringify({ blogs: result, title: "All blogs" }));
      res.json({ blogs: result, title: "All blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

// {
//     "author": "vk chutad",
//     "title": "abcd",
//     "snippet": "abcde",
//     "body": {
//         "text" : "ctakjf",
//     }
// }

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      // res.render("details", { blog: result, title: "Blog Details" });
      res.json({ blog: result });
    })
    .catch((err) => {
      console.log(err);
      res.render("404", { title: "Blog not found" });
    });
};

const blog_create_get = (req, res) => {
  res.render("createblog", { title: "Create a new blog" });
};

const blog_create_post = async (req, res) => {
  const { author, title, snippet, body } = req.body;
  try {
    const blog = await Blog.create({ author, title, snippet, body });
    console.log(blog);
  } catch (err) {
    console.log(err);
  }
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};

// res.send(JSON.stringify({ title: "value" }));

// {
//   author: 'vk chutad',
//   title: 'abcd',
//   snippet: 'abcde',
// }
// 61e8525cc4a5af2d3cc6cf48
