import pool from "../../config/database";

class ListAllProductsService {
    static async execute() {
        const sql = 'SELECT * FROM produto';
        const produtos = await pool.query(sql);
        return produtos.rows;
    }
}

export default ListAllProductsService;