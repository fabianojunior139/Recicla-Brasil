import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { authApi } from '../../database/api';
import { ICategoria, IProduto } from '../../interfaces';
import './_styles.scss'

interface IId {
    id: number
}

const AlteraProduto = ({ id }: IId) => {

    const { user } = useContext(AuthContext)
    const token = user.token;

    const [categoria, setCategoria] = useState<ICategoria[]>([]);

    useEffect(() => {
        authApi(token).get('/categoria').then((response) => {
            setCategoria(response.data);
        }).catch((erro) => {
            console.log(`erro ao listar as categorias: ${erro}`);
        })
    }, []);

    const [produto, setProduto] = useState({} as IProduto);

    useEffect(() => {
        authApi(token).get(`/produto/id/${id}`).then((response) => {
            setProduto(response.data);
        }).catch((erro) => {
            console.log(`erro ao listar o produto: ${erro}`);
        })
    }, []);

    function editarProduto(evento: any) {
        const { name, value } = evento.target;
        setProduto({ ...produto, [name]: value });
    }

    async function salvarProduto(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        try {
            await authApi(token).put(`/produto/${produto.id}}`, produto);
            alert('Produto atualizado com sucesso!');
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className="AlteraDadosEmpresa__content__usuario">
            <span className="AlteraDadosEmpresa__content__usuario-title">Edite o produto selecionado</span>
            <form className="AlteraDadosEmpresa__content__usuario-form" onSubmit={salvarProduto}>

                <label className='AlteraDadosEmpresa__content__usuario-form-label' htmlFor="id_categoria">Categoria <span style={{ color: "red" }}>*</span></label>
                <select
                    name="id_categoria"
                    id="id_categoria"
                    className='AlteraDadosEmpresa__content__usuario-form-input'
                    onChange={(e) => { editarProduto(e) }}
                    value={produto.id_categoria}
                    required >

                    <option value={''} disabled>Selecione a categoria...</option>
                    {
                        categoria.map(categoria => (
                            <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                        ))
                    }
                </select>

                <label className="AlteraDadosEmpresa__content__usuario-form-label" htmlFor="nome">Nome do produto <span style={{ color: "red" }}>*</span></label>
                <input
                    className="AlteraDadosEmpresa__content__usuario-form-input"
                    type="text"
                    name='nome'
                    id='nome'
                    value={produto.nome}
                    onChange={(e) => { editarProduto(e) }}
                    required
                />

                <label className="AlteraDadosEmpresa__content__usuario-form-label" htmlFor="valor">Valor por quilo <span style={{ color: "red" }}>*</span></label>
                <input
                    className="AlteraDadosEmpresa__content__usuario-form-input"
                    type="text"
                    name='valor'
                    id='valor'
                    value={produto.valor}
                    onChange={(e) => { editarProduto(e) }}
                    required
                />

                <button type="submit" className="AlteraDadosEmpresa__content__usuario-form-btn">SALVAR INFORMAÇÕES</button>

                <span className="AlteraDadosEmpresa__content__usuario-form-alert">* Campos requeridos</span>
            </form>
        </div>
    )
}

export default AlteraProduto;