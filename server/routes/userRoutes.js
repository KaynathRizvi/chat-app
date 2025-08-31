const express = require("express");
const User = require("../models/UserModel.js");
const { auth } = require("../middleware/auth.js");

const router = express.Router();

// Get all users (excluding password)
router.get("/", auth, async (req, res) => {
  try {
    const users = await User.find({}, { passwordHash: 0 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

module.exports = router;
