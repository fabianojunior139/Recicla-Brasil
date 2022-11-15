import pool from "../../config/database";

class FindUserByEmailService {
    static async execute(email: string) {
        const sql = 'SELECT * FROM public.usuario WHERE email = $1 LIMIT 1';
        const user = await pool.query(sql, [email]);
        return user.rows[0];
    }
}

export default FindUserByEmailService;