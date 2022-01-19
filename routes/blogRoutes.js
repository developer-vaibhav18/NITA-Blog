const express = require("express");
const blogController = require("../controllers/blogController");
const { checkAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/create", checkAdmin, blogController.blog_create_get);
router.get("/", blogController.blog_index);
router.post("/", checkAdmin, blogController.blog_create_post);
router.get("/:id", blogController.blog_details);
router.delete("/:id", checkAdmin, blogController.blog_delete);

module.exports = router;
