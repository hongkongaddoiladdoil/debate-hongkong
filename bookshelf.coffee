knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    database: 'postgres',
    user:     'postgres',
    password: '2019'
    charset  : 'utf8'
  }
});

module.exports = require('bookshelf')(knex)
