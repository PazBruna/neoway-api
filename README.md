# neoway-api

> Rest API para manipulação de dados e persistência em base de dados relacional [Postgres](https://www.jetbrains.com/datagrip/features/postgresql/?source=google&medium=cpc&campaign=15034928077&term=postgres&content=555250377821&gclid=CjwKCAiAu5agBhBzEiwAdiR5tMdvdcBZD5qaR-BkipQ1FRAuHWljGoMxOonLZEmCbotqGh8vK0QYhhoCF8cQAvD_BwE).

## Features
- Rest API com `Node.js`.
- HTTP requests com `Express`
- Banco de dados Relacional `Postgres`
- operações de SQL com `Sequelize`
- Building
  - Configuração de ambiente seguindo o arquivo `.env.example` 
  
## Enpoints/Rotas

| Method | Endpoint | Docs | Description |
| :------------ | :------------ | :------------| :----------- |
| `POST` | `/customer/register` | --- | Inserção de múltiplos registros na base de dados, a partir de um arquivo .txt
| `GET` | `/customer/:cpf` | --- | Busca registro de customer especifico, a partir do CPF (`Primary Key`).
| `PUT` | `/customer/:cpf` | --- | Altera qualquer valor no registro de um customer, a partir do seu CPF.
| `DELETE` | `/customer/:cpf` | --- | Exclui registro de um customer da base de dados, a partir da sua primary key (`CPF`).

## Desenvolvimento

#### Prepare o ambiente

1 - Instale o [node v12]() e [yarn]().

2 - Instale o [Docker](https://docs.docker.com/engine/install/).

3 - Instale o [Insomnia](https://insomnia.rest/download).

#### Prepare o projeto

2 - Clone este repositório
```sh
$ git clone https://github.com/PazBruna/neoway-api.git
$ cd neoway-api
```
3 - Verifique o arquivo .env.example para a configuração das variaveis de ambiente
```
Obs: Neste caso, o arquivo .env esta presente na raiz do projeto.
```
4 - Intale todas as dependencias e execute o arquivo Docker-Compose
```sh
$ yarn ou npm install
$ docker-compose up
```
5 - Rode a migration
```sh
$ yarn migrate
```
#### Execute a API

6 - Execute o projeto
```sh
$ yarn dev
```
#### Preparando a requisição

7 - Para enviar o arquivo .txt utilize o `insomnia`
```
A request deve estar em formato 'multipart form' e o campo name como 'file'. O Value deve ser do tipo .txt
```
