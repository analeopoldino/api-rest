import LivroRepository from '../repositories/LivroRepository.js'

class LivroController {

    async index(req, res) {
        const row = await LivroRepository.findAll()
        res.json(row)
    }

    async show(req, res){
        const id = req.params.id
        const row = await LivroRepository.findById(id)
        res.json(row)
    }

    async store(req, res){
        const livro = req.body
        const row = await LivroRepository.create(livro)
        res.json(row)
    }

    async update(req, res){
        const id = req.params.id
        const livro = req.body
        const row = await LivroRepository.update(livro, id)
        res.json(row)
    }

    async delete(req, res){
        const id = req.params.id
        const row = await LivroRepository.delete(id)
        res.json(row)
    }

}

//padrao Singleton
export default new LivroController()