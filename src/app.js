import express from 'express'
import routes from './routes.js'

const app = express()

// indicar para o express ler
app.use(express.json())

// usar o routes depois do app
app.use(routes)

// indicar para o Express ler body com json
app.use(express.json())

export default app
