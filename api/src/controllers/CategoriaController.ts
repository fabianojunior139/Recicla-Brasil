import Categoria from "../models/Categoria";

class CategoriaContrller {
    static listCategories() {
        return Categoria.index();
    }

    static registerCategories(nome: string) {
        return Categoria.create(nome);
    }
}

export default CategoriaContrller;