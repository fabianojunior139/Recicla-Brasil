import { Router } from "express";
import AuthController from "../controllers/AuthController";

const authRouter = Router();

authRouter.post('/', async (req, res) => {
    const { email, senha } = req.body;
    const user = await AuthController.login({ email, senha });

    if (user) {
        return res.status(200).json(user);
    } else {
        return res.status(404).json({ message: 'Usuário ou senha incorretos.' });
    }
});

authRouter.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { senha_antiga, nova_senha, confirmacao_senha } = req.body;

    const usuario = await AuthController.EditarSenha({ id, senha_antiga, nova_senha, confirmacao_senha });    

    if (usuario) {
        return res.status(200).json({ message: 'Senha de usuário alterada com sucesso' });
    } else {        
        return res.status(200).send(false);
    }
})

export default authRouter;