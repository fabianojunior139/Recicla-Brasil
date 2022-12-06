import './_styles.scss';

const Card = () => {
    return (
        <section className='card-produto'>
            <div className='card-produto__material'>
                <span>Material</span>
                <span className='card-produto__material-type'>Alumínio</span>
            </div>
            <div className='card-produto__adress'>
                <span>Reciclagem I</span>
                <span className='card-produto__adress-adress'>Qnn 18 Conjunto N lote 51</span>
            </div>
            <div className='card-produto__price'>
                <span>Preço por quilo</span>
                <span className='card-produto__price-price'>R$ 11,69</span>
            </div>
        </section>
    )
}

export default Card;