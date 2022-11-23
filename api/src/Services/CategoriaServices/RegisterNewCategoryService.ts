import pool from "../../config/database";

class RegisterNewCategoryService {
    static async execute(nome: string) {
        const sql = 'INSERT INTO categoria (nome) VALUES ($1)';
        await pool.query(sql, [nome]);
    }
}

export default RegisterNewCategoryService;