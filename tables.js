function createTables(pool) {
  pool.query(
    ` 
        CREATE TABLE IF NOT EXISTS "pessoas" (
        "id" SERIAL,
        "nome" VARCHAR(256) UNIQUE NOT NULL,
        PRIMARY KEY ("id")
      );
      
      CREATE TABLE IF NOT EXISTS "emails" (
          "id" SERIAL,
          "email" VARCHAR(256) UNIQUE NOT NULL,
          PRIMARY KEY ("id")
      );
  
      CREATE TABLE IF NOT EXISTS "pessoa_emails" (
          "id" SERIAL,
          "pessoa_id" SERIAL, 
          "email_id" SERIAL,
          FOREIGN KEY (pessoa_id) REFERENCES pessoas("id"),
          FOREIGN KEY (email_id) REFERENCES emails("id"),
          PRIMARY KEY ("id")
      );`,
    (err, res) => {}
  );
}

module.exports = { createTables };
