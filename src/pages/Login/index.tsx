import Logo from '../../components/Logo';
import { FaFacebookSquare, FaInstagram, FaWhatsapp, FaTwitterSquare } from 'react-icons/fa';

import './_styles.scss'



function Login() {

    function nFacaNada() {
        console.log('fodase');
    }

    return (
        <main className='login-page'>
            <div className='login-page__left-card'></div>
            <div className='login-page__right-card'>

                <div className='login-page__image'>
                    <Logo />
                </div>

                <form className='login-page__form' onSubmit={nFacaNada}>
                    <label className='login-page__label' htmlFor="user">E-mail</label>
                    <input className='login-page__input' type="email" name='user' id='user' required placeholder='email@gmail.com' />

                    <label className='login-page__label' htmlFor="user">Senha</label>
                    <input className='login-page__input' type="password" name='pass' id='pass' required placeholder='**********' />

                    <button type='submit' className='login-page__button'>ENTRAR</button>
                </form>

                <div className='login-page__more'>
                    <a href="/tipoCadastro" className='login-page__more-info'>Cadastrar-se</a>
                    <a href="/recuperaSenha" className='login-page__more-info'>Esqueci minha senha</a>
                </div>

                <div className="login-page__social-icons">

                    <a href="https://www.facebook.com/" target='_blank'>
                        <i className='login-page__icon login-page__icon-facebook'><FaFacebookSquare /></i>
                    </a>

                    <a href="https://www.instagram.com/" target='_blank'>
                        <i className='login-page__icon login-page__icon-instagram'><FaInstagram /></i>
                    </a>

                    <a href="https://web.whatsapp.com//" target='_blank'>
                        <i className='login-page__icon login-page__icon-whatsapp'><FaWhatsapp /></i>
                    </a>

                    <a href="https://twitter.com/" target='_blank'>
                        <i className='login-page__icon login-page__icon-twitter'><FaTwitterSquare /></i>
                    </a>

                </div>
            </div>
        </main>
    )
}

export default Login;