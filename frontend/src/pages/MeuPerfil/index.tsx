import NavBar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import AuthContext from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiLocationMarker } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi'
import { IUserComum } from "../../interfaces";
import AlteraSenha from "../../components/AlteraSenha";
import AlteraEndereco from "../../components/AlteraEndereco";

import './_styles.scss';
import { authApi } from "../../database/api";

const MeuPerfil = () => {

    const { user, logout } = useContext(AuthContext)

    const token = user.token

    const [typeForm, setTypeForm] = useState(`dados-pessoais-usuario`);
    const [userComum, setUserComum] = useState<IUserComum>({} as IUserComum);
    const [msg, setMsg] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        authApi(token).get(`/usuario/${user.id}`).then((response) => {
            setUserComum(response.data);
        }).catch((erro) => {
            console.log(`erro ao listar o usuário: ${erro}`);
        })
    }, []);

    function editarUsuario(evento: any) {
        const { name, value } = evento.target;
        setUserComum({ ...userComum, [name]: value });
    }

    async function salvarUsuario(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        try {
            await authApi(token).put(`/usuario/${user.id}`, userComum).then((response) => {
                setMsg(response.data)
            });

            if (msg == false) {
                alert('Perfil atualizado com sucesso!');
            } else {
                alert('E-mail já existe, tente novamente!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="main">
            <NavBar />
            <main className="meuPerfil container">
                <section className="meuPerfil__sidebar">
                    <ul className="meuPerfil__sidebar__list">

                        <li className={`meuPerfil__sidebar__list-item ${typeForm == 'dados-pessoais-usuario' ? 'meuPerfil__sidebar__list-item-selected' : ''}`} onClick={() => { setTypeForm('dados-pessoais-usuario') }}>
                            <i className="meuPerfil__sidebar__list-item-icon">
                                <FaUserCircle />
                            </i>Dados Pessoais
                        </li>

                        <li className={`meuPerfil__sidebar__list-item ${typeForm == 'alterar-senha' ? 'meuPerfil__sidebar__list-item-selected' : ''}`} onClick={() => { setTypeForm('alterar-senha') }}>
                            <i className="meuPerfil__sidebar__list-item-icon">
                                <RiLockPasswordLine />
                            </i>Alterar Senha
                        </li>

                        <li className={`meuPerfil__sidebar__list-item ${typeForm == 'seu-endereco' ? 'meuPerfil__sidebar__list-item-selected' : ''}`} onClick={() => { setTypeForm('seu-endereco') }}>
                            <i className="meuPerfil__sidebar__list-item-icon">
                                <HiLocationMarker />
                            </i>Seu Endereço
                        </li>

                        <a href="/login" className="meuPerfil__sidebar__list-item-link">
                            <li className="meuPerfil__sidebar__list-item" onClick={logout}>
                                <i className="meuPerfil__sidebar__list-item-icon">
                                    <FiLogOut />
                                </i>Sair
                            </li>
                        </a>

                    </ul>
                </section>

                <div className="meuPerfil__content">

                    {typeForm == 'dados-pessoais-usuario' ?
                        <div className="meuPerfil__content__usuario">
                            <span className="meuPerfil__content__usuario-title">Altere seus dados pessoais</span>
                            <form onSubmit={salvarUsuario} className="meuPerfil__content__usuario-form">

                                <label className="meuPerfil__content__usuario-form-label" htmlFor="nome">Nome <span style={{ color: "red" }}>*</span></label>
                                <input
                                    className="meuPerfil__content__usuario-form-input"
                                    type="text"
                                    name='nome'
                                    id='nome'
                                    value={userComum.nome}
                                    onChange={(e) => { editarUsuario(e) }}
                                    required
                                />

                                <label className="meuPerfil__content__usuario-form-label" htmlFor="data_nascimento">Data de nascimento <span style={{ color: "red" }}>*</span></label>
                                <input
                                    className="meuPerfil__content__usuario-form-input"
                                    type="text"
                                    name='data_nascimento'
                                    id='data_nascimento'
                                    maxLength={10}
                                    value={userComum.data_nascimento}
                                    onChange={(e) => { editarUsuario(e) }}
                                    required
                                />

                                <label className='meuPerfil__content__usuario-form-label' htmlFor="email">CPF <span style={{ color: "red" }}>*</span></label>
                                <input
                                    className='meuPerfil__content__usuario-form-input'
                                    type="text"
                                    name='cpf'
                                    id='cpf'
                                    value={userComum.cpf}
                                    onChange={(e) => { editarUsuario(e) }}
                                    required
                                />

                                <label className='meuPerfil__content__usuario-form-label' htmlFor="email">E-mail <span style={{ color: "red" }}>*</span></label>
                                <input
                                    className='meuPerfil__content__usuario-form-input'
                                    type="email"
                                    name='email'
                                    id='email'
                                    value={userComum.email}
                                    onChange={(e) => { editarUsuario(e) }}
                                    required
                                />

                                <button type="submit" className="meuPerfil__content__usuario-form-btn">SALVAR INFORMAÇÕES</button>

                                <span className="meuPerfil__content__usuario-form-alert">* Campos requeridos</span>
                            </form>
                        </div>
                        :
                        <>
                            {typeForm == 'alterar-senha' ?
                                <AlteraSenha />
                                :
                                <AlteraEndereco />
                            }
                        </>
                    }

                </div>
            </main>
            <Footer />
        </div>
    )
}

export default MeuPerfil

