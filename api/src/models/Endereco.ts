import RegisterNewAdressService from "../Services/EnderecoServices/RegisterNewAdressService";
import ListAllAdressService from "../Services/EnderecoServices/ListAllAdressService"; 
import UpdateAdressService from "../Services/EnderecoServices/UpdateAdressService";
import FindIdByCellphoneService from "../Services/EnderecoServices/FindIdByCellphoneService";
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

    static async findByCellphone(tel1: string) {
        return await FindIdByCellphoneService.execute(tel1);
    }

    static async create({ cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 }: Omit<IEndereco, 'id'>) {
        await RegisterNewAdressService.execute({ cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 })
        return await this.findByCellphone(tel1); 
    }

    static async update({ id, cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 }: IEndereco) {
        return await UpdateAdressService.execute({ id, cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 });
    }

}

export default Endereco;