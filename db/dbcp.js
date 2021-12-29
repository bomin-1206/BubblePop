const mysql = require('mysql')

const pool= mysql.createPool({
    host:'localhost',
    port: 3000,
    database: 'date',
    user: 'root',
    password: 'Tkfkd415161?',
    connectionLimit: 4
});

module.exports.getConnection = async()=>{
    return await pool.getConnection();
}