import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
import bcrypt from 'bcrypt';

const usuarioRouter = Router();

usuarioRouter.get('/', async (req, res) => {
    const users = await UsuarioController.ListUsers();
    return res.status(200).json(users)
})

usuarioRouter.post('/', async (req, res) => {
    const { nome, data_nascimento, cpf, email, senha, id_endereco } = req.body;
    const hashSenha = await bcrypt.hash(senha, 10);
    UsuarioController.CreateUser({nome, data_nascimento, cpf, email, senha: hashSenha, id_endereco});
    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
});

export default usuarioRouter;