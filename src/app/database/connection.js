import mysql from 'mysql';

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'bd_apirest'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as ID', connection.threadId);
});

/**
 * Executa um codigo sql com ou sem valores
 * @param {string} sql intrução sql a ser executada
 * @param {string=id | [livro, id]} valores a serem passados para o sql
 * @param {string} messageReject mensagem a ser exibida
 * @returns objeto da Promisse
 */
export const consult = (sql, valores='', messageReject) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, valores, (error, result) => {
            if(error) 
                return reject(messageReject)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default connection