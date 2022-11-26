import ListAllCompaniesService from "../Services/EmpresaServices/ListAllCompaniesService";
import CreateNewCompanyService from "../Services/EmpresaServices/CreateNewCompanyService";
import FindCompanyByEmailService from "../Services/EmpresaServices/FindCompanyByEmailService";
import FindCompanyByIdService from "../Services/EmpresaServices/FindCompanyByIdService";
import UpdateCompanyService from "../Services/EmpresaServices/UpdateCompanyService";

export interface IEmpresa {
    id?: number,
    razao_social?: string,
    cnpj?: string,
    descricao?: string,
    email?: string,
    senha?: string,
    empresa_ativa?: boolean,
    id_endereco?: number
}

class Empresa {
    private id: number;
    private razao_social: string;
    private cnpj: string;
    private descricao: string;
    private email: string;
    private senha: string;
    private empresa_ativa: boolean;
    private id_endereco: number;

    static async index() {
        return await ListAllCompaniesService.execute();
    }

    static async findById(id: number) {
        return await FindCompanyByIdService.execute(id);
    }

    static async findByEmail(email: string) {
        return await FindCompanyByEmailService.execute(email);
    }

    static async create({ razao_social, cnpj, descricao, email, senha, id_endereco }: Omit<IEmpresa, 'id'>) {
        return await CreateNewCompanyService.execute({ razao_social, cnpj, descricao, email, senha, id_endereco });
    }

    static async update({ id, razao_social, cnpj, descricao, email, empresa_ativa }: Omit<IEmpresa, 'senha'>) {
        return await UpdateCompanyService.execute({ id, razao_social, cnpj, descricao, email, empresa_ativa })
    }

}

export default Empresa;