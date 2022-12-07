import pool from "../../config/database";
import { IEmpresa } from "../../models/Empresa";

class UpdateCompanyService {
    static async execute({ id, razao_social, cnpj, descricao, email }: Omit<IEmpresa, 'senha'>) {
        const sql = 'UPDATE empresa SET razao_social = $1, cnpj = $2, descricao = $3, email = $4 WHERE id = $5';
        await pool.query(sql, [razao_social, cnpj, descricao, email, id]);
    }
}

export default UpdateCompanyService;