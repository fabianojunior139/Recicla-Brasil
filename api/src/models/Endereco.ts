import RegisterNewAdressService from "../Services/EnderecoServices/RegisterNewAdressService";
import ListAllAdressService from "../Services/EnderecoServices/ListAllAdressService"; 

export interface IEndereco {
    id: number,
    cep: string,
    longradouro: string,
    numero: number,
    complemento: string,
    referencia: string,
    bairro: string,
    cidade: string,
    estado: string,
    tel1: string,
    tel2: string
}

class Endereco {
    private id: number;
    private cep: string;
    private longradouro: string;
    private numero: string;
    private complemento: string;
    private referencia: string;
    private bairro: string;
    private cidade: string;
    private estado: string;
    private tel1: string;
    private tel2: string;

    static async index() {
        return await ListAllAdressService.execute();
    }

    static async CreateAdress({ cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 }: Omit<IEndereco, 'id'>) {
        return await RegisterNewAdressService.execute({ cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 })
    }

}

export default Endereco;