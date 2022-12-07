import ListAllProductsService from "../Services/ProdutoServices/ListAllProductsService";
import RegisterNewProductService from "../Services/ProdutoServices/RegisterNewProductService";

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

    static async create({ nome, valor, id_categoria, id_empresa }: Omit<IProduto, 'id'>) {
        return await RegisterNewProductService.execute({ nome, valor, id_categoria, id_empresa });
    }
}

export default Produto