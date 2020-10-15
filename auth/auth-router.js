const router = require("express").Router();
const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");
const authenticate = require("./auth-middleware");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secret");

router.post("/register");

router.post("/login");

router.put("/update");

router.delete("/delete");
