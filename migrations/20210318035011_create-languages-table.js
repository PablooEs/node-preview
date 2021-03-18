exports.up = function (knex) {
  return knex.schema
    .createTable("languages", (tbl) => {
      tbl.increments();
      tbl.text("name", 128).notNullable();
      tbl.text("description", 500);
      tbl.timestamps(true, true);
    })
    .createTable("frameworks", (tbl) => {
      tbl.increments();
      tbl.text("name").notNullable();
      tbl.text("description");
      //Foreign key
      tbl
        .integer("language_id")
        .unsigned()
        .references("id")
        .inTable("languages")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("frameworks")
    .dropTableIfExists("languages");
};
