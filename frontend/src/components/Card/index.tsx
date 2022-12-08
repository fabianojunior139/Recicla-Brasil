import { useNavigate } from 'react-router-dom';
import { ICard } from '../../interfaces';
import './_styles.scss';

const Card = ({ id_produto, longradouro, numero, razao_social, nome_produto, valor_produto, nome_categoria }: ICard) => {

    const navigate = useNavigate();

    return (
        <section className='card-produto' onClick={() => { navigate(`/infoProduto/${id_produto}`) }}>
            <div className='card-produto__material'>
                <span>{nome_categoria}</span>
                <span className='card-produto__material-type'>{nome_produto}</span>
            </div>
            <div className='card-produto__adress'>
                <span>{razao_social}</span>
                <span className='card-produto__adress-adress'>{longradouro + ' ' + numero}</span>
            </div>
            <div className='card-produto__price'>
                <span>Preço por quilo</span>
                <span className='card-produto__price-price'>R$ {valor_produto}</span>
            </div>
        </section>
    )
}

export default Card;