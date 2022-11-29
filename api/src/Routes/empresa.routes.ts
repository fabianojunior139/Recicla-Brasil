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
    const empresa = await EmpresaController.createCompany({ razao_social, cnpj, descricao, email, senha: hashSenha, id_endereco });

    if (empresa) {
        return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } else {
        return res.status(401).json({ message: 'E-mail já cadastrado, tente novamente!' });
    }
});

empresaRouter.put('/:id', AuthController.verifyJWT, async (req, res) => {
    const id = parseInt(req.params.id);
    const { razao_social, cnpj, descricao, email, usuario_ativo } = req.body;
    await EmpresaController.updateCompany({ id, razao_social, cnpj, descricao, email, usuario_ativo });
    return res.status(200).json({ message: 'Usuário alterado com sucesso!' })
})

// empresaRouter.delete('/:id', AuthController.verifyJWT, async (req, res) => {
//     const id = parseInt(req.params.id);
//     const empresa = await EmpresaController.deleteCompany(id);

//     if (empresa) {
//         return res.status(200).json({ message: 'Usuário excluído com sucesso!' })
//     } else {
//         return res.status(401).json({ message: 'Usuário ainda ativo no sistema!' })
//     }
// })

export default empresaRouter;