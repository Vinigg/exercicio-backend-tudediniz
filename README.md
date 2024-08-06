1. Clone o repositório `git clone https://github.com/Vinigg/exercicio-backend-tudediniz.git`

2.  instale as dependencias `npm install`

3. Altere o arquivo knexfile.js na seção "connection" com o database
   alvo, usuário, senha e porta

*ps: O banco de dados utlizado é o PostgreSQL*

> Exemplo
> 
    connection: {
    database:  'database',
    user:  'user',
    password:  'password',
    port:  5432
    },

3. Usar o comando `npx knex migrate:latest` , este comando ciará as
   tabelas: atividades e usuarios,  no seu banco de dados.

4. Utilizar o comando `npm start` para iniciar o servidor Apollo em
   localhost:4000
