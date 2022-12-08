import pool from "../../config/database";

class ListarProdutosFiltrosService {
    static async execute(nomeDoProduto: string, nomeDaEmpresa: string, id_categoria: number) {
        let sql = `SELECT e.longradouro, e.numero, emp.razao_social, p.id as id_produto, p.nome as nome_produto, p.valor as valor_produto, p.id_categoria, c.nome as nome_categoria
        FROM endereco e
        INNER JOIN empresa emp
        ON e.id = emp.id_endereco
        INNER JOIN produto p 
        ON emp.id = p.id_empresa
        INNER JOIN categoria c
        ON c.id = p.id_categoria `

        if (nomeDoProduto && nomeDaEmpresa && id_categoria) {
            sql += ` WHERE p.nome ILIKE '%${nomeDoProduto}%' AND emp.razao_social ILIKE '%${nomeDaEmpresa}%' AND c.id = '${id_categoria}' `
        } else if (nomeDoProduto && nomeDaEmpresa && !id_categoria) {
            sql += ` WHERE p.nome ILIKE '%${nomeDoProduto}%' AND emp.razao_social ILIKE '%${nomeDaEmpresa}%' `
        } else if (nomeDoProduto && !nomeDaEmpresa && id_categoria) {
            sql += ` WHERE p.nome ILIKE '%${nomeDoProduto}%' AND c.id = '${id_categoria}' `
        } else if (nomeDoProduto && !nomeDaEmpresa && !id_categoria) {
            sql += ` WHERE p.nome ILIKE '%${nomeDoProduto}%' `
        } else if (!nomeDoProduto && nomeDaEmpresa && id_categoria) {
            sql += ` WHERE emp.razao_social ILIKE '%${nomeDaEmpresa}%' AND c.id = '${id_categoria}' `
        } else if (!nomeDoProduto && nomeDaEmpresa && !id_categoria) {
            sql += ` WHERE emp.razao_social ILIKE '%${nomeDaEmpresa}%' `
        } else if (!nomeDoProduto && !nomeDaEmpresa && id_categoria) {
            sql += ` WHERE c.id = '${id_categoria}' `
        }
        
        const produtos = await pool.query(sql);
        return produtos.rows;
    }
}

export default ListarProdutosFiltrosService;