const router = require("express").Router(); // creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.
const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");
const authenticate = require("./auth-middleware");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secret");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 4);
  user.password = hash;
  Users.add(user)
    .then((saved) => {
      res.status(201).json({ username: saved.username });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${user.username}`, token });
      } else {
        res.status(401).json({ message: "Invalid Username or Password" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
      console.log(err);
    });
});

router.put("/update", (req, res) => {
  const changes = req.body;
  const hash = bcrypt.hashSync(changes.password, 4);
  changes.password = hash;

  Users.update(changes, changes.username)
    .then((user) => {
      res.status(201).json({
        username: user.username,
        message: "Password successfully updated!",
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update password", err });
      console.log(err);
    });
});

router.delete("/delete", authenticate, (req, res) => {
  const { username } = req.body;
  Users.remove(username)
    .then((user) => {
      res.status(201).json({ message: "User has been deleted successfully!" });
    })
    .catch((err) => {
      res.status(500).json({ message: "failed delete user", err });
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    lat: Date.now(),
  };
  const options = {
    expiresIn: 60 * 60 * 1000, //1 hour
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
