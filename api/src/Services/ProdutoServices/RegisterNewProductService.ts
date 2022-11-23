import pool from "../../config/database";
import { IProduto } from "../../models/Produto";

class RegisterNewProductService {
    static async execute({ nome, valor, id_categoria, id_empresa }: Omit<IProduto, 'id'>) {
        const sql = 'INSERT INTO produto (nome, valor, id_empresa, id_categoria) VALUES ($1, $2, $3, $4)';
        await pool.query(sql, [nome, valor, id_empresa, id_categoria])
    }
}

export default RegisterNewProductService;
