import Logo from '../../components/Logo'
import './_styles.scss'

function TipoCadastro() {
    return (
        <section className='tipoCadastro-page'>

            <div className='tipoCadastro-page__logo'>
                <Logo />
            </div>

            <div className="tipoCadastro-page__card">
                
                <div className="tipoCadastro-page__content">

                    <p className="tipoCadastro-page__title">Qual tipo de cadastro é o seu?</p>

                    <div className='tipoCadastro-page__buttons'>
                        <a href="/cadastroEndereco/Usuario" className='tipoCadastro-page__button'>Para você</a>
                        <a href="/cadastroEndereco/Empresa" className='tipoCadastro-page__button'>Para Empresas</a>
                    </div>

                    <p className='tipoCadastro-page__return'>Já possui cadastro? <a href='/login' className='tipoCadastro-page__btn-return'>clique aqui</a></p>
                </div>
            </div>
        </section>
    )
}

export default TipoCadastro


