const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRouter = require("../auth/auth-router");
const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.send("Welcome To The Spotify Song Suggester API!");
});

module.exports = server;
