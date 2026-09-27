const express = require("express");
const router = express.Router();
const { matchController } = require("../controllers/matchController");

router.get("/home", (req, res) => {
  res.json({ message: "Match endpoint" });
});

router.post(
  "/match",
  (req, res, next) => {
    if (
      !Array.isArray(req.body.resumeSkills) ||
      !Array.isArray(req.body.requiredSkills)
    ) {
      return res.status(400).json({
        message: "resumeSkills and requiredSkills must be arrays",
      });
    }
    next();
  },
  matchController,
);

module.exports = router;
