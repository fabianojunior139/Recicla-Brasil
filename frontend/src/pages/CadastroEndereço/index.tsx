import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { IEndereco } from '../../interfaces';
import { authApi } from '../../database/api';

import './_styles.scss';

const CadastroEndereco = () => {

    const [endereco, setEndereco] = useState({} as IEndereco);

    const navigate = useNavigate();

    const tipoCadastro = useParams();

    function editarEndereco(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setEndereco({ ...endereco, [name]: value });
    }

    async function salvarEndereco(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await authApi("").post('/endereco', endereco).then(response => {
                const idEndereco = response.data.id;
                navigate(`/cadastro${tipoCadastro.type}/${idEndereco}`);
            })
        } catch (error) {
            alert('Número de celular já cadastrado, tente novamente! ');
        }
    }

    return (
        <div className='cadastroEndereco-page'>
            <div className="cadastroEndereco-page__card">
                <div className="cadastroEndereco-page__content">
                    <form className="cadastroEndereco-page__form" onSubmit={salvarEndereco}>
                        <h1 className='cadastroEndereco-page__titulo'>Cadastre o seu endereço</h1>

                        <div className='cadastroEndereco-page__passos'>
                            <span className="cadastroEndereco-page__passos-item"><i className="cadastroEndereco-page__passos-item-icon"><HiLocationMarker /></i></span>
                            <span><i className="cadastroEndereco-page__passos-item-icon"><BsArrowRight /></i></span>
                            <span className="cadastroEndereco-page__passos-item"><i className="cadastroEndereco-page__passos-item-icon"><FaUserCircle /></i></span>
                        </div>
                        <div className='cadastroEndereco-page__descricao-passos'>
                            <span className='cadastroEndereco-page__descricao-passos-item'>1° Passo</span>
                            <span>⠀⠀⠀⠀⠀⠀⠀</span>
                            <span className='cadastroEndereco-page__descricao-passos-item'>2° Passo</span>
                        </div>

                        <div className="cadastroEndereco-page__1labels">
                            <label className='cadastroEndereco-page__label cadastroEndereco-page__1labels-cep' htmlFor="cep">CEP <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                            <label className='cadastroEndereco-page__label cadastroEndereco-page__1labels-longradouro' htmlFor="longradouro">Longradouro <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                            <label className='cadastroEndereco-page__label cadastroEndereco-page__1labels-numero' htmlFor="numero">Número <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                        </div>

                        <div className="cadastroEndereco-page__1inputs">
                            <input className='cadastroEndereco-page__input cadastroEndereco-page__1inputs-cep' type="text" name='cep' id='cep' maxLength={9} onChange={(e) => editarEndereco(e)} required />
                            <input className='cadastroEndereco-page__input cadastroEndereco-page__1inputs-longradouro' type="text" name='longradouro' id='longradouro' onChange={(e) => editarEndereco(e)} required />
                            <input className='cadastroEndereco-page__input cadastroEndereco-page__1inputs-numero' type="number" name='numero' id='numero' maxLength={6} onChange={(e) => editarEndereco(e)} required />
                        </div>

                        <div className="cadastroEndereco-page__2labels">
                            <label className='cadastroEndereco-page__label cadastroEndereco-page__2labels-complemento' htmlFor="complemento">Complemento <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                            <label className='cadastroEndereco-page__label cadastroEndereco-page__2labels-referencia' htmlFor="referencia">Referência <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                            <label className='cadastroEndereco-page__label cadastroEndereco-page__2labels-bairro' htmlFor="bairro">Bairro <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                        </div>

                        <div className="cadastroEndereco-page__2inputs">
                            <input className='cadastroEndereco-page__input cadastroEndereco-page__2inputs-complemento' type="text" name='complemento' id='complemento' onChange={(e) => editarEndereco(e)} required />
                            <input className='cadastroEndereco-page__input cadastroEndereco-page__2inputs-referencia' type="text" name="referencia" id="referencia" onChange={(e) => editarEndereco(e)} required />
                            <input className='cadastroEndereco-page__input cadastroEndereco-page__2inputs-bairro' type="text" name="bairro" id="bairro" onChange={(e) => editarEndereco(e)} required />
                        </div>

                        <div className="cadastroEndereco-page__3labels">
                            <label className='cadastroEndereco-page__label cadastroEndereco-page__3labels-cidade' htmlFor="cidade">Cidade <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                            <label className='cadastroEndereco-page__label cadastroEndereco-page__3labels-estado' htmlFor="estado">Estado <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                        </div>

                        <div className="cadastroEndereco-page__3inputs">
                            <input className='cadastroEndereco-page__input cadastroEndereco-page__3inputs-cidade' type="text" name="cidade" id="cidade" onChange={(e) => editarEndereco(e)} required />
                            <input className='cadastroEndereco-page__input cadastroEndereco-page__3inputs-cidade' type="text" name="estado" id="estado" onChange={(e) => editarEndereco(e)} required />
                        </div>

                        <div className="cadastroEndereco-page__4labels">
                            <label className='cadastroEndereco-page__label cadastroEndereco-page__4labels-celular' htmlFor="tel1">Celular <span className='cadastroEndereco-page__campo-requerido'>*</span></label>
                            <label className='cadastroEndereco-page__label cadastroEndereco-page__4labels-telefone' htmlFor="tel2">Telefone</label>
                        </div>

                        <div className="cadastroEndereco-page__4inputs">
                            <input className='cadastroEndereco-page__input cadastroEndereco-page__4inputs-celular' type="tel" name="tel1" id="tel1" onChange={(e) => editarEndereco(e)} required />
                            <input className='cadastroEndereco-page__input cadastroEndereco-page__4inputs-telefone' type="tel" name="tel2" id="tel2" onChange={(e) => editarEndereco(e)} />
                        </div>

                        <div className='cadastroEndereco-page__submit'>
                            <p className='cadastroEndereco-page__campo-requerido-text'>* Campos requeridos para cadastro</p>
                            <button className="cadastroEndereco-page__btn" type='submit'>Continuar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CadastroEndereco;