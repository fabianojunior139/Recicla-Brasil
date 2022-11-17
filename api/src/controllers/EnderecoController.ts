import Endereco from "../models/Endereco";
import { IEndereco } from "../models/Endereco";

class EnderecoController {

    static CriarEndereco({ cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 }: Omit<IEndereco, 'id'>) {
        Endereco.CreateAdress({ cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 })
    }
}

export default EnderecoController;