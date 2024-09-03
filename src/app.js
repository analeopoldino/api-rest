import express from 'express'
import LivroController from './app/controllers/LivroController.js'

const app = express()

// indicar para o Express ler body com json
app.use(express.json())
  
// ROTAS  
app.post('/livros', LivroController.store)
app.get('/livros', LivroController.index)
app.get('/livros/:id', LivroController.show)
app.put('/livros/:id', LivroController.update)
app.delete('/livros/:id', LivroController.delete)

export default app
