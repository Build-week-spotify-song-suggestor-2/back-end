const db = require("../data/db-config");

module.exports = {
  saveTrack,
  removeTrack,
  getSavedTrack,
  findTracks,
  findTrackById,
};

function findTracks() {
  return db("tracks");
}

function findTrackById(id) {
  return db("tracks").where("id", id).first();
}

function saveTrack(track) {
  return db("favoriteSongs")
    .insert(track)
    .then((ids) => {
      const id = ids[0];
      return db("favoriteSongs")
        .where({ id })
        .first()
        .then((track) => {
          return track;
        });
    });
}

function getSavedTrack(id) {
  return db("favoriteSongs")
    .select()
    .where({ user_id: id })
    .join("tracks", "song_id", "tracks.id");
}

function removeTrack(user_id, track_id) {
  return db("favoriteSongs")
    .select()
    .where({ user_id, full_track_id: track_id })
    .limit(1)
    .first()
    .del();
}
