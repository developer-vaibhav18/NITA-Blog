const { Router } = require("express");
const authController = require("../controllers/authController");

const router = Router();

// TODO: router.get("/enterEmail", res.render("enterEmail"));
router.get("/signup/:token", authController.signup_get);
router.post("/signup/:token", authController.signup_post);
router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.get("/logout", authController.logout_get);

module.exports = router;
