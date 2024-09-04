import { consult } from '../database/connection.js'

class LivroRepository{
    // CRUD
    create(livro) {
        const sql = "INSERT INTO livros SET ?;"
        return consult(sql, livro, 'Não foi possível cadastrar!')
    }

    findAll() {
        const sql = "SELECT * FROM livros;"
        return consult(sql, 'Não foi possível localizar!')
    }

    findById(id) {
        const sql = "SELECT * FROM livros WHERE id=?;"
        return consult(sql, id, 'Não foi possível localizar!')
    }

    update(livro, id) {
        const sql = "UPDATE livros SET ? WHERE id=?;"
        return consult(sql, [livro, id], 'Não foi possível atualizar!')
    }

    delete(id) {
        const sql = "DELETE FROM livros WHERE id=?;"
        return consult(sql, id, 'Não foi possível deletar!')
    }

}

export default new LivroRepository()