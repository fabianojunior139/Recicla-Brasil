import { Router } from "express";
import EmpresaController from "../controllers/EmpresaController";

const empresaRouter = Router();

empresaRouter.get('/', async (req, res) => {
    const empresas = EmpresaController.listCompanies();
    return res.status(200).json(empresas)
})

export default empresaRouter;