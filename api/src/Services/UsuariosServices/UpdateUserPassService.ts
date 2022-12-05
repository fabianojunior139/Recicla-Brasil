import pool from "../../config/database";

class UpdateUserPassService {
    static async execute(id: number, nova_senha: string) {
        const sql = 'UPDATE usuario SET senha = $1 WHERE id = $2;';
        await pool.query(sql, [nova_senha, id]);
    }
}

export default UpdateUserPassService;