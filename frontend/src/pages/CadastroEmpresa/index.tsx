import { FaUserCircle } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { authApi } from '../../database/api';

import './_styles.scss';

function CadastroEmpresa() {

    const id = useParams();
    const idEndereco = id.idEndereco;

    const navigate = useNavigate();

    const valorInicial = {
        razao_social: '',
        cnpj: '',
        descricao: '',
        email: '',
        senha: '',
        id_endereco: idEndereco
    }

    const [dadosEmpresa, setDadosEmpresa] = useState(valorInicial);

    function editarDadosEmpresa(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setDadosEmpresa({ ...dadosEmpresa, [name]: value });
    }

    async function salvarDadosEmpresa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await authApi("").post('/empresa', dadosEmpresa);
            alert('Cadastro realizado com sucesso! ');
            navigate('/login');

        } catch (error) {
            alert('Erro ao realizar o cadastro, tente novamente! ');
        }
    }

    return (
        <section className='cadastroEmpresa-page'>

            <div className="cadastroEmpresa-page__card">
                <div className="cadastroEmpresa-page__content">

                    <h1 className='cadastroEmpresa-page__title'>Cadastre os dados da empresa</h1>

                    <form className='cadastroEmpresa-page__form' onSubmit={salvarDadosEmpresa}>

                        <div className='cadastroEmpresa-page__passos'>
                            <span className="cadastroEmpresa-page__passos-item-green"><i className="cadastroEmpresa-page__passos-item-icon-green"><AiOutlineCheck /></i></span>
                            <span><i className="cadastroEmpresa-page__passos-item-icon"><BsArrowRight /></i></span>
                            <span className="cadastroEmpresa-page__passos-item"><i className="cadastroEmpresa-page__passos-item-icon"><FaUserCircle /></i></span>
                        </div>
                        <div className='cadastroEmpresa-page__descricao-passos'>
                            <span className='cadastroEmpresa-page__descricao-passos-item'>1° Passo</span>
                            <span>⠀⠀⠀⠀⠀⠀⠀</span>
                            <span className='cadastroEmpresa-page__descricao-passos-item'>2° Passo</span>
                        </div>

                        <div className="cadastroEmpresa-page__1labels">
                            <label className='cadastroEmpresa-page__label cadastroEmpresa-page__1labels-razaoSocial' htmlFor="razao_social">Razão Social <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                            <label className='cadastroEmpresa-page__label cadastroEmpresa-page__1labels-cnpj' htmlFor="cnpj">CNPJ <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                        </div>

                        <div className="cadastroEmpresa-page__1inputs">
                            <input className='cadastroEmpresa-page__input cadastroEmpresa-page__1inputs-razaoSocial' type="text" name='razao_social' id='razao_social' onChange={(e) => { editarDadosEmpresa(e) }} required />
                            <input className='cadastroEmpresa-page__input cadastroEmpresa-page__1inputs-cnpj' type="text" name='cnpj' id='cnpj' onChange={(e) => { editarDadosEmpresa(e) }} required />
                        </div>

                        <label className='cadastroEmpresa-page__label' htmlFor="email">E-mail <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                        <input className='cadastroEmpresa-page__input' type="email" name='email' id='email' onChange={(e) => { editarDadosEmpresa(e) }} required />

                        <div className="cadastroEmpresa-page__2labels">
                            <label className='cadastroEmpresa-page__label cadastroEmpresa-page__2labels-senha' htmlFor="senha">Senha <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                            <label className='cadastroEmpresa-page__label' htmlFor="senha2">Confirmação de senha <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                        </div>

                        <div className="cadastroEmpresa-page__2inputs">
                            <input className='cadastroEmpresa-page__input cadastroEmpresa-page__2inputs-senha' type="password" name='senha' id='senha' onChange={(e) => { editarDadosEmpresa(e) }} required />
                            <input className='cadastroEmpresa-page__input' type="password" name='senha2' id='senha2' required />
                        </div>

                        <label className='cadastroEmpresa-page__label' htmlFor="descricao">Descrição da empresa <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                        <textarea className='cadastroEmpresa-page__textarea cadastroEmpresa-page__input' name="descricao" id="descricao" onChange={(e) => { editarDadosEmpresa(e) }} required></textarea>

                        <div className='cadastroEmpresa-page__submit'>
                            <p className='cadastroEmpresa-page__campo-requerido-text'>* Campos requeridos para cadastro</p>
                            <button className="cadastroEmpresa-page__btn" type='submit'>Finalizar cadastro</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CadastroEmpresa;
