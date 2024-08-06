/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('atividades', table =>{
    table.increments('id').primary()
    table.string('titulo')
    table.string('cor')
    table.string('descricao')
    table.integer('user_id')
    
    table.foreign('user_id').references('id').inTable('usuarios')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('atividades')
};
