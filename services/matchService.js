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
  const uniqueResumeSkills = [...new Set(normalizedResumeSkills)];
  const normalizedRequiredSkills = requiredSkills.map((skill) =>
    skill.trim().toLowerCase(),
  );
  const uniqueRequiredSkills = [...new Set(normalizedRequiredSkills)];
  const matchedSkills = uniqueRequiredSkills.filter((skill) =>
    uniqueResumeSkills.includes(skill),
  );

  const missingSkills = uniqueRequiredSkills.filter(
    (skill) => !uniqueResumeSkills.includes(skill),
  );

  const matchPercentage =
    Math.round((matchedSkills.length / uniqueRequiredSkills.length) * 10000) /
    100;

  return {
    matchedSkills,
    missingSkills,
    matchPercentage,
  };
}

module.exports = {
  calculateMatch,
};
