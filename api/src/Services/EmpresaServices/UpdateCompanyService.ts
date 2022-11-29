import pool from "../../config/database";
import { IEmpresa } from "../../models/Empresa";

class UpdateCompanyService {
    static async execute({ id, razao_social, cnpj, descricao, email, usuario_ativo }: Omit<IEmpresa, 'senha'>) {
        const sql = 'UPDATE empresa SET razao_social = $1, cnpj = $2, descricao = $3, email = $4, usuario_ativo = $5 WHERE id = $6';
        await pool.query(sql, [razao_social, cnpj, descricao, email, usuario_ativo, id]);
    }
}

export default UpdateCompanyService;