import Logo from '../../components/Logo';
import { FaFacebookSquare, FaInstagram, FaWhatsapp, FaTwitterSquare } from 'react-icons/fa';
import AuthContext, { IUsuarioLogin } from '../../context/AuthContext';
import { useContext, useState } from 'react';

import './_styles.scss'
import { useNavigate } from 'react-router-dom';

function Login() {

    const [user, setUser] = useState<IUsuarioLogin>({} as IUsuarioLogin);

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    function updateUser(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }

    function handleSubmit(e: any) {
        e.preventDefault();

        if (login(user)) {
            navigate('/');
        } else {
            alert('usuário inválido');
            navigate('/login')
        }
    }    

    return (
        <main className='login-page'>
            <div className='login-page__left-card'></div>
            <div className='login-page__right-card'>

                <div className='login-page__image'>
                    <Logo />
                </div>

                <form className='login-page__form' onSubmit={handleSubmit}>
                    <label className='login-page__label' htmlFor="user">E-mail</label>
                    <input className='login-page__input' type="email" name='email' id='email' required placeholder='email@gmail.com' onChange={(e) => { updateUser(e) }} />

                    <label className='login-page__label' htmlFor="user">Senha</label>
                    <input className='login-page__input' type="password" name='senha' id='senha' required placeholder='**********' onChange={(e) => { updateUser(e) }} />

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