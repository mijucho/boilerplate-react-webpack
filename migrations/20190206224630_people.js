
exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.string('message')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('people')
};
