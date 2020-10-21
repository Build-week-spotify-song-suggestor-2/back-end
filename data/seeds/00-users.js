exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "Joshua1",
          password:
            "$2a$08$yCN0RJyNGYkkIoiMmbFElu01YYcGTSSe5tq/JfH9D/0asuQcxZpsm",
        },
        {
          id: 2,
          username: "Joshua2",
          password:
            "$2a$08$yCN0RJyNGYkkIoiMmbFElu01YYcGTSSe5tq/JfH9D/0asuQcxZpsm",
        },
      ]);
    });
};
