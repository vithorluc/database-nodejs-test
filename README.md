# database-nodejs-test

Este é um simples algoritimo de conexão com banco de dados posgres.

## tecnologias ultilizadas

- node
- javascript
- pg

## Funcionamento

Inicialmente fazer as instalações das dependências necessárias

```sh
    npm install
```

Logo em seguida crie um banco de dados de sua preferência para fazer a conexão com o banco.

Após isso é possivel mudar as variaveis de conexão com o postgres no arquivo "connection.js"

```sh
    host: "127.0.0.1",
    user: "postgres",
    password: "password",
    database: "databaseofchallenge",
    port: 5432,
```

Esse acima é o exemplo de minha utilização para o algoritimo de conectar.

No arquivo "main.js" é possivel rodar o algoritimo alterando as seguintes linhas:

```sh
// use essa função para chamar ver se a pessoa com esse email possui cadastro no banco

main("vithor lucas varela oliveira", "vithorvarela.academico@gmail.com"); //exemplo

// use essa função para criar o usuário na base de dados com email e nome
create("vithor lucas varela oliveira", "vithorvarela.academico@gmail.com"); //exemplo
```
