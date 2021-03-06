exports.up = async function (knex) {
  await knex.schema.createTable('item_colors', function (tbl) {
    tbl
      .integer('item_id')
      .references('id')
      .inTable('items')
      .onDelete('cascade')
      .onUpdate('cascade')
    tbl
      .integer('color_id')
      .references('id')
      .inTable('colors')
      .onDelete('cascade')
      .onUpdate('cascade')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('item_colors')
}
