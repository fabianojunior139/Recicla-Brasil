import Empresa from "../models/Empresa";
import { IEmpresa } from "../models/Empresa";

class EmpresaController {

    static listCompanies() {
        return Empresa.index();
    }

    static createCompany({ razao_social, cnpj, descricao, email, senha, id_endereco }: Omit<IEmpresa, 'id'>) {
        return Empresa.create({ razao_social, cnpj, descricao, email, senha, id_endereco });
    }

    static async updateCompany({ id, razao_social, cnpj, descricao, email, empresa_ativa }: Omit<IEmpresa, 'senha, id_endereco'>) {
        return await Empresa.update({ id, razao_social, cnpj, descricao, email, empresa_ativa });
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