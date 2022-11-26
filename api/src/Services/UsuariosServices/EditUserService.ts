import pool from "../../config/database";
import { IUsuario } from "../../models/Usuario";

class EditUserService {
    static async execute({ id, nome, data_nascimento, cpf, email }: Omit<IUsuario, 'senha, id_endereco'>) {
        const sql = 'UPDATE usuario SET nome = $1, data_nascimento = $2, cpf = $3, email = $4 WHERE id = $5';
        await pool.query(sql, [nome, data_nascimento, cpf, email, id]);        
    }
}

export default EditUserService;