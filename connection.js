const pg = require("pg");

function createConnection() {
  let pool = new pg.Pool({
    host: "127.0.0.1",
    user: "postgres",
    password: "password",
    database: "databaseofchallenge",
    port: 5432,
  });

  return pool;
}

function createConnectionClient() {
  let client = new pg.Client({
    host: "127.0.0.1",
    user: "postgres",
    password: "password",
    database: "databaseofchallenge",
    port: 5432,
  });

  return client;
}

module.exports = { createConnection, createConnectionClient };
