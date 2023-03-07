# neoway-api

> Rest API para manipulação de dados e persistência em base de dados relacional [Postgres](https://www.jetbrains.com/datagrip/features/postgresql/?source=google&medium=cpc&campaign=15034928077&term=postgres&content=555250377821&gclid=CjwKCAiAu5agBhBzEiwAdiR5tMdvdcBZD5qaR-BkipQ1FRAuHWljGoMxOonLZEmCbotqGh8vK0QYhhoCF8cQAvD_BwE).

## Features
- Rest API com `Node.js`.
- HTTP requests com `Express`
- Banco de dados Relacional `Postgres`
- operações de SQL com `Sequelize`
- Building
  - Configuração de ambiente seguindo o arquivo `.env.example`
- Camada de segurança com `Helmet`
- Arquitetura de rotas customizadas
- Leitura de arquivo .txt com `Multer` 
  
## Endpoints/Rotas

| Method | Endpoint | Description |
| :------------ | :------------ | :----------- |
| `POST` | `/customer/register`  | Inserção de múltiplos registros na base de dados, a partir de um arquivo .txt
| `GET` | `/customer/:cpf` | Busca registro de customer especifico, a partir do CPF (`Primary Key`).
| `PUT` | `/customer/:cpf` | Altera qualquer valor no registro de um customer, a partir do seu CPF.
| `DELETE` | `/customer/:cpf`| Exclui registro de um customer da base de dados, a partir da sua primary key (`CPF`).

## Estrutura de arquivos

	.
	├── src/
	|  ├── http/
	|  |	└── routes/
	|  |	└── controller/
	|  ├── domain/
	|  |	└── customers/
	|  |	|	└── addCustomersDomain.js
	|  ├── models/
	|  |	└── Customer.js
	|  ├── middlewares/
	|  |	└── multerValidator.js
	|  ├── errors/
	|  ├── database/
	|  |	└── migrations/
	|  |	└── sequelize.js
	|  ├── config/
	|  └── index.js
	├── .env
	├── .env.example
	├── .gitignore
	├── package.json
	└── README.md

## Desenvolvimento Com docker-compose

#### Prepare o ambiente

1 - Instale o [Docker](https://docs.docker.com/engine/install/).

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
4 - execute o arquivo Docker-Compose
```sh
$ docker-compose up
```
5 - Para enviar o arquivo .txt utilize o `insomnia`
```
A request deve estar em formato 'multipart form' e o campo name como 'file'. O Value deve ser do tipo .txt
```

## Desenvolvimento 

#### Prepare o ambiente

1 - Instale o [node v12]() e [yarn]().

2 - Instale o [Insomnia](https://insomnia.rest/download).

#### Prepare o projeto

2 - Clone este repositório
```sh
$ git clone https://github.com/PazBruna/neoway-api.git
$ cd neoway-api
```
3 - Verifique o arquivo .env.example para a configuração das variaveis de ambiente
```
Obs: Neste caso, o arquivo .env esta presente na raiz do projeto. (Não recomendado em projetos de produção)
```
4 - Intale todas as dependencias
```sh
$ yarn ou npm install
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
