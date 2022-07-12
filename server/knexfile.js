module.exports = {
    development: {
      client: "mysql",
      connection: {
        host: "localhost",
        user: "root",
        password: "nursimulator",
        database: "portfolio",
        charset: "utf8",
        insecureAuth: true
      }
    },
    production: {
      client: "mysql",
      connection: process.env.CLEARDB_DATABASE_URL
    }
  };