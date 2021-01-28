# Node TDD Jest Structure

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

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [Sucrase](https://sucrase.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cross-env](https://www.npmjs.com/package/cross-env)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)
- [Sucrease Jest](https://www.npmjs.com/package/@sucrase/jest-plugin)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Faker](https://github.com/marak/Faker.js/)
- [Factory Girl](https://www.npmjs.com/package/factory-girl)
- [Yup](https://github.com/jquense/yup)
- [Validator](https://www.npmjs.com/package/validator)
- [JWT](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

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
