import { Router } from "express";
import CategoriaController from "../controllers/CategoriaController";
import AuthController from "../controllers/AuthController";

const categoriaRouter = Router();

categoriaRouter.get('/', AuthController.verifyJWT, async (req, res) => {
    const categorias = await CategoriaController.listCategories();
    return res.status(200).json(categorias);
});

categoriaRouter.post('/', AuthController.verifyJWT, async (req, res) => {
    const { nome } = req.body;
    await CategoriaController.registerCategories(nome);
    return res.status(201).json({message: "Categoria cadastrada com sucesso!"})
})

export default categoriaRouter;