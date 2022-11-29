import pool from "../../config/database";
import { IEmpresa } from "../../models/Empresa";

class CreateNewCompanyService {
    static async execute({ razao_social, cnpj, descricao, email, senha: hashSenha, id_endereco }: Omit<IEmpresa, 'id'>) {
        const sql = 'INSERT INTO empresa (razao_social, cnpj, descricao, email, senha, id_endereco) VALUES ($1, $2, $3, $4, $5, $6)';
        await pool.query(sql, [razao_social, cnpj, descricao, email, hashSenha, id_endereco]);
    }
}

export default CreateNewCompanyService;