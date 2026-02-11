import mysql from 'mysql2/promise';
import 'dotenv/config'


const pool = mysql.createPool({
    host: process.env.SERVER_HOST,
    user: process.env.SERVER_USER,
    password: process.env.SERVER_PASSWORD,
    database: process.env.SERVER_DATABASE,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

(async()=>{
    try{
        const connection = await pool.getConnection();
        console.log('Conectando ao MySql');
        connection.release();
    }catch(error){
        console.error(`Erro ao conectar com o MySql: ${error}`);
    }
})();

export default pool;