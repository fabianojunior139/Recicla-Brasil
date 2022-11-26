import Endereco from "../models/Endereco";
import { IEndereco } from "../models/Endereco";
import Usuario from "../models/Usuario";

class EnderecoController {

    static ListAdress() {
        return Endereco.index();
    }

    static async CriarEndereco({ cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 }: Omit<IEndereco, 'id'>) {

        const celExiste = await Endereco.findByCellphone(tel1);        

        if (!celExiste) {
            return await Endereco.create({ cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 })
        } else {
            return false
        }
    }

    static editAdress({ id, cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 }: IEndereco) {
        Endereco.update({ id, cep, longradouro, numero, complemento, referencia, bairro, cidade, estado, tel1, tel2 })
    }


}

export default EnderecoController;