import { Router } from "express";
import EnderecoController from "../controllers/EnderecoController";

const enderecoRouter = Router();

enderecoRouter.post('/', async (req, res) => {
    const { cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 } = req.body;
    EnderecoController.CriarEndereco({ cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 });
    return res.status(201).json({ message: 'Endereço cadastrado com sucesso!' });
})


export default enderecoRouter;