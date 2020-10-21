exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("favoriteSongs")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("favoriteSongs").insert([
        {
          id: 1,
          user_id: 1,
          song_id: 1,
          full_track_id: "5CujCfToNKPYEZt12WnxVY",
        },
        {
          id: 2,
          user_id: 1,
          song_id: 2,
          full_track_id: "4sIPJ0x9xEabKrsGxDP2kb",
        },
        {
          id: 3,
          user_id: 1,
          song_id: 3,
          full_track_id: "35qULvfVsRGHE2u4OkNzI0",
        },
      ]);
    });
};
