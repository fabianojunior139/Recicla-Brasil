import pool from "../../config/database"

class ListarProdutosPorIdEmpresaService {
    static async execute(id: number) {
        const sql = `SELECT e.*, emp.razao_social, emp.cnpj, emp.descricao, emp.email, p.id, p.nome, p.valor, c.nome as nome_categoria
                     FROM endereco e
                     INNER JOIN empresa emp
                     ON e.id = emp.id_endereco
                     INNER JOIN produto p 
                     ON emp.id = p.id_empresa
                     INNER JOIN categoria c
                     ON c.id = p.id_categoria
                     WHERE p.id_empresa = $1`;
        const produtos = await pool.query(sql, [id]);
        return produtos.rows;
    }
}

export default ListarProdutosPorIdEmpresaService;