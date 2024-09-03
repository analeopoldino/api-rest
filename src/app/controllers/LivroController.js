import connection from '../database/connection.js'

class LivroController{

    index(req, res) {
        const sql = "SELECT * FROM livros;"
        connection.query(sql, (error, result) => {
            if(error){
                res.status(404).json({ 'error': error })
            } else {
                res.status(200).json(result)
            }
        })
    }

    show(req, res){
        const id = req.params.id
        const sql = "SELECT * FROM livros WHERE id=?;"
        connection.query(sql, id, (error, result) => {
            //pegando a primira posicao do result pois sempre vai ter so um resultado ou nenhum
            const row = result[0]
            if(error){
                res.status(404).json({ 'error': error })
            } else {
                res.status(200).json(row)
            }
        })
    }

    store(req, res){
        const livro = req.body
        const sql = "INSERT INTO livros SET ?;"
        connection.query(sql, livro, (error, result) => {
            if(error){
                res.status(404).json({ 'error': error })
            } else {
                res.status(201).json(result)
            }
        })
    }

    update(req, res){
        const id = req.params.id
        const livro = req.body
        const sql = "UPDATE livros SET ? WHERE id=?;"
        connection.query(sql, [livro, id] , (error, result) => {
            if(error){
                res.status(404).json({ 'error': error })
            } else {
                res.status(200).json(result)
            }
        })
    }

    delete(req, res){
        const id = req.params.id
         const sql = "DELETE FROM livros WHERE id=?;"
         connection.query(sql, id, (error, result) => {
             if(error){
                 res.status(404).json({ 'error': error })
             } else {
                 res.status(200).json(result)
             }
         })
    }

}

//padrao Singleton
export default new LivroController()