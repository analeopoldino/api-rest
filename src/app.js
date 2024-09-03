import express from 'express'
import connection from '../infra/connection.js'

const app = express()

// indicar para o Express ler body com json
app.use(express.json())

// retornar o objeto por id
function buscarLivrosPorId(id){
    return livros.filter( livro => livro.id == id )
}

// pegar a posicao ou index do elemento no array por id
function buscarIndexLivros(id){
    return livros.findIndex( livro => livro.id == id)
}
    
// ROTAS  
app.post('/livros', (req, res) =>{
    const livro = req.body
    const sql = "INSERT INTO livros SET ?;"
    connection.query(sql, livro, (error, result) => {
        if(error){
            res.status(400).json({ 'error': error })
        } else {
            res.status(201).json(result)
        }
    })
})
     
app.get('/livros/:id', (req, res) => {
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
})

app.put('/livros/:id', (req, res) => {
    const id = req.params.id
    const livro = req.body
    const sql = "UPDATE livros SET ? WHERE id=?;"
    connection.query(sql, [livro, id] , (error, result) => {
        if(error){
            res.status(400).json({ 'error': error })
        } else {
            res.status(200).json(result)
        }
    })
})

app.delete('/livros/:id', (req, res) => {
   const id = req.params.id
    const sql = "DELETE FROM livros WHERE id=?;"
    connection.query(sql, id, (error, result) => {
        if(error){
            res.status(404).json({ 'error': error })
        } else {
            res.status(200).json(result)
        }
    })
})

app.get('/livros', (req, res) => {
    const sql = "SELECT * FROM livros;"
    connection.query(sql, (error, result) => {
        if(error){
            res.status(404).json({ 'error': error })
        } else {
            res.status(200).json(result)
        }
    })
})

export default app
