// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'portal_noticias',
      user:     'root',
      password: ''
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
      database: 'my_db',
      user:     'username',
      password: 'password'
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
