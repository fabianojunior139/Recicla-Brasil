import { Router } from "express";
import EnderecoController from "../controllers/EnderecoController";
import AuthController from "../controllers/AuthController";

const enderecoRouter = Router();

enderecoRouter.get('/', AuthController.verifyJWT, async (req, res) => {
    const enderecos = await EnderecoController.ListAdress();
    return res.status(200).json(enderecos);
})

enderecoRouter.get('/:id', AuthController.verifyJWT, async (req, res) => {
    const id = parseInt(req.params.id);
    const endereco = await EnderecoController.listAdressById(id);
    return res.status(200).json(endereco);
})

enderecoRouter.post('/', async (req, res) => {
    const { cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 } = req.body;
    const idEndereco = await EnderecoController.CriarEndereco({ cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 });

    if (idEndereco) {
        return res.status(201).json(idEndereco);
    } else {
        return res.status(401).json({ message: 'Este número de celular já foi cadastrado, tente novamente!' });
    }
});

enderecoRouter.put('/:id', AuthController.verifyJWT, async (req, res) => {
    const id = parseInt(req.params.id);    
    const { cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 } = req.body;
    EnderecoController.editAdress({ id, cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 });
    return res.status(200).json({ message: 'Endereço atualizado com sucesso!' })
})


export default enderecoRouter