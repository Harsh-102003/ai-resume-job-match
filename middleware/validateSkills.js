function validateSkills(req, res, next) {
  const { resumeSkills, requiredSkills } = req.body;

  const isValidArray = (skills) =>
    Array.isArray(skills) &&
    skills.every(
      (skill) => typeof skill === "string" && skill.trim().length > 0,
    );

  if (!isValidArray(resumeSkills) || !isValidArray(requiredSkills)) {
    return res.status(400).json({
      message:
        "resumeSkills and requiredSkills must be arrays of non-empty strings",
    });
  }

  next();
}

module.exports = { validateSkills };
