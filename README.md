# API REST para Gerenciamento de Livros

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
5. Inicie o servidor: `npm start`

## Endpoints da API

- **GET /livros**: Retorna todos os livros.
  - Exemplo de requisição: `GET https://fcff-2804-d45-bf29-5b00-f198-bbfc-5df2-c20a.ngrok-free.app/livros`

- **POST /livros**: Adiciona um novo livro.
  - Corpo da requisição (JSON):
    ```json
    {
      "titulo": "Título do Livro",
      "autor":  "Autor do Livro",
      "ano":    "Ano do Livro"
    }
    ```
  - Exemplo de requisição: `POST https://fcff-2804-d45-bf29-5b00-f198-bbfc-5df2-c20a.ngrok-free.app/livros`

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
  - Exemplo de requisição: `PUT https://fcff-2804-d45-bf29-5b00-f198-bbfc-5df2-c20a.ngrok-free.app/livros/1`

- **DELETE /livros/:id**: Remove um livro.
  - Parâmetros de URL: `id` (ID do livro a ser removido)
  - Exemplo de requisição: `DELETE https://fcff-2804-d45-bf29-5b00-f198-bbfc-5df2-c20a.ngrok-free.app/livros/1`

## Hospedagem

A API pode ser acessada em: [https://fcff-2804-d45-bf29-5b00-f198-bbfc-5df2-c20a.ngrok-free.app/livros](https://fcff-2804-d45-bf29-5b00-f198-bbfc-5df2-c20a.ngrok-free.app/livros)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
