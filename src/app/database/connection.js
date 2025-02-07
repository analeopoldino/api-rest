import mysql from 'mysql2'; 

import dotenv from 'dotenv';

// Carregar variáveis do arquivo .env
dotenv.config();

// Configuração da conexão com MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: true }  // Se necessário, dependendo do seu provedor de banco de dados
});

// Conectar ao banco de dados e mostrar o ID da conexão
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as ID', connection.threadId);
});

// Função para realizar consultas SQL
export const consult = (sql, valores = '', messageReject) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, valores, (error, result) => {
            if (error) {
                return reject(messageReject);
            }
            const row = JSON.parse(JSON.stringify(result));
            return resolve(row);
        });
    });
};

export default connection;
