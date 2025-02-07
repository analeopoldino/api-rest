import mysql from 'mysql';
import dotenv from 'dotenv';

// Carrega variáveis do arquivo .env
dotenv.config();

// Configurar conexão com MySQL
import mysql from 'mysql';

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: true }
});

// Conecta ao banco de dados e exibe uma mensagem no console sobre o status da conexão.
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as ID', connection.threadId);
});

/**
 * Executa uma instrução SQL com ou sem valores e retorna o resultado.
 * @param {string} sql - Instrução SQL a ser executada.
 * @param {Array|string} [valores=''] - Valores a serem passados para a instrução SQL. Pode ser uma string ou um array de valores.
 * @param {string} messageReject - Mensagem a ser exibida em caso de erro.
 * @returns {Promise<Object>} - Retorna uma Promise que resolve para o resultado da consulta SQL.
 */
export const consult = (sql, valores='', messageReject) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, valores, (error, result) => {
            if (error) {
                return reject(messageReject);
            }
            // Converte o resultado para um formato JSON para garantir a consistência dos dados.
            const row = JSON.parse(JSON.stringify(result));
            return resolve(row);
        });
    });
};

export default connection;
