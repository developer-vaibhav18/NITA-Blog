const express = require("express");
const mongoose = require("mongoose");
// const morgan = require("morgan");

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const myProfileRoutes = require("./routes/myProfileRoutes");
const searchRoutes = require("./routes/searchRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
  "mongodb+srv://vk:yPhVv93BEFRH3Xq@nita-site.3vi9m.mongodb.net/Chutad?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));
app.use(authRoutes);
app.use("/myProfile", requireAuth, myProfileRoutes);
app.use("/blogs", requireAuth, blogRoutes);
app.use("/search", searchRoutes);

// https://cloudinary.com/users/verify_email?token=3HiOg2YgUgfmT_jbwSm_.dARfo9F3aZVYz81bsYiV
