const { Router } = require("express");
const { searchRoutes_post } = require("../controllers/searchController");

const router = Router();

router.post("/", searchRoutes_post);

module.exports = router;
