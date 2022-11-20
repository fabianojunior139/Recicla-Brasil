import pool from "../../config/database"

class ListAllAdressService {
    static async execute() {
        const sql = 'SELECT * FROM endereco ORDER BY id';
        const enderecos = await pool.query(sql);
        return enderecos.rows;
    }
}

export default ListAllAdressService;