import Produto from "../models/Produto";
import { IProduto } from "../models/Produto";
import ListarProdutosPorIdEmpresaService from "../Services/ProdutoServices/ListarProdutosPorIdEmpresaService";

class ProdutoController {
    static async listarProdutoPorId(id: number) {
        return await Produto.ListById(id);
    }

    static async listarProdutos(id: number) {
        return await Produto.index(id);
    }

    static async listarProdutosPorIdEmpresa(id: number) {
        return await ListarProdutosPorIdEmpresaService.execute(id);
    }

    static listarProdutosFiltros(nomeDoProduto: string, nomeDaEmpresa: string, id_categoria: number) {
        return Produto.ListProductsFilters(nomeDoProduto, nomeDaEmpresa, id_categoria);
    }

    static async cadastrarProduto({ nome, valor, id_categoria, id_empresa }: Omit<IProduto, 'id'>) {
        return await Produto.create({ nome, valor, id_categoria, id_empresa })
    }

    static async editProduct({ id, nome, valor, id_categoria, id_empresa }: IProduto) {
        return await Produto.edit({ id, nome, valor, id_categoria, id_empresa })
    }

    static async excluiProduto(id: number) {
        return await Produto.delete(id);
    }
}

export default ProdutoController


