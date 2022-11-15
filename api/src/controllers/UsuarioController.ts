import Usuario from "../models/Usuario";
import { IUsuario } from "../models/Usuario";

class UsuarioController {

    static ListUsers() {
        return Usuario.index();
    }

    static CreateUser({nome, data_nascimento, cpf, email, senha, id_endereco}: Omit<IUsuario, 'id'>) {
        Usuario.create({nome, data_nascimento, cpf, email, senha, id_endereco})
    }
}

export default UsuarioController;