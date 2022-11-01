import './_styles.scss'
import Logo from '../../components/Logo';


function RecuperaSenha() {
    return (
        <section className='recuperaSenha-page'>

            <div className='recuperaSenha-page__logo'>
                <Logo />
            </div>

            <div className='recuperaSenha-page__card'>
                <div className="recuperaSenha-page__content">
                    <p className="recuperaSenha-page__title">Informe o endereço de e-mail cadastrado</p>

                    <form className="recuperaSenha-page__form" action="#">
                        <input className='recuperaSenha-page__input' type="email" name='email' id='email' required placeholder='email@gmail.com'/>

                        <button className="recuperaSenha-page__button">Enviar</button>
                    </form>

                    <p className='recuperaSenha-page__return'>Para voltar para tela de login, <a href="/login" className='recuperaSenha-page__btn-return'>clique aqui</a></p>
                </div>
            </div>
        </section>
    )
}

export default RecuperaSenha;