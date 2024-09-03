import express from 'express'

const app = express()

// indicar para o express ler body com json
app.use(express.json())

// mock
const livros = [
    { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', ano: 1954 },
    { id: 2, titulo: '1984', autor: 'George Orwell', ano: 1949 },
    { id: 3, titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', ano: 1605 },
    { id: 4, titulo: 'Moby Dick', autor: 'Herman Melville', ano: 1851 },
    { id: 5, titulo: 'A Odisséia', autor: 'Homero', ano: 'Século VIII a.C.' },
    { id: 6, titulo: 'O Grande Gatsby', autor: 'F. Scott Fitzgerald', ano: 1925 },
    { id: 7, titulo: 'A Revolução dos Bichos', autor: 'George Orwell', ano: 1945 },
    { id: 8, titulo: 'O Sol é para Todos', autor: 'Harper Lee', ano: 1960 }
]

// retornar o objeto por id
function buscarLivrosPorId(id){
    return livros.filter( livro => livro.id == id )
}

// pegar a posicao ou index do elemento no array por id
function buscarIndexLivros(id){
    return livros.findIndex( livro => livro.id == id)
}

// criar rota padrão ou raiz
// req = requisição (request), res = resposta (response) 
// endpopints  
app.post('/livros', (req, res) =>{
    livros.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso!')
})
     
app.get('/livros/:id', (req, res) => {
    res.json(buscarLivrosPorId(req.params.id))
})

app.put('/livros/:id', (req, res) => {
    let index = buscarIndexLivros(req.params.id)
livros[index].livro      = req.body.livro
    livros[index].titulo = req.body.titulo
    livros[index].autor  = req.body.autor
    livros[index].ano    = req.body.ano
    res.json(livros)
})

// splice: metodo usado para remover elemento de um array
app.delete('/livros/:id', (req, res) => {
    let index = buscarIndexLivros(req.params.id)
    livros.splice(index, 1)
    res.send(`Livro com id ${req.params.id} excluído com suceso!`)
})

app.get('/', (req, res) =>{
    res.send('Bem-vindo à API de Livros!');
})

//status 200 = sucesso
app.get('/livros', (req, res) => {
    res.status(200).send(livros)
})

export default app
