import pool from "../config/db.js";

const categoriasModel = {
    selectALL: async () => {
        const sql = 'SELECT *FROM categorias;';
        const [rows] = await pool.execute(sql)
        return rows;
    },
    insert: async (pDescricao) => {
        const sql = "INSERT INTO categorias(descricaoCategoria) VALUES (?);";
        const values = [pDescricao];
        const [rows] = await pool.execute(sql, values);
        return rows;
    }
}

export default categoriasModel