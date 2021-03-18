const knex = require("knex");
const config = require("../../knexfile");
const db = knex(config.development);

module.exports = {
  get,
  add,
  remove,
  update,
};

function get() {
  return db("languages");
}
function add(language) {
  return db("languages").insert(language);
}
function remove(id) {
  return db("languages").where({ id }).del();
}
function update(id, changes) {
  return db("languages").where({ id }).update(changes, [id]);
}
