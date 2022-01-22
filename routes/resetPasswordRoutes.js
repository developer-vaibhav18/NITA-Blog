const { Router } = require("express");
const passwordResetController = require("../controllers/resetPasswordController");

const router = Router();

router.post("/", passwordResetController.generateResetPasswordLink_post);

// get Request to be created for resetPassword_get which will return a form to enter new password
// router.get("/:userId/:token",passwordResetController.resetPassword_get);

router.post("/:userId/:token", passwordResetController.resetPassword_post);

module.exports = router;
