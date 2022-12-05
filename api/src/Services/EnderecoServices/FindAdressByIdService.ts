import pool from "../../config/database";

class FindAdressByIdService {
    static async execute(id: number) {
        const sql = 'SELECT * from endereco WHERE id = $1';
        const adress = await pool.query(sql, [id]);        
        return adress.rows[0];
    }
}

export default FindAdressByIdService;