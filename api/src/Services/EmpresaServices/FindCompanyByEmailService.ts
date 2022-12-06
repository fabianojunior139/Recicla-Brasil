import pool from "../../config/database";

class FindCompanyByEmailService {
    static async execute(email: string) {
        const sql = 'SELECT id, email, senha, usuario_ativo, id_endereco, usuario_comum FROM public.empresa WHERE email = $1 LIMIT 1';
        const user = await pool.query(sql, [email]);
        return user.rows[0];
    }
}

export default FindCompanyByEmailService;