const { Router } = require("express");
const myProfileController = require("../controllers/myProfileController");

const router = Router();

router.get("/", myProfileController.myProfile_get);
router.get("/edit", myProfileController.myProfileEdit_get);
router.post("/edit", myProfileController.myProfileEdit_post);

module.exports = router;
