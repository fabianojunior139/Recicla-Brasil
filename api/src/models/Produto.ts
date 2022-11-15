export interface IProduto {
    id: number,
    nome: string,
    valor: number,
    id_empresa: number,
    id_categoria: number
}

class Produto {
    private id: number;
    private nome: string;
    private valor: number;
    private id_empresa: number;
    private id_categoria: number;

    
}

export default Produto