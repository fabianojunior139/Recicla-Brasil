import pool from "../../config/database";

class ListProductsByIdService {
    static async execute(id: number) {
        const sql = 'SELECT * FROM produto WHERE id = $1';
        const produto = await pool.query(sql, [id]);
        return produto.rows[0];
    }
}

export default ListProductsByIdService;