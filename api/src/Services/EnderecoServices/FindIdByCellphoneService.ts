import pool from "../../config/database";

class FindIdByCellphoneService {
    static async execute(tel1: string) {        
        const sql = 'SELECT id FROM endereco WHERE tel1 = $1 LIMIT 1';
        const endereco = await pool.query(sql, [tel1]);
        return endereco.rows[0];
    }
}

export default FindIdByCellphoneService;