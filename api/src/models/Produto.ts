import ListAllProductsService from "../Services/ProdutoServices/ListAllProductsService";
import RegisterNewProductService from "../Services/ProdutoServices/RegisterNewProductService";
import DeleteProductService from "../Services/ProdutoServices/DeleteProductService";
import ListProductsByIdService from "../Services/ProdutoServices/ListProductsByIdService";
import EditProductService from "../Services/ProdutoServices/EditProductService";
import ListarProdutosFiltrosService from "../Services/ProdutoServices/ListarProdutosFiltrosService";

export interface IProduto {
    id: number,
    nome: string,
    valor: number,
    id_empresa: number,
    id_categoria: number
}

class Produto {
    private id: number;
    private nome: string;
    private valor: number;
    private id_empresa: number;
    private id_categoria: number;

    static async index(id: number) {
        return await ListAllProductsService.execute(id);
    }
    static async ListById(id: number) {
        return await ListProductsByIdService.execute(id);
    }

    static ListProductsFilters(nomeDoProduto: string, nomeDaEmpresa: string, id_categoria: number) {
        return ListarProdutosFiltrosService.execute(nomeDoProduto, nomeDaEmpresa, id_categoria);
    }

    static async create({ nome, valor, id_categoria, id_empresa }: Omit<IProduto, 'id'>) {
        return await RegisterNewProductService.execute({ nome, valor, id_categoria, id_empresa });
    }

    static async edit({ id, nome, valor, id_categoria, id_empresa }: IProduto) {
        return await EditProductService.execute({ id, nome, valor, id_categoria, id_empresa })
    }

    static async delete(id: number) {
        return await DeleteProductService.execute(id);
    }
}

export default Produto