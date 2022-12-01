import { VscMenu } from 'react-icons/vsc';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { AiOutlineSearch } from 'react-icons/ai';

import './_styles.scss'
import { Logobranco } from '../Logo';

const NavBar = () => {

    const { logout, user } = useContext(AuthContext)

    return (
        <header className='navbar'>
            <div className="navbar__content">

                <a href='/' className='navbar__logo'>
                    <Logobranco width={128} height={64} />
                </a>

                <div className='navbar__buttons'>
                    <ul className="navbar__itens">
                        {user.admin ?
                            <li><a href="#" className='navbar__item'>Admin</a></li>
                            :
                            <div></div>
                        }

                        {!user.auth ?
                            <li><a href="/tipoCadastro" className='navbar__item'>Faça Parte</a></li>
                            :
                            <div></div>
                        }

                        <li><a href="/sobre" className='navbar__item'>Sobre</a></li>
                        <li><a href="#" className='navbar__item'>Serviços</a></li>

                        {user.auth ?
                            <li><a href="/login" onClick={() => logout()} className='navbar__item navbar__division'>Logout</a></li>
                            :
                            <li><a href="/login" className='navbar__item navbar__division'>Entrar</a></li>
                        }

                        <form action="submit" className='navbar__form'>
                            <input type="text" className='navbar__form-input' placeholder='Procurar' />
                            <button className='navbar__form-input-btn'>
                                <i className='navbar__form-input-btn-icon'><AiOutlineSearch size={24} /></i>
                            </button>
                        </form>

                    </ul>
                </div>



                <a href="#" className='navbar__icon'><VscMenu /></a>
            </div>
        </header>
    )
}

export default NavBar