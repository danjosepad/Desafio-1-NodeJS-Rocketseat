# :clipboard: Estrutura NodeJS

Modelo de estrutura para novos projetos utilizando express, eslint, prettier, nodemon e sucrase

### :bookmark_tabs: Resumo 
Nesse módulo foi desenvolvida uma aplicação utilizando os conceitos estudados com todos
os métodos de requisição(GET, POST, PUT, DELETE) e aplicando os conceitos de middlewares de forma global e local.

### :clipboard: Como usar

```javascript
//Dentro da pasta rode:
yarn start
```

### Rotas

A URL base para acesso é: [http://localhost:3333](http://localhost:3333)

```javascript
GET /projects  // Lista todos os projetos existentes
POST /projects // Cria um novo projeto
PUT /projects/:id // Altera o titulo de um projeto existente
DELETE /projects/:id // Deleta um projeto
POST /projects/:id/tasks // Cria uma tarefa em um projeto existente
```

### Middlewares

Neste projeto, o middleware existente faz a validação de projetos, retornando erro caso um projeto não exista ao tentar realizar uma ação 

### Validação de Campos

Neste projeto, foi utilizada a dependência [Yup](https://github.com/jquense/yup) para validar os parametros das requisições
