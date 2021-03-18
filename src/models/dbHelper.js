const knex = require("knex");
const config = require("../../knexfile");
const db = knex(config.development);

module.exports = {
  add,
  getAllLanguages,
};

function getAllLanguages() {
  return db("languages");
}

async function add(language) {
  const [id] = await db("languages").insert(language);
}
