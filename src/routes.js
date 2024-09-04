import { Router } from 'express';
import LivroController from './app/controllers/LivroController.js'

const router = Router()

// ROTAS  
router.post('/livros', LivroController.store)
router.get('/livros', LivroController.index)
router.get('/livros/:id', LivroController.show)
router.put('/livros/:id', LivroController.update)
router.delete('/livros/:id', LivroController.delete)

export default router