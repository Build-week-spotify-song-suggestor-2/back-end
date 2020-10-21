const router = require("express").Router();
const Users = require("./users-model");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: "Unable to find users!" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.findById(id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Unable to find user!" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Unable to retrieve user", err: err });
    });
});

module.exports = router;
