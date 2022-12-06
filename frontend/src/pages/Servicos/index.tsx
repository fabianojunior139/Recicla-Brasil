import NavBar from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { FaFilter } from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react';
import { ICategoria } from '../../interfaces';
import { authApi } from '../../database/api';
import AuthContext from '../../context/AuthContext';
import Card from '../../components/Card';

import './_styles.scss';

const Servicos = () => {

    const { user } = useContext(AuthContext);

    const token = user.token;

    const [categoria, setCategoria] = useState<ICategoria[]>([]);

    useEffect(() => {
        authApi(token).get('/categoria').then((response) => {
            setCategoria(response.data);
        }).catch((erro) => {
            console.log(`erro ao listar as categorias: ${erro}`);
        })
    }, []);

    

    return (
        <div className='main'>
            <NavBar />

            <main className='servicos container'>
                <span className='servicos__title'>Encontre a empresa ideal para você!</span>

                <div className='servicos__filtros'>
                    <form className='servicos__filtros-form'>
                        <span className='servicos__filtros-form-icon'><FaFilter /> Filtrar busca</span>
                        <div className='servicos__filtros-form-inputs'>
                            <input type="text" className='servicos__filtros-form-input' placeholder='Nome do produto...' />
                            <input type="text" className='servicos__filtros-form-input' placeholder='Nome da empresa...' />

                            <select name="categoria" id="categoria" className='servicos__filtros-form-input' defaultValue={''} required >
                                <option value={''} disabled>Selecione a categoria...</option>
                                <option value={0}>Todos as categorias</option>
                                {
                                    categoria.map(categoria => (
                                        <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <span className='servicos__filtros-form-result'>0 resultados</span>
                    </form>

                    <div className='servicos__mapa'>
                        <iframe className='servicos__mapa-teste' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7677.045331176807!2d-48.12180661040715!3d-15.829103764209885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bccfb7f941bab%3A0xd51b55e404de58af!2sSt.%20N%20QNN%2020%20-%20Ceil%C3%A2ndia%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1670216437006!5m2!1spt-BR!2sbr" style={{ border: 0 }} loading="lazy"></iframe>
                    </div>

                    <div className='servicos__cards'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Servicos;