import { useParams } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import NavBar from '../../components/Navbar';
import AuthContext from '../../context/AuthContext';
import { IInfoProduto } from '../../interfaces';
import { useContext, useEffect, useState } from 'react';
import { authApi } from '../../database/api';
import materialImg from '../../assets/materialImg.jpg'

import './_styles.scss';

const InfoProduto = () => {

    const { id_produto } = useParams();

    const { user } = useContext(AuthContext);
    const token = user.token;

    const [infoProduto, setInfoProduto] = useState({} as IInfoProduto);

    useEffect(() => {
        authApi(token).get(`/produto/${id_produto}`).then((response) => {
            setInfoProduto(response.data);
        }).catch((erro) => {
            console.log(`erro ao listar o produto: ${erro}`);
        })
    }, []);

    return (
        <div className='main'>
            <NavBar />
            <main className="infoProduto container">
                <span className='infoProduto__title'>Mais informações do produto selecionado</span>
                <div className='infoProduto__infos'>

                    <div className='infoProduto__infos-left'>
                        <img src={materialImg} alt="material img" className='infoProduto__infos-left-image' />
                    </div>

                    <div className='infoProduto__infos-right'>
                        <span className='infoProduto__infos-right-text'><strong>Nome da empresa:</strong> {infoProduto.razao_social}</span>
                        <span className='infoProduto__infos-right-text'><strong>Categoria: </strong>{infoProduto.nome_categoria}</span>
                        <span className='infoProduto__infos-right-text'><strong>Nome do produto: </strong>{infoProduto.nome_produto}</span>
                        <span className='infoProduto__infos-right-text'><strong>Valor pago por quilo: </strong>{infoProduto.valor_produto}</span>
                        <span className='infoProduto__infos-right-text'><strong>E-mail: </strong>{infoProduto.email}</span>
                        <span className='infoProduto__infos-right-text'><strong>Contato: </strong>{infoProduto.tel1 + ' / ' + infoProduto.tel2}</span>
                    </div>
                </div>

                <div className='infoProduto__mapa'>
                    <span className='infoProduto__mapa-title'>Localização da empresa no mapa</span>
                    <iframe className='infoProduto__mapa-local' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7677.045331176807!2d-48.12180661040715!3d-15.829103764209885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bccfb7f941bab%3A0xd51b55e404de58af!2sSt.%20N%20QNN%2020%20-%20Ceil%C3%A2ndia%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1670216437006!5m2!1spt-BR!2sbr" style={{ border: 0 }} loading="lazy"></iframe>
                    <span className='infoProduto__mapa-endereco'><strong>Endereço completo:</strong> {infoProduto.longradouro + infoProduto.numero + ' - ' + infoProduto.bairro + ' ' + infoProduto.cidade + ' ' + infoProduto.estado} </span>
                </div>
                <div className='infoProduto__btns'>
                    {user.usuario_comum ?
                        <>
                            <a href="/servicos" className='infoProduto__btn'>Voltar para página de pesquisa</a>
                            <a href="#" className='infoProduto__btn'>Catálogo completo da empresa</a>
                        </>
                        :
                        <a href="/empresa" className='infoProduto__btn'>Voltar para página da empresa</a>
                    }




                </div>
            </main>
            <Footer />
        </div>
    )
}

export default InfoProduto