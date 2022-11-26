import pool from "../../config/database";
import { IEndereco } from "../../models/Endereco";

class UpdateAdressService {
    static async execute({ id, cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 }: IEndereco) {
        const sql = 'UPDATE endereco SET cep = $1, longradouro = $2, complemento = $3, referencia = $4, bairro = $5, cidade = $6, estado = $7, tel1 = $8, tel2 = $9, numero = $10 WHERE id = $11';
        await pool.query(sql, [cep, longradouro, complemento, referencia, bairro, cidade, estado, tel1, tel2, numero, id]);
    }
}

export default UpdateAdressService;