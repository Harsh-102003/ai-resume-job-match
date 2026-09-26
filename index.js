const express = require("express");
const router = require("./routes/matchRoutes");

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

const PORT = 5000;

app.use("/api", router);

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

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
