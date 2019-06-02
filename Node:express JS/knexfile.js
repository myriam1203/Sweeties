// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "Sweeties"
    }
  },

  staging: {
    client: 'Sweeties',
    connection: {
      database: 'my_db',
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
      database: 'reseau_gamers',
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
  }

};
