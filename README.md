# API REST PARA GERENCIAMENTO DE LIVROS

Esta API permite gerenciar um catálogo de livros, oferecendo operações de CRUD (Create, Read, Update, Delete).

## Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- Nodemon (para desenvolvimento)

## Instalação

1. Clone este repositório: `git clone https://github.com/analeopoldino/api-rest.git`
2. Navegue até a pasta do projeto: `cd api-rest`
3. Instale as dependências: `npm install`
4. Configure as variáveis de ambiente no arquivo `.env`
5. Inicie o servidor: `node api/index.js`

## Endpoints da API

- **GET /livros**: Retorna todos os livros.
  - Exemplo de requisição: `GET https://api-rest-oxpq.onrender.com/livros`

- **POST /livros**: Adiciona um novo livro.
  - Corpo da requisição (JSON):
    ```json
    {
      "titulo": "Título do Livro",
      "autor":  "Autor do Livro",
      "ano":    "Ano do Livro"
    }
    ```

- **PUT /livros/:id**: Atualiza um livro existente.
  - Parâmetros de URL: `id` (ID do livro a ser atualizado)
  - Corpo da requisição (JSON):
    ```json
    {
      "titulo": "Título do Livro",
      "autor":  "Autor do Livro",
      "ano":    "Ano do Livro"
    }
    ```
- **DELETE /livros/:id**: Remove um livro.
  - Parâmetros de URL: `id` (ID do livro a ser removido)


**OBS: Não é possível usar **POST**, **PUT** e **DELETE** diretamente pela URL no Render. Utilize ferramentas como **Postman**, **cURL**, ou implemente no seu frontend para utilizar essas funções.**

## Como usar o Postman ou cURL para PUT e DELETE

Para realizar as requisições **POST**, **PUT** e **DELETE**, siga estas instruções:

### POST (Adicionar Novo Livro)
#### Exemplo com cURL:
```sh
curl -X POST https://api-rest-oxpq.onrender.com/livros \
     -H "Content-Type: application/json" \
     -d '{"titulo": "Novo Livro", "autor": "Autor Novo", "ano": 2023}'

```

### PUT (Atualizar Livro)
#### Exemplo com cURL:
```sh
curl -X PUT https://api-rest-oxpq.onrender.com/livros/1 \
     -H "Content-Type: application/json" \
     -d '{"titulo": "Título Atualizado", "autor": "Autor Atualizado", "ano": 2024}'

```

### DELETE (Remove um livro)
#### Exemplo com cURL:
```sh
curl -X DELETE https://api-rest-oxpq.onrender.com/livros/1
```

## Hospedagem

A API pode ser acessada em: [Acesse](https://api-rest-oxpq.onrender.com)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
