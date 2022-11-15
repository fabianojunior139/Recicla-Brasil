import { Router } from "express";
import AuthController from "../controllers/AuthController";

const authRouter = Router();

authRouter.post('/', async (req, res) => {
    const { email, senha } = req.body;
    const user = await AuthController.login({ email, senha });

    if (user) {
        return res.status(200).json({ user });
    } else {
        return res.status(404).json({ message: 'Usuário ou senha incorretos.' });
    }
});

export default authRouter;