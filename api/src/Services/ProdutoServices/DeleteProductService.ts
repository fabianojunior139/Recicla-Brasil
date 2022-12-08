import pool from "../../config/database";

class DeleteProductService {
    static async execute(id: number) {
        const sql = 'DELETE FROM produto WHERE id = $1';
        pool.query(sql, [id]);
    }
}

export default DeleteProductService;