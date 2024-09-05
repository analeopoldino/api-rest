import app from '../src/app.js'; // ou require('../src/app.js') se estiver sem Babel/ES6
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Inicia o servidor na porta especificada.
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});
