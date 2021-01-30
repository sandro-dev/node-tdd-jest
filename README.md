<h1 align="center">
  <img src="https://raw.githubusercontent.com/sandro-dev/node-tdd-jest/master/.github/node-jest-tdd_cover.png" alt="TDD Jest Node" />
  Node with TDD and Jest
</h1>

<br />
<br />

<p align="center">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/sandro-dev/node-tdd-jest?style=plastic">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/sandro-dev/node-tdd-jest?style=plastic">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/sandro-dev/node-tdd-jest?style=plastic">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/sandro-dev/node-tdd-jest?color=red&style=plastic">

</p>


<br />
<br />


## Indíce

- [Sobre](#book-Sobre)
- [Tecnologias](#gear-Tecnologias)
- [Instalação](#wrench-Instalação)
- [Screenshots](#camera-Screenshots)
- [Licença](#memo-Licença)

## :book: Sobre

Um projeto base que criei com algumas configurações muito utilizadas em outros projetos. A estrutura é baseada em MVC e a linguagem é javascript.

- Padrão REST
- Testes unitários
- Testes de integração
- Framework Jest

<br />




## :gear: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:


  | Tecnologia  |  Descrição  |
  | --- | --- |
  | [Node.js](https://nodejs.org/en/)  | Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine |
  | [Express.js](https://expressjs.com/) | Fast, unopinionated, minimalist web framework for Node.js |
  | [Nodemon](https://nodemon.io/) | Nodemon is a utility depended on by over 1.5 million projects, that will monitor for any changes in your source and automatically restart your server. Perfect for development.  |
  | [Sucrase](https://sucrase.io/) | Super-fast Babel alternative |
  | [dotenv](https://www.npmjs.com/package/dotenv) | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. |
  | [cross-env](https://www.npmjs.com/package/cross-env) | Run scripts that set and use environment variables across platforms |
  | [ESLint](https://eslint.org/) | Find and fix problems in your JavaScript code |
  | [Prettier](https://prettier.io/) | An opinionated code formatter |
  | [Docker](https://www.docker.com/) | Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. |
  | [Sequelize](https://sequelize.org/) | Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more. |
  | [PostgreSQL](https://www.postgresql.org/) | PostgreSQL: The World's Most Advanced Open Source Relational Database |
  | [Jest](https://jestjs.io/) | Jest is a delightful JavaScript Testing Framework with a focus on simplicity. |
  | [Sucrease Jest](https://www.npmjs.com/package/@sucrase/jest-plugin) | This is a simple Jest plugin that makes it easy to use Sucrase when running Jest tests. |
  | [Supertest](https://www.npmjs.com/package/supertest) | The motivation with this module is to provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent. |
  | [Faker](https://github.com/marak/Faker.js/) | generate massive amounts of fake data in the browser and node.js |
  | [Factory Girl](https://www.npmjs.com/package/factory-girl) | factory-girl is a factory library for Node.js and the browser that is inspired by Factory_girl. It works asynchronously and supports associations and the use of functions for generating attributes. |
  | [Yup](https://github.com/jquense/yup) | Yup is a JavaScript schema builder for value parsing and validation. |
  | [Validator](https://www.npmjs.com/package/validator) | A library of string validators and sanitizers. |
  | [JWT](https://jwt.io/) | JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties. |
  | [bcrypt](https://www.npmjs.com/package/bcrypt) | A library to help you hash passwords. bcrypt is a password-hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher and presented at USENIX in 1999 |

## :wrench: Instalação

Faça um clone desse repositório utilizando o comando `git clone` ou faça download.

```bash
  git clone https://github.com/sandro-dev/node-tdd-jest
```

### Pré-requisitos

- [Docker](https://www.docker.com/)


**Obs.: Todos os comandos em yarn podem ser substituídos por npm**
`yarn add -> npm install`

- A partir da pasta raiz do projeto, execute o comando `yarn` para instalar as dependências:
```bash
    yarn
  ```

- Execute o comando `cp .env.example .env` e preencha o arquivo `.env` com `suas` variáveis de ambiente, para que tudo funcione perfeitamente;

Agora vamos instalar duas imagens de bancos de dados:

- Primeiro vamos instalar o Postgres, para armazenar nossas tabelas.
Execute o seguinte comando no terminal:

```bash
  docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Vamos configurar o banco de dados:

- Crie um novo banco de dados *postgres* com o nome que colocou em *DB_HOST*

- Rode o comando abaixo para executar as migrations, e criar a tabela no banco de dados;

```bash
  yarn sequelize db:migrate
```

Agora, vamos popular a tabela `users`:

```bash
  yarn sequelize db:seed:all
```

Vamos colocar o servidor para rodar. Digite o seguinte comando:

```bash
  yarn dev
```

## :camera: Screenshots



## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by [Sandro Santos](https://github.com/sandro-dev) | [Me add no LinkedIn](https://www.linkedin.com/in/sandrossantos/)
