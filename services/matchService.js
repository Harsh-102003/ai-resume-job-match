function calculateMatch(resumeSkills, requiredSkills) {
  if (requiredSkills.length === 0)
    return {
      matchedSkills: [],
      missingSkills: [],
      matchPercentage: 0,
    };
  const normalizedResumeSkills = resumeSkills.map((skill) =>
    skill.trim().toLowerCase(),
  );
  const normalizedRequiredSkills = requiredSkills.map((skill) =>
    skill.trim().toLowerCase(),
  );
  const matchedSkills = normalizedRequiredSkills.filter((skill) =>
    normalizedResumeSkills.includes(skill),
  );

  const missingSkills = normalizedRequiredSkills.filter(
    (skill) => !normalizedResumeSkills.includes(skill),
  );

  const matchPercentage = (matchedSkills.length / normalizedRequiredSkills.length) * 100;

  return {
    matchedSkills,
    missingSkills,
    matchPercentage,
  };
}

module.exports = {
  calculateMatch,
};
