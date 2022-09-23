# Proft NodeJS API

Projeto utilizando NodeJS.

## Documentação da API

#### Retorna todos os itens

```http
  GET /sales/by-seller
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `date` | `Date` | **Obrigatório**. Data para realizar a requisição |

#### Retorna um item

```http
  GET /sales/by-date/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `date`      | `Date` | **Obrigatório**. Data para realizar a requisição|



## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT`

`MONGODB_URI`


## Instalação

Instalando pacotes

```bash
  yarn install
```

Gerando um .env
```bash
  cp .env.example .env
```

Rodando docker
```bash
  docker-compose up --build
```

Rodando aplicação em prd
```bash
  yarn start
```

Rodando aplicação em dev
```bash
  yarn dev
```