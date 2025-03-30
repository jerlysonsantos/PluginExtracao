# Plugin de extração de dados

Essa aplicação serve para extrair dados de um usuario via plugin e subir em um banco firebase

## Considerações gerais

Esse projeto é um monorepo. Portanto, em cada pasta, é necessário executar o comando yarn ou npm i.

Todas as frentes possuem testes unitários que podem ser executados com o comando `yarn test` ou `npm run test`.

A API precisa de um arquivo .env. O exemplo está no diretório `API/`. Execute o seguinte comando dentro do diretório da API caso esteja no Linux:
```bash
cp .env_example .env
```

## Banco de dados

Há um banco Postgres para gerenciamento de tokens e limite de chamada. Execute-o com o comando:
```bash
docker-compose up
```

## API

Para iniciar a API é necessário executar o comando `yarn start` ou `npm start`

Ela também possue migrações e seeds usando `yarn migrate up && yarn seed` ou `npm run migrate up && npm run seed`

Para utilizar a documentação da API utilize a URL `http://localhost:3000/api-docs`

O token para autenticação na API é o `18ae00d0-1594-4b13-bd70-4ca2af8f439d`

## Plugin

Para iniciar o plugin presica rodar o comando `yarn dev` ou `npm run dev`

Recomendo que rode-o primeiro

## Frontend

Para iniciar o React, execute o comando `yarn dev` ou `npm run dev`

Para que o plugin consiga extrair todos os dados, é necessário consentir com os cookies
