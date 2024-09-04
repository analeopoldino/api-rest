import { consult } from '../database/connection.js';

/**
 * Repositório para gerenciar operações CRUD relacionadas a livros no banco de dados.
 * @class
 */
class LivroRepository {
    /**
     * Adiciona um novo livro ao banco de dados.
     * @param {Object} livro - Objeto contendo os dados do livro a ser adicionado.
     * @returns {Promise<Object>} - Retorna uma Promise que resolve para o resultado da operação de inserção.
     */
    create(livro) {
        const sql = "INSERT INTO livros SET ?;";
        return consult(sql, livro, 'Não foi possível cadastrar o livro!');
    }

    /**
     * Retorna todos os livros do banco de dados.
     * @returns {Promise<Array>} - Retorna uma Promise que resolve para um array de livros.
     */
    findAll() {
        const sql = "SELECT * FROM livros;";
        return consult(sql, null, 'Não foi possível buscar os livros!');
    }

    /**
     * Retorna um livro específico pelo ID.
     * @param {number} id - ID do livro a ser buscado.
     * @returns {Promise<Array>} - Retorna uma Promise que resolve para um array contendo o livro, ou um array vazio se não encontrado.
     */
    findById(id) {
        const sql = "SELECT * FROM livros WHERE id=?;";
        return consult(sql, id, 'Não foi possível buscar o livro!');
    }

    /**
     * Atualiza os dados de um livro existente.
     * @param {Object} livro - Objeto contendo os novos dados do livro.
     * @param {number} id - ID do livro a ser atualizado.
     * @returns {Promise<Object>} - Retorna uma Promise que resolve para o resultado da operação de atualização.
     */
    update(livro, id) {
        const sql = "UPDATE livros SET ? WHERE id=?;";
        return consult(sql, [livro, id], 'Não foi possível atualizar o livro!');
    }

    /**
     * Remove um livro do banco de dados pelo ID.
     * @param {number} id - ID do livro a ser removido.
     * @returns {Promise<Object>} - Retorna uma Promise que resolve para o resultado da operação de exclusão.
     */
    delete(id) {
        const sql = "DELETE FROM livros WHERE id=?;";
        return consult(sql, id, 'Não foi possível deletar o livro!');
    }

    /**
     * Verifica se um livro com o mesmo título já existe no banco de dados.
     * @param {Object} livro - Objeto contendo o título do livro a ser verificado.
     * @returns {Promise<boolean>} - Retorna uma Promise que resolve para um booleano indicando se o livro existe ou não.
     */
    async exists(livro) {
        const sql = "SELECT * FROM livros WHERE titulo = ?"; 
        const rows = await consult(sql, livro.titulo);
        return rows.length > 0;
    }
}

export default new LivroRepository();
