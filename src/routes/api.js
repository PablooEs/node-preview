const express = require("express");
const router = express.Router();

//Controllers
const language_controller = require("../controllers/languageController");
const framework_controller = require("../controllers/frameworkController");

//Languages routes
router.get("/languages", language_controller.language_list);
router.get("/languages/:id", language_controller.language_detail);
router.post("/languages", language_controller.language_add);
router.put("/languages/:id", language_controller.language_update);
router.delete("/languages/:id", language_controller.language_delete);

//Frameworks routes
router.get("/frameworks", framework_controller.framework_list);
router.post("/frameworks", framework_controller.framework_add);
router.delete("/frameworks/:id", framework_controller.framework_delete);

module.exports = router;
