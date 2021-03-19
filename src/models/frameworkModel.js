// const knex = require("knex");
// const config = require("../../knexfile");
// const db = knex(config.development);
const db = require("../../dbConfig");

module.exports = {
  get,
  add,
  remove,
  update,
};

function get() {
  return db("frameworks");
}
function add(framework) {
  return db("frameworks").insert(framework, ["id", "name", "description"]);
}
function remove(id) {
  return db("frameworks").where({ id }).del();
}
function update(id, changes) {
  return db("frameworks")
    .where({ id })
    .update(changes, ["id", "name", "description"]);
}
