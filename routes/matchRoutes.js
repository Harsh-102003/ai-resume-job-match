const express = require("express");
const router = express.Router();
const {calculateMatch} = require("../services/matchService")

router.get("/home", (req, res) => {
  res.json({ message: "Match endpoint" });
});

router.post("/match", (req, res) => {
  if (
    !Array.isArray(req.body.resumeSkills) ||
    !Array.isArray(req.body.requiredSkills)
  ) {
    return res.status(400).json({
      message: "resumeSkills and requiredSkills must be arrays",
    });
  }
  const result = calculateMatch(req.body.resumeSkills, req.body.requiredSkills);

  res.json(result);
});

module.exports = router;
