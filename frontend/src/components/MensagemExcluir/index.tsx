import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { authApi } from '../../database/api';
import './_styles.scss';

interface IMsg {
    id: number,
    nome: string,
    abortarExclusão: (type: string) => void
}

function MensagemExcluir({ id, nome, abortarExclusão }: IMsg) {

    console.log(id);
    

    const { user } = useContext(AuthContext);

    const token = user.token;

    function excluirProduto() {
        try {
            authApi(token).delete(`/produto/${id}`).then(() => {
                alert('Produto excluído com sucesso!');
                window.location.reload();
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <section className="excluirProduto">
                <p className='excluirProduto__titulo'>Tem certeza que deseja excluir o produto {nome}?</p>

                <div className='excluirProduto__btns'>
                    <button className="excluirProduto__btn excluirProduto__btn-danger" onClick={excluirProduto}>Sim</button>
                    <button className="excluirProduto__btn" onClick={() => abortarExclusão('table')}>Não</button>
                </div>
            </section>
        </>
    )
}

export default MensagemExcluir