import Empresa from "../models/Empresa";
import { IEmpresa } from "../models/Empresa";
import Usuario from "../models/Usuario";
class EmpresaController {

    static listCompanies() {
        return Empresa.index();
    }

    static async findCompanyById(id: number) {
        return Empresa.findById(id);
    }

    static async createCompany({ razao_social, cnpj, descricao, email, senha, id_endereco }: Omit<IEmpresa, 'id'>) {
        const emailUserExists = await Usuario.findByEmail(email);
        const emailCompanyExists = await Empresa.findByEmail(email)

        if (!emailUserExists && !emailCompanyExists) {
            Empresa.create({ razao_social, cnpj, descricao, email, senha, id_endereco });
            return true;
        } else {
            return false;
        }
    }

    static async updateCompany({ id, razao_social, cnpj, descricao, email }: Omit<IEmpresa, 'senha, id_endereco'>) {
        return await Empresa.update({ id, razao_social, cnpj, descricao, email });
    }

    // static async deleteCompany(id: number) {

    //     const user = await Empresa.findById(id);
    //     const usuario_ativo = user.usuario_ativo;

    //     if (usuario_ativo == false) {
    //         await Empresa.delete(id);
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

}

export default EmpresaController;