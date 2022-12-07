import Produto from "../models/Produto";
import { IProduto } from "../models/Produto";

class ProdutoController {
    static async listarProdutos(id: number) {
        return await Produto.index(id);
    }

    static async cadastrarProduto({ nome, valor, id_categoria, id_empresa }: Omit<IProduto, 'id'>) {
        return await Produto.create({ nome, valor, id_categoria, id_empresa })
    }
}

export default ProdutoController


