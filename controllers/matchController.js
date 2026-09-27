const { calculateMatch } = require("../services/matchService");

function matchController(req, res) {
  const result = calculateMatch(req.body.resumeSkills, req.body.requiredSkills);
  res.json(result);
}

module.exports = { matchController };
