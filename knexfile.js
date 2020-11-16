module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/name.db3',
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    useNullAsDefault: true,
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_key = ON", done);
      },
    },

    staging: {
      client: 'sqlite3',
      connection: {
        filename: './data/staging.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },

    production: {
      client: "pg",
      connection: `${process.env.DATABASE_URL}?ssl=true`,
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        directory: "./data/migrations",
      },
      seeds: {
        directory: "./data/seeds",
      },
    },

};
