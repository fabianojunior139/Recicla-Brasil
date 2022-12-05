import Usuario from "../models/Usuario"
import Empresa from "../models/Empresa";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export interface Ilogin {
    email: string,
    senha: string
}

export interface ISenha {
    id: number,
    senha_antiga: string,
    nova_senha: string,
    confirmacao_senha: string
}

const SECRET = 'jwtToken';

class AuthController {
    static async login({ email, senha }: Ilogin) {

        const user = await Usuario.findByEmail(email);
        const company = await Empresa.findByEmail(email);

        if (user) {
            const userPass = user.senha;
            const userId = user.id;

            const verifyPass = await bcrypt.compare(senha, userPass);

            if (verifyPass === true) {
                const token = jwt.sign({ userId }, SECRET, { expiresIn: '100008h' });

                delete user.senha;

                user.token = token;
                user.auth = true;

                return user;
            } else {
                return false;
            }

        } else if (company) {
            const companyPass = company.senha;
            const companyId = company.id;

            const verifyPass = await bcrypt.compare(senha, companyPass);

            if (verifyPass === true) {
                const token = jwt.sign({ companyId }, SECRET, { expiresIn: '100000h' });

                delete company.senha;

                company.token = token;
                company.auth = true;

                return company;
            } else {
                return false;
            }
        } else {
            return false
        }
    }

    static verifyJWT(req: Request, res: Response, next: NextFunction) {
        const { authorization } = req.headers;

        if (!authorization) return res.status(401).json({ auth: false, message: 'No token provide' });
        const token = authorization.replace('Bearer', '').trim();

        try {
            jwt.verify(token, SECRET);
            next();
        } catch {
            return res.status(401).json({ auth: false, mesage: 'Failed to authenticate token' });
        }
    }

    static async EditarSenha({ id, senha_antiga, nova_senha, confirmacao_senha }: ISenha) {
        const usuario = await Usuario.findById(id);

        if (usuario) {

            if (nova_senha == confirmacao_senha) {
                const senhaDoBanco = usuario.senha;
                const verificaSenha = await bcrypt.compare(senha_antiga, senhaDoBanco);

                if (verificaSenha === true) {

                    if (nova_senha != senha_antiga) {
                        const hashSenha = await bcrypt.hash(nova_senha, 10);
                        await Usuario.updatePass(id, hashSenha);
                        return true;

                    } else {
                        return false;
                    }

                } else {
                    return false;
                }
            } else {
                return false
            }

        }
    }

}

export default AuthController;



