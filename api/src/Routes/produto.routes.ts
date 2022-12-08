import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController";
import AuthController from "../controllers/AuthController";

const produtoRouter = Router();

produtoRouter.get('/id/:id', AuthController.verifyJWT, async (req, res) => {
    const id = parseInt(req.params.id);    
    const produto = await ProdutoController.listarProdutoPorId(id);
    return res.status(200).json(produto)
});

produtoRouter.get('/:id_produto', AuthController.verifyJWT, async (req, res) => {
    const id = parseInt(req.params.id_produto);    
    const produtos = await ProdutoController.listarProdutos(id);
    return res.status(200).json(produtos)
});

produtoRouter.get('/empresa/:id_empresa', AuthController.verifyJWT, async (req, res) => {
    const id = parseInt(req.params.id_empresa);     
    const produtos = await ProdutoController.listarProdutosPorIdEmpresa(id);
    console.log(produtos);
    
    return res.status(200).json(produtos)
});

produtoRouter.post('/', AuthController.verifyJWT, async (req, res) => {
    const { nome, valor, id_empresa, id_categoria } = req.body;
    await ProdutoController.cadastrarProduto({ nome, valor, id_empresa, id_categoria })
    return res.status(201).json({ message: "Produto cadastrado com sucesso!" })
})

produtoRouter.post('/filtros', AuthController.verifyJWT, async (req, res) => {
    const { nomeDoProduto, nomeDaEmpresa, id_categoria } = req.body  
    const chamados = await ProdutoController.listarProdutosFiltros(nomeDoProduto, nomeDaEmpresa, +id_categoria);
    return res.status(200).json(chamados);
})

produtoRouter.put('/:id', AuthController.verifyJWT, async (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, valor, id_empresa, id_categoria } = req.body;    
    await ProdutoController.editProduct({ id, nome, valor, id_empresa, id_categoria });
    return res.status(200).json({ message: 'Produto alterado com sucesso!' })
})

produtoRouter.delete('/:id', AuthController.verifyJWT, async (req, res) => {
    const id = parseInt(req.params.id);
    await ProdutoController.excluiProduto(id);
    return res.status(200).json({ message: 'Produto excluído com sucesso!' })
})

export default produtoRouter;