import ListUsersService from "../Services/UsuariosServices/ListUsersService";
import RegisterUserService from "../Services/UsuariosServices/RegisterUserService";
import FindUserByEmailService from "../Services/UsuariosServices/FindUserByEmailService";

export interface IUsuario {
    id: number,
    nome: string,
    data_nascimento: string,
    cpf: string,
    email: string,
    senha: string,
    admin?: boolean,
    usuario_ativo?: boolean,
    id_endereco: number
}

class Usuario {
    private id: number;
    private nome: string;
    private data_nascimento: string;
    private cpf: string;
    private email: string;
    private senha: string;
    private admin: boolean;
    private usuario_ativo: boolean;
    private id_endereco: number;

    static async index() {
        return await ListUsersService.execute();
    }

    static async findByEmail(email: string){
        return await FindUserByEmailService.execute(email);
    }

    static async create({nome, data_nascimento, cpf, email, senha, id_endereco}: Omit<IUsuario, 'id'>){
        return await RegisterUserService.execute({nome, data_nascimento, cpf, email, senha, id_endereco});
    } 

}

export default Usuario;