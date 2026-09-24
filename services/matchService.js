function calculateMatch(resumeSkills, requiredSkills) {
  if (requiredSkills.length === 0)
    return {
      matchedSkills: [],
      missingSkills: [],
      matchPercentage: 0,
    };
  const matchedSkills = requiredSkills.filter((skill) =>
    resumeSkills.includes(skill),
  );

  const missingSkills = requiredSkills.filter(
    (skill) => !resumeSkills.includes(skill),
  );

  const matchPercentage = (matchedSkills.length / requiredSkills.length) * 100;

  return {
    matchedSkills,
    missingSkills,
    matchPercentage,
  };
}

module.exports = {
  calculateMatch,
};
