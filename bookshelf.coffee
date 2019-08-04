knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'ec2-107-22-228-141.compute-1.amazonaws.com',
    database: 'dcr7erifg4dnkb',
    user:     'rsysjgxbslpflh',
    password: '287174891dda891149826f40d265714ca36b7634bd9bee791b66c65b1d6aa5e1'
    charset  : 'utf8'
  }
});

module.exports = require('bookshelf')(knex)
