import app from './app.js';

const PORT = process.env.PORT || 3000;
const routes = require('./routes');

app.use('/', routes);

//Inicia o servidor na porta especificada.
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});

