export interface IEmpresa {
    id: number,
    razao_social: string,
    cnpj: string,
    descricao: string,
    email: string,
    senha: string,
    empresa_ativa: boolean,
    id_endereco: number
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

    

}

export default Empresa;