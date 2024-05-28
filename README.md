# Plugin de extração de dados

> Essa aplicação serve para extrair dados de um usuario via plugin e subir em um banco firebase

## Considerações gerais

> Essa aplicação estar montandada em um monorepo, logo cada pasta precisa que seja rodado o comando `yarn` ou `npm i`

> Todas as frentes possuem testes unitários que podem ser rodados com o comando `yarn test` ou `npm run test`

## API

> Para iniciar a API precisa rodar o comando `yarn start` ou `npm start`

> Ela também possue migrações e seeds usando `yarn migrate up && yarn seed` ou `npm run migrate up && npm run seed`

## Page

> para iniciar o react presica rodar o comando `yarn dev` ou `npm run dev`

## Plugin

> para iniciar o plugin presica rodar o comando `yarn dev` ou `npm run dev`

## Banco Postgres

> Há um banco postgres para gerenciamento de tokens e limit de seção, com o comando `docker-compose up`
