const { Router } = require("express");
const emailVerificationController = require("../controllers/emailVerificationController");

const router = Router();

router.post(
  "/",
  emailVerificationController.generateEmailVerificationLink_post
);

// redirect /signup
router.get("/:token", emailVerificationController.emailVerification_get);

module.exports = router;
