import pool from "../../config/database";

class ListAllCategoriesService {
    static async execute() {
        const sql = 'SELECT * FROM categoria';
        const categorias = await pool.query(sql);
        return categorias.rows;
    }
}

export default ListAllCategoriesService;