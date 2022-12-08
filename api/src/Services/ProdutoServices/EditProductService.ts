import pool from "../../config/database";
import { IProduto } from "../../models/Produto";

class EditProductService {
    static async execute({ id, nome, valor, id_categoria, id_empresa }: IProduto) {
        const sql = 'UPDATE produto SET nome = $1, valor = $2, id_empresa = $3, id_categoria = $4 WHERE id = $5';
        pool.query(sql, [nome, valor, id_empresa, id_categoria, id]);        
    }
}

export default EditProductService;