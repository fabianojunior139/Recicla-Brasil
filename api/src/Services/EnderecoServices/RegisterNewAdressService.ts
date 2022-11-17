import pool from "../../config/database"
import { IEndereco } from "../../models/Endereco"

class RegisterNewAdressService {
    static async execute({ cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 }: Omit<IEndereco, 'id'>) {
        const sql = 'INSERT INTO public.endereco(cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
        await pool.query(sql, [cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2]);
    }
}

export default RegisterNewAdressService