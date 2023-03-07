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

## Development

#### Setup environment

1 - Install [node v12]() and [yarn]().

#### Prepare the project

Clone este repositório
```sh
$ git clone https://github.com/PazBruna/neoway-api.git
$ cd neoway-api
```

