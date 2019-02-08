

exports.up = function(knex, Promise) {
    return knex.schema.createTable('shop', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.integer('price')
        table.string('img_url')
        table.string('description')
     })
};

exports.down = function(knex, Promise) {
  return knex.schema.daropTable('shop')
};
