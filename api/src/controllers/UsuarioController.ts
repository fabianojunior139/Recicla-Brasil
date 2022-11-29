import Usuario from "../models/Usuario";
import { IUsuario } from "../models/Usuario";
import Empresa from "../models/Empresa";

class UsuarioController {

    static ListUsers() {
        return Usuario.index();
    }

    static async CreateUser({ nome, data_nascimento, cpf, email, senha, id_endereco }: Omit<IUsuario, 'id'>) {
        const emailUserExists = await Usuario.findByEmail(email);
        const emailCompanyExists = await Empresa.findByEmail(email)

        if (!emailUserExists && !emailCompanyExists) {
            Usuario.create({ nome, data_nascimento, cpf, email, senha, id_endereco });
            return true;
        } else {
            return false;
        }
    }

    static async editUser({ id, nome, data_nascimento, cpf, email }: Omit<IUsuario, 'senha, id_endereco'>) {
        return await Usuario.edit({ id, nome, data_nascimento, cpf, email });
    }

    static async deleteUser(id: number) {

        const user = await Usuario.findById(id);
        const usuario_ativo = user.usuario_ativo;

        if (usuario_ativo == false) {
            await Usuario.delete(id);
            return true;
        } else {
            return false
        }
    }
}

export default UsuarioController;