const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const { config } = require("./db/config.js");
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();
const server = http.createServer(app);

app.use(cors({ origin: config.clientOrigin }));
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "API running" }));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("✅ MongoDB connected");
    server.listen(config.port, () => {
      console.log(`🚀 Server running on http://localhost:${config.port}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB error:", err));
