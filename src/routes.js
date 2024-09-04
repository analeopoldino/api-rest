import { Router } from 'express';
import LivroController from './app/controllers/LivroController.js';

const router = Router();

/**
 * Rota para criar um novo livro.
 * @route POST /livros
 * @group Livros - Operações relacionadas a livros
 * @param {object} livro.body - Dados do livro a ser criado
 * @returns {object} 201 - Livro criado
 * @returns {object} 500 - Erro ao criar o livro
 */
router.post('/livros', LivroController.store);

/**
 * Rota para listar todos os livros.
 * @route GET /livros
 * @group Livros - Operações relacionadas a livros
 * @returns {object[]} 200 - Lista de livros
 * @returns {object} 500 - Erro ao buscar os livros
 */
router.get('/livros', LivroController.index);

/**
 * Rota para buscar um livro por ID.
 * @route GET /livros/{id}
 * @group Livros - Operações relacionadas a livros
 * @param {string} id.path.required - ID do livro a ser buscado
 * @returns {object} 200 - Livro encontrado
 * @returns {object} 404 - Livro não encontrado
 * @returns {object} 500 - Erro ao buscar o livro
 */
router.get('/livros/:id', LivroController.show);

/**
 * Rota para atualizar um livro existente.
 * @route PUT /livros/{id}
 * @group Livros - Operações relacionadas a livros
 * @param {string} id.path.required - ID do livro a ser atualizado
 * @param {object} livro.body - Dados do livro a serem atualizados
 * @returns {object} 200 - Livro atualizado com sucesso
 * @returns {object} 404 - Livro não encontrado para atualização
 * @returns {object} 500 - Erro ao atualizar o livro
 */
router.put('/livros/:id', LivroController.update);

/**
 * Rota para deletar um livro existente.
 * @route DELETE /livros/{id}
 * @group Livros - Operações relacionadas a livros
 * @param {string} id.path.required - ID do livro a ser deletado
 * @returns {object} 200 - Livro deletado com sucesso
 * @returns {object} 404 - Livro não encontrado para exclusão
 * @returns {object} 500 - Erro ao deletar o livro
 */
router.delete('/livros/:id', LivroController.delete);

/**
 * Rota padrão para teste.
 * @route GET /
 * @group Geral - Rotas gerais
 * @returns {string} 200 - Mensagem de boas-vindas
 */
router.get('/', (req, res) => {
    res.send('Bem-vindo à API de Livros');
});

export default router;
