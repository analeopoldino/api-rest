import app from './src/app.js'

import connection from './infra/connection.js'

const PORT = 3000

// fazer a conexao
connection.connect((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Conexão realizada com sucesso!");
        // escutar a porta 3000
        app.listen(PORT,() => {
             console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
        })
    }
})

    


