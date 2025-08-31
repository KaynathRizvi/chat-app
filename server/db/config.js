const dotenv = require("dotenv");
dotenv.config();

const config = {
  port: process.env.PORT || 4000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  clientOrigin: process.env.CLIENT_ORIGIN || "*",
};

module.exports = { config };
