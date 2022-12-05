import pool from "../../config/database";

class FindUserByIdService {
    static async execute(id: number) {
        const sql = 'SELECT id, nome, data_nascimento, cpf, email, senha, usuario_ativo, id_endereco FROM usuario WHERE id = $1 LIMIT 1';
        const usuario = await pool.query(sql, [id])
        return usuario.rows[0];
    }
}

export default FindUserByIdService;