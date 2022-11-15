import { Router } from "express";
import authRouter from "./auth.routes";
import categoriaRouter from "./categoria.routes";
import empresaRouter from "./empresa.routes";
import enderecoRouter from "./endereco.routes";
import produtoRouter from "./produto.routes";
import usuarioRouter from "./usuario.routes";

const router = Router();

router.use('/auth', authRouter);
router.use('/categoria', categoriaRouter);
router.use('/empresa', empresaRouter);
router.use('/endereco', enderecoRouter);
router.use('/produto', produtoRouter);
router.use('/usuario', usuarioRouter);

export default router;