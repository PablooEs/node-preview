const express = require("express");
const router = express.Router();

//Controllers
const language_controller = require("../controllers/languageController");
const framework_controller = require("../controllers/frameworkController");

router.get("/languages", language_controller.language_list);

module.exports = router;
