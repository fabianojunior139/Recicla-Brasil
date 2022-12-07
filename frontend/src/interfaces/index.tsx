export interface IEndereco {
    id?: number,
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

export interface IUserComum {
    id: number,
    nome: string,
    data_nascimento: string,
    cpf: string,
    email: string
}

export interface ISenha {
    senha_antiga: string,
    nova_senha: string,
    confirmacao_senha: string
}

export interface ICategoria {
    id: number,
    nome: string
}

export interface IEmpresa {
    razao_social: string,
    cnpj: string,
    descricao: string,
    email: string
}

export interface IProduto {
    nome: string,
    valor: string,
    id_empresa: number,
    id_categoria: string
}