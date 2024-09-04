import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'bd_apirest'
})

connection.connect()

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