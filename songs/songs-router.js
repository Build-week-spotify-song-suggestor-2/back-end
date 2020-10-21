const express = require("express");
const router = express.Router();
const axios = require("axios");
const Tracks = require("./songs-model");
const authenticate = require("../auth/auth-middleware");

router.post("/favs", (req, res) => {
  const trackSave = req.body;
  Tracks.saveTrack(trackSave)
    .then((newTrack) => {
      return res.status(200).json(newTrack);
    })
    .catch((err) => {
      res.status(500).json({ message: "Unable to save selected track!" });
    });
});
