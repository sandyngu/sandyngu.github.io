module.exports = {
    development: {
      client: "mysql",
      connection: {
        host: "us-cdbr-east-03.cleardb.com",
        user: "b911971ebfbaf9",
        password: "7bb3e434",
        database: "heroku_807fc0f12377da7",
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