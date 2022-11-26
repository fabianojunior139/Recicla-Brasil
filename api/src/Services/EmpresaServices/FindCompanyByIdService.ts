import pool from "../../config/database";

class ListCompanyByIdService {
    static async execute(id: number) {
        const sql = 'SELECT * FROM empresa WHERE id = $1';
        const empresa = await pool.query(sql, [id]);
        return empresa.rows;
    }
}

export default ListCompanyByIdService;