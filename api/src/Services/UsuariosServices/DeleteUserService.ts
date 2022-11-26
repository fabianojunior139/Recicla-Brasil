import pool from "../../config/database";

class DeleteUserService {
    static async execute(id: number) {
        const sql = 'DELETE FROM usuario WHERE id = $1';
        await pool.query(sql, [id]);
    }
}

export default DeleteUserService