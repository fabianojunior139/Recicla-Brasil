import { Router } from "express";
import EmpresaController from "../controllers/EmpresaController";
import AuthController from "../controllers/AuthController";
import bcrypt from 'bcrypt';

const empresaRouter = Router();

empresaRouter.get('/', AuthController.verifyJWT, async (req, res) => {
    const empresas = await EmpresaController.listCompanies();
    return res.status(200).json(empresas);
});

empresaRouter.post('/', async (req, res) => {
    const { razao_social, cnpj, descricao, email, senha, id_endereco } = req.body;
    const hashSenha = await bcrypt.hash(senha, 10);
    EmpresaController.createCompany({ razao_social, cnpj, descricao, email, senha: hashSenha, id_endereco });
    return res.status(201).json({ message: "Usuário cadastrado com sucesso." })
});

export default empresaRouter;