import NavBar from '../../components/Navbar';

import './_styles.scss';
import img from '../../assets/error.jpg';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const Bloqueio = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
            <NavBar />
            <section className='bloqueio container'>

                {user.auth ?
                    <span className='bloqueio__message'>Usuário sem autorização!</span>
                    :
                    <>
                        <span className='bloqueio__message'>Realize o login para ter acesso!</span>
                        <a href='/login' className='bloqueio__btn'>Login</a>
                    </>
                }
                <img src={img} alt="Image Error" />
            </section>
        </>
    )
}

export default Bloqueio