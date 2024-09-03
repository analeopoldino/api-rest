import connection from '../database/connection.js'

class LivroRepository{
    // CRUD
    create(livro) {
        const sql = "INSERT INTO livros SET ?;"
        return new Promise((resolve, reject) => {
            connection.query(sql, livro, (error, result) => {
                if(error) 
                    return reject('Não foi possível cadastrar!')
                // fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findAll() {
        const sql = "SELECT * FROM livros;"
        return new Promise((resolve, reject) => {
            connection.query(sql, (error, result) => {
                if(error) 
                    return reject('Não foi possível localizar!')
                // fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findById(id) {
        const sql = "SELECT * FROM livros WHERE id=?;"
        return new Promise((resolve, reject) => {
            connection.query(sql, id, (error, result) => {
                if(error) 
                    return reject('Não foi possível localizar!')
                // fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    update(livro, id) {
        const sql = "UPDATE livros SET ? WHERE id=?;"
        return new Promise((resolve, reject) => {
            connection.query(sql, [livro, id], (error, result) => {
                if(error) 
                    return reject('Não foi possível atualizar!')
                // fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    delete(id) {
        const sql = "DELETE FROM livros WHERE id=?;"
        return new Promise((resolve, reject) => {
            connection.query(sql, id, (error, result) => {
                if(error) 
                    return reject('Não foi possível deletar!')
                // fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

}

export default new LivroRepository()