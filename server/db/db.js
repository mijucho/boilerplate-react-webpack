const knex = require('knex')
const config = require('../../knexfile').development
const connection = knex(config)

module.exports = {
    displayCakes
}

function displayCakes (){
    const db =connection
    return db('shop').select()
}