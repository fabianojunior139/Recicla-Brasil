import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authApi } from "../../database/api";
import { FaUserCircle } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

import './_styles.scss'

const CadastroUsuario = () => {

    const Endereco = useParams();

    const navigate = useNavigate();

    const valorInicial = {
        nome: '',
        data_nascimento: '',
        cpf: '',
        email: '',
        senha: '',
        id_endereco: Endereco.id
    }

    const [dadosUsuario, setDadosUsuario] = useState(valorInicial);

    async function editarUsuario(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setDadosUsuario({ ...dadosUsuario, [name]: value });
    }

    async function salvarDadosUsuario(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await authApi("").post('/usuario', dadosUsuario);
            alert('Cadastro realizado com sucesso! ');
            navigate('/login');

        } catch (error) {
            alert('Erro ao realizar o cadastro, tente novamente! ');
        }
    }

    return (
        <section className='cadastroUsuario-page'>

            <div className="cadastroUsuario-page__card">
                <div className="cadastroUsuario-page__content">

                    <h1 className='cadastroUsuario-page__title'>Cadastre os seus dados pessoais</h1>

                    <form className='cadastroUsuario-page__form' onSubmit={salvarDadosUsuario}>

                        <div className='cadastroUsuario-page__passos'>
                            <span className="cadastroUsuario-page__passos-item-green"><i className="cadastroUsuario-page__passos-item-icon-green"><AiOutlineCheck /></i></span>
                            <span><i className="cadastroUsuario-page__passos-item-icon"><BsArrowRight /></i></span>
                            <span className="cadastroUsuario-page__passos-item"><i className="cadastroUsuario-page__passos-item-icon"><FaUserCircle /></i></span>
                        </div>
                        <div className='cadastroUsuario-page__descricao-passos'>
                            <span className='cadastroUsuario-page__descricao-passos-item'>1° Passo</span>
                            <span>⠀⠀⠀⠀⠀⠀⠀</span>
                            <span className='cadastroUsuario-page__descricao-passos-item'>2° Passo</span>
                        </div>

                        <div className="cadastroUsuario-page__1labels">
                            <label
                                className='cadastroUsuario-page__label cadastroUsuario-page__1labels-nome'
                                htmlFor="nome">Nome <span className='cadastroUsuario-page__campo-requerido'>*</span>
                            </label>

                            <label
                                className='cadastroUsuario-page__label'
                                htmlFor="data_nascimento">Data de nascimento <span className='cadastroUsuario-page__campo-requerido'>*</span>
                            </label>
                        </div>

                        <div className="cadastroUsuario-page__1inputs">
                            <input
                                className='cadastroUsuario-page__input cadastroUsuario-page__1inputs-nome'
                                type="text"
                                name='nome'
                                id='nome'
                                onChange={(e) => { editarUsuario(e) }}
                                required
                            />

                            <input
                                className='cadastroUsuario-page__input cadastroUsuario-page__1inputs-data_nascimento'
                                type="date"
                                name='data_nascimento'
                                id='data_nascimento'
                                maxLength={8}
                                onChange={(e) => { editarUsuario(e) }}
                                required
                            />
                        </div>

                        <div className="cadastroUsuario-page__2labels">
                            <label
                                className='cadastroUsuario-page__label cadastroUsuario-page__2labels-cpf'
                                htmlFor="email">CPF <span className='cadastroEndereco-page__campo-requerido'>*</span>
                            </label>
                            <label
                                className='cadastroUsuario-page__label'
                                htmlFor="email">E-mail <span className='cadastroEndereco-page__campo-requerido'>*</span>
                            </label>
                        </div>

                        <div className="cadastroUsuario-page__2inputs">
                            <input
                                className='cadastroUsuario-page__input cadastroUsuario-page__2inputs-cpf'
                                type="text"
                                name='cpf'
                                id='cpf'
                                onChange={(e) => { editarUsuario(e) }}
                                required
                            />
                            <input
                                className='cadastroUsuario-page__input'
                                type="email"
                                name='email'
                                id='email'
                                onChange={(e) => { editarUsuario(e) }}
                                required
                            />
                        </div>

                        <div className="cadastroUsuario-page__3labels">
                            <label
                                className='cadastroUsuario-page__label cadastroUsuario-page__3labels-senha'
                                htmlFor="senha">Senha <span className='cadastroEndereco-page__campo-requerido'>*</span>
                            </label>

                            <label
                                className='cadastroUsuario-page__label'
                                htmlFor="senha2">Confirmação de senha <span className='cadastroEndereco-page__campo-requerido'>*</span>
                            </label>
                        </div>

                        <div className="cadastroUsuario-page__3inputs">
                            <input
                                className='cadastroUsuario-page__input cadastroUsuario-page__3inputs-senha'
                                type="password"
                                name='senha'
                                id='senha'
                                onChange={(e) => { editarUsuario(e) }} required
                            />

                            <input
                                className='cadastroUsuario-page__input'
                                type="password"
                                name='senha2'
                                id='senha2'
                                required
                            />
                        </div>

                        <div className='cadastroUsuario-page__submit'>
                            <p className='cadastroUsuario-page__campo-requerido-text'>* Campos requeridos para cadastro</p>
                            <button className="cadastroUsuario-page__btn" type='submit'>Finalizar cadastro</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default CadastroUsuario;