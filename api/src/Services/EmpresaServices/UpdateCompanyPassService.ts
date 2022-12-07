import pool from "../../config/database"

class UpdateCompanyPassService {
    static async execute(id: number, nova_senha: string) {
        const sql = 'UPDATE empresa SET senha = $1 WHERE id = $2;';
        await pool.query(sql, [nova_senha, id]);
    }
}

export default UpdateCompanyPassService