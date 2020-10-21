exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tracks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tracks").insert([
        {
          id: 1,
          track_id: "5CujCfToNKPYEZt12WnxVY",
          track_name: "Agony",
          artist_name: "Slaughter To Prevail",
        },
        {
          id: 2,
          track_id: "4sIPJ0x9xEabKrsGxDP2kb",
          track_name: "Behold The Crown",
          artist_name: "After The Burial",
        },
        {
          id: 3,
          track_id: "35qULvfVsRGHE2u4OkNzI0",
          track_name: "All Pride No Pain",
          artist_name: "Upon A Burning Body",
        },
      ]);
    });
};
