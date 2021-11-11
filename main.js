const { createConnection, createConnectionClient } = require("./connection");
const { createTables } = require("./tables");
const { validateEmail, validateName } = require("./validation");
const { promisify } = require("./promisify");

async function registerPeople(pessoa) {
  if (validateName(pessoa.nome)) {
    const text = `
      INSERT INTO pessoas (nome)
      VALUES ($1)
      RETURNING id, nome
    `;
    const values = [pessoa.nome];
    return pool.query(text, values);
  } else {
    throw new Error("Nome inválido!");
  }
}

async function registerEmail(email) {
  if (validateEmail(email.email)) {
    const text = `
    INSERT INTO emails (email)
    VALUES ($1)
    RETURNING id, email
  `;
    const values = [email.email];
    return pool.query(text, values);
  } else {
    throw new Error("Email inválido!");
  }
}

function getPeople(pessoa) {
  if (validateName(pessoa.nome)) {
    const text = `
      SELECT id FROM pessoas WHERE NOME='${pessoa.nome}'
    `;
    return client.query(text);
  } else {
    throw new Error("Pessoa não existe");
  }
}

function getEmail(email) {
  if (validateEmail(email.email)) {
    const text = `
    SELECT id FROM emails WHERE email='${email.email}'
  `;
    return pool.query(text);
  } else {
    throw new Error("Email não existe");
  }
}
// main
const pool = createConnection();
const client = createConnectionClient();
createTables(pool);

function create(nome, email) {
  pool
    .query(
      `INSERT INTO pessoas(nome) VALUES (${nome});
            SELECT * FROM pessoas WHERE nome='vithor lucas varela oliveira';
    `
    )
    .then((pessoa) => {
      pool
        .query(
          `INSERT INTO emails(email) VALUES (${email});
          SELECT * FROM emails WHERE email='vithor@varela.com'`
        )
        .then((email) => {
          pool.query(
            `INSERT INTO pessoa_emails(pessoa_id, email_id) VALUES(${pessoa[1].rows[0].id}, ${email[1].rows[0].id})`
          );
        });
    });
}

function main(nome, email) {
  pool
    .query(
      `
      SELECT * FROM pessoas WHERE nome='${nome}';
      `
    )
    .then((pessoa) => {
      pool
        .query(
          `
          SELECT * FROM emails WHERE email='${email}';`
        )
        .then((email) => {
          pool
            .query(
              `SELECT FROM pessoa_emails WHERE pessoa_id=${pessoa.rows[0].id} and email_id=${email.rows[0].id}`
            )
            .then((result) => {
              console.log(
                `A pessoa: ${pessoa.rows[0].nome}, possui esse email ${email.rows[0].email} no banco de dados`
              );
            });
        });
    });
}
// use essa função para chamar ver se a pessoa com esse email possui cadastro no banco
main();

// use essa função para criar o usuário na base de dados com email e nome
create();
