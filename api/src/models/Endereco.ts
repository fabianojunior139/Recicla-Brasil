export interface IEndereco {
    id: number, 
    cep: string,
    longradouro: string,
    numero: string,
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

    

}

export default Endereco;