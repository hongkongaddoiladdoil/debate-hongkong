// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      database: 'postgres',
      user:     'postgres',
      password: '2019'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host : 'ec2-107-22-228-141.compute-1.amazonaws.com',
      database: 'dcr7erifg4dnkb',
      user:     'rsysjgxbslpflh',
      password: '287174891dda891149826f40d265714ca36b7634bd9bee791b66c65b1d6aa5e1'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host : 'ec2-107-22-228-141.compute-1.amazonaws.com',
      database: 'dcr7erifg4dnkb',
      user:     'rsysjgxbslpflh',
      password: '287174891dda891149826f40d265714ca36b7634bd9bee791b66c65b1d6aa5e1'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
