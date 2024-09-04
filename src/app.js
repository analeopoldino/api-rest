import express from 'express';
import routes from './routes.js';

const app = express();

// Middleware para ler o corpo das requisições como JSON.
app.use(express.json());

// Usar as rotas definidas em routes.js.
app.use(routes);

export default app;
