import pool from "../../config/database";

class ListUsersService {
    static async execute() {
        const sql = 'SELECT * FROM usuario ORDER BY id';
        const usuarios = await pool.query(sql);
        return usuarios.rows;
    }
}

export default ListUsersService;