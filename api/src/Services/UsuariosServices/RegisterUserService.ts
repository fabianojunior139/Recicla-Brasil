import pool from "../../config/database";
import { IUsuario } from "../../models/Usuario";

class RegisterUserService {
    static async execute({ nome, data_nascimento, cpf, email, senha, id_endereco }: Omit<IUsuario, 'id'>) {
        const sql = 'INSERT INTO public.usuario (nome, data_nascimento, cpf, email, senha, id_endereco) VALUES ($1, $2, $3, $4, $5, $6)';
        await pool.query(sql, [nome, data_nascimento, cpf, email, senha, id_endereco]);
    }
}

export default RegisterUserService;