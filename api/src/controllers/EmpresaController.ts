import Empresa from "../models/Empresa";
import { IEmpresa } from "../models/Empresa";

class EmpresaController {

    static listCompanies() {
        return Empresa.index();
    }

    static createCompany({ razao_social, cnpj, descricao, email, senha, id_endereco }: Omit<IEmpresa, 'id'>) {
        return Empresa.CriarEmpresa({ razao_social, cnpj, descricao, email, senha, id_endereco });
    }

}

export default EmpresaController;