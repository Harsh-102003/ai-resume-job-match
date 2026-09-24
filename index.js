const { calculateMatch } = require("./services/matchService");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({
    message: "AI Resume Job Match API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "AI Resume Job Match API",
  });
});

app.post("/api/match", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
