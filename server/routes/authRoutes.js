const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/UserModel.js");
const { sign } = require("../middleware/auth.js");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: "Email already exists" });

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash });

    const token = sign(user);
    res.json({ token, user: { id: user._id, name, email } });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) return res.status(400).json({ error: "Invalid credentials" });

    const token = sign(user);
    res.json({ token, user: { id: user._id, name: user.name, email } });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
