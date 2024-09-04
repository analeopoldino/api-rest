import LivroRepository from '../repositories/LivroRepository.js';

/**
 * Controlador para gerenciar livros.
 * @class
 */
class LivroController {
    /**
     * Retorna todos os livros.
     * @async
     * @param {Object} req - Objeto de solicitação Express.
     * @param {Object} res - Objeto de resposta Express.
     * @returns {Promise<void>}
     */
    async index(req, res) {
        try {
            const rows = await LivroRepository.findAll();
            res.json(rows);
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível buscar os livros.' });
        }
    }

    /**
     * Retorna um livro específico pelo ID.
     * @async
     * @param {Object} req - Objeto de solicitação Express.
     * @param {Object} res - Objeto de resposta Express.
     * @returns {Promise<void>}
     */
    async show(req, res) {
        const id = req.params.id;
        try {
            const row = await LivroRepository.findById(id);
            if (row.length === 0) {
                return res.status(404).json({ message: 'Livro não encontrado.' });
            }
            res.json(row);
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível buscar o livro.' });
        }
    }

    /**
     * Adiciona um novo livro.
     * @async
     * @param {Object} req - Objeto de solicitação Express, contendo os dados do livro no corpo.
     * @param {Object} res - Objeto de resposta Express.
     * @returns {Promise<void>}
     */
    async store(req, res) {
        const livro = req.body;
        try {
            const exists = await LivroRepository.exists(livro);
            if (exists) {
                return res.status(400).json({ message: 'Livro já existe no banco de dados.' });
            }
            const row = await LivroRepository.create(livro);
            res.status(201).json(row);
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível cadastrar o livro.' });
        }
    }

    /**
     * Atualiza um livro existente.
     * @async
     * @param {Object} req - Objeto de solicitação Express, contendo o ID do livro na URL e os novos dados no corpo.
     * @param {Object} res - Objeto de resposta Express.
     * @returns {Promise<void>}
     */
    async update(req, res) {
        const id = req.params.id;
        const livro = req.body;
        try {
            const result = await LivroRepository.update(livro, id);
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Livro não encontrado para atualização.' });
            }
            res.json({ message: 'Livro atualizado com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível atualizar o livro.' });
        }
    }

    /**
     * Remove um livro pelo ID.
     * @async
     * @param {Object} req - Objeto de solicitação Express, contendo o ID do livro na URL.
     * @param {Object} res - Objeto de resposta Express.
     * @returns {Promise<void>}
     */
    async delete(req, res) {
        const id = req.params.id;
        try {
            const result = await LivroRepository.delete(id);
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Livro não encontrado para exclusão.' });
            }
            res.json({ message: 'Livro deletado com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível deletar o livro.' });
        }
    }
}

export default new LivroController();
