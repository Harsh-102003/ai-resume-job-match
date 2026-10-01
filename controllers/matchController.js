const { calculateMatch } = require("../services/matchService");

function matchController(req, res, next) {
  try {
    const result = calculateMatch(
      req.body.resumeSkills,
      req.body.requiredSkills,
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
}

module.exports = { matchController };
