const jwt = require("jsonwebtoken");
const { config } = require("../db/config.js");

function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    const payload = jwt.verify(token, config.jwtSecret);
    req.user = payload;
    next();
  } catch (e) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

function sign(user) {
  return jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    config.jwtSecret,
    { expiresIn: "7d" }
  );
}

module.exports = { auth, sign };
