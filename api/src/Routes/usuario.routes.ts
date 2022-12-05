import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
import AuthController from "../controllers/AuthController";
import bcrypt from 'bcrypt';

const usuarioRouter = Router();

usuarioRouter.get('/', AuthController.verifyJWT, async (req, res) => {
    const users = await UsuarioController.ListUsers();
    return res.status(200).json(users)
})

usuarioRouter.get('/:id', AuthController.verifyJWT, async (req, res) => {
    const id = parseInt(req.params.id)
    const user = await UsuarioController.findUserById(id);
    return res.status(200).json(user)
})

usuarioRouter.post('/', async (req, res) => {
    const { nome, data_nascimento, cpf, email, senha, id_endereco } = req.body;
    const hashSenha = await bcrypt.hash(senha, 10);
    const user = await UsuarioController.CreateUser({ nome, data_nascimento, cpf, email, senha: hashSenha, id_endereco });

    if (user) {
        return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } else {
        return res.status(401).send(false);
    }
});

usuarioRouter.put('/:id', AuthController.verifyJWT, async (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, data_nascimento, cpf, email } = req.body;
    const user = await UsuarioController.editUser({ id, nome, data_nascimento, cpf, email });

    if (user) {
        return res.status(200).json({ message: 'Usuário alterado com sucesso!' })
    } else {
        return res.status(200).json({ message: 'E-mail já cadastrado! Tente novamente' })
    }
})

usuarioRouter.delete('/:id', AuthController.verifyJWT, async (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = await UsuarioController.deleteUser(id);

    if (usuario) {
        return res.status(200).json({ message: 'Usuário excluído com sucesso!' })
    } else {
        return res.status(401).json({ message: 'Usuário ainda ativo no sistema!' })
    }
})

export default usuarioRouter;