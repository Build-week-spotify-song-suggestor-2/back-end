const express = require("express");
const router = express.Router();
const axios = require("axios");
const Tracks = require("./songs-model");
const authenticate = require("../auth/auth-middleware");

//save song to favorites
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

//get all saved songs from favoriteSongs
router.get("/:id/favs", (req, res) => {
  const id = req.params.id;
  Tracks.getSavedTrack(id)
    .then((savedTracks) => {
      res.status(200).json(savedTracks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Unable to retrieve saved tracks!" });
    });
});

//request from DS
router.post("/singleTrack", (req, res) => {
  const track_id = req.body.track_id;
  axios
    .get(`https://suggestify-api.herokuapp.com/song/${track_id}`)
    .then((res) => {
      res.json(res.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Unable to retrieve suggested playlist for track",
        err: err,
      });
    });
});

//post to ds API
router.post("/:id/fav/playlist", (req, res) => {
  const id = req.params.id;
  Tracks.getSavedTrack(id)
    .then((savedTracks) => {
      return savedTracks;
    })
    .catch((err) => {
      console.log(err);
    });
  axios.post(`https://suggestify-api.herokuapp.com/favorites`);
});

//remove song
router.delete("/:id/favs/:track_id", authenticate, (req, res) => {
  const id = req.params.id;
  const track_id = req.params.track_id;
  Tracks.removeTrack(id, track_id)
    .then((trackToDelete) => {
      res.status(200).json({ removed: trackToDelete });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
