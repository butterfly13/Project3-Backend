const express = require("express");
const router = express.Router();
const entryController = require("../controllers/entry.js");

router.get("/", entryController.index);
router.get("/:weekNumber", entryController.show);
router.post("/", entryController.createEntry);
router.delete("/:id", entryController.deleteEntry);

module.exports = router;
