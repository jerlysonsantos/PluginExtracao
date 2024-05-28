# Plugin de extração de dados

> Essa aplicação serve para extrair dados de um usuario via plugin e subir em um banco firebase

## Considerações gerais

> Essa aplicação estar montada em um monorepo, logo cada pasta precisa que seja rodado o comando `yarn` ou `npm i`

> Todas as frentes possuem testes unitários que podem ser rodados com o comando `yarn test` ou `npm run test`

> A API precisa de um arquivo `.env`, o exemplo estar na pasta

## Banco Postgres

> Há um banco postgres para gerenciamento de tokens e limite de chamada, com o comando `docker-compose up`

## API

> Para iniciar a API precisa rodar o comando `yarn start` ou `npm start`

> Ela também possue migrações e seeds usando `yarn migrate up && yarn seed` ou `npm run migrate up && npm run seed`

> Para utilizar a documentação da API utilize a URL `http://localhost:3000/api-docs`

> Para o firebase funcionar, é necessário adicionar um arquivo `serviceAccountKey.json` em `API/src/config`

## Plugin

> Para iniciar o plugin presica rodar o comando `yarn dev` ou `npm run dev`

> Recomendo que rode-o primeiro

## Page

> Para iniciar o react presica rodar o comando `yarn dev` ou `npm run dev`

> Para que o plugin consiga extrair todos os dados, é necessário consentir com os cookies
