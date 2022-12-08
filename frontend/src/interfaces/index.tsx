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
    id?: number,
    nome: string,
    valor: string,
    id_empresa: number,
    id_categoria: string
}

export interface ICard {
    longradouro: string,
    numero: number,
    razao_social: string,
    id_produto?: number,
    nome_produto: string,
    valor_produto: string,

    id_categoria?: number,
    nome_categoria: string
}

export interface IInfoProduto {
    bairro: string,
    cep: string,
    cnpj: string,
    complemento: string,
    descricao: string,
    email: string,
    estado: string,
    id: number
    nome_categoria: number,
    id_produto: number,
    longradouro: string,
    nome_produto: string,
    numero: number,
    razao_social: string,
    referencia: string,
    tel1: string,
    tel2: string,
    valor_produto: string,
    cidade: string
}
