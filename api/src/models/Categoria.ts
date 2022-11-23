import ListAllCategoriesService from "../Services/CategoriaServices/ListAllCategoriesService";
import RegisterNewCategoryService from "../Services/CategoriaServices/RegisterNewCategoryService";

export interface ICategoria {
    id: number,
    nome: string,
}

class Categoria {
    private id: number;
    private nome: string;

    static index() {
        return ListAllCategoriesService.execute();
    }

    static async create(nome: string) {
        return await RegisterNewCategoryService.execute(nome);
    }

    

}

export default Categoria