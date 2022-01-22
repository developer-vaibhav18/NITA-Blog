const { Router } = require("express");
const passwordResetController = require("../controllers/resetPasswordController");

const router = Router();

router.post("/", passwordResetController.generateResetPasswordLink_post);

router.post("/:userId/:token", passwordResetController.resetPassword_post);

module.exports = router;
