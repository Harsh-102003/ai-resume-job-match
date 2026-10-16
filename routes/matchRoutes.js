const express = require("express");
const router = express.Router();
const { validateSkills } = require("../middleware/validateSkills");
const { matchController } = require("../controllers/matchController");

router.get("/home", (req, res) => {
  res.json({ message: "Match endpoint" });
});

router.post("/match", validateSkills, matchController);

module.exports = router;
