module.exports = {
    development: {
      client: "mysql",
      connection: {
        host: "127.0.0.1",
        user: "root",
        password: "nursimulator",
        database: "portfolio",
        charset: "utf8",
        port: "3306",
        insecureAuth: true
      }
    },
    production: {
      client: "mysql",
      connection: process.env.CLEARDB_DATABASE_URL
    }
  };