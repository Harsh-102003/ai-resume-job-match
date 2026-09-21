const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.json({
        message: "AI Resume Job Match API is running"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        service: "AI Resume Job Match API"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});