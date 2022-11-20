import pool from "../../config/database";

class ListAllCompaniesService {
    static async execute() {
        const sql = 'SELECT * FROM empresa';
        const empresas = await pool.query(sql);
        return empresas.rows;
    }
}

export default ListAllCompaniesService;