import NavBar from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiLocationMarker } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi'
import { GrCatalogOption } from 'react-icons/gr';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import AlteraEndereco from '../../components/AlteraEndereco';
import AlteraSenha from '../../components/AlteraSenha';

import './_styles.scss';

const Empresa = () => {

    const { user, logout } = useContext(AuthContext);

    const [typeForm, setTypeForm] = useState(`dados-pessoais-usuario`);


    return (
        <div className='main'>
            <NavBar />
            <main className='empresa container'>
                <section className='empresa__sidebar'>
                    <ul className="empresa__sidebar__list">

                        <li className={`empresa__sidebar__list-item ${typeForm == 'catalogo' ? 'empresa__sidebar__list-item-selected' : ''}`} onClick={() => { setTypeForm('catalogo') }}>
                            <i className="empresa__sidebar__list-item-icon">
                                <GrCatalogOption />
                            </i>Catálogo de Produtos
                        </li>

                        <li className={`empresa__sidebar__list-item ${typeForm == 'cadastro-produto' ? 'empresa__sidebar__list-item-selected' : ''}`} onClick={() => { setTypeForm('cadastro-produto') }}>
                            <i className="empresa__sidebar__list-item-icon">
                                <MdOutlineProductionQuantityLimits />
                            </i>Cadastrar Novo Produto
                        </li>

                        <li className={`empresa__sidebar__list-item ${typeForm == 'dados-pessoais-usuario' ? 'empresa__sidebar__list-item-selected' : ''}`} onClick={() => { setTypeForm('dados-pessoais-usuario') }}>
                            <i className="empresa__sidebar__list-item-icon">
                                <FaUserCircle />
                            </i>Dados da empresa
                        </li>

                        <li className={`empresa__sidebar__list-item ${typeForm == 'seu-endereco' ? 'empresa__sidebar__list-item-selected' : ''}`} onClick={() => { setTypeForm('seu-endereco') }}>
                            <i className="empresa__sidebar__list-item-icon">
                                <HiLocationMarker />
                            </i>Seu Endereço
                        </li>

                        <li className={`empresa__sidebar__list-item ${typeForm == 'alterar-senha' ? 'empresa__sidebar__list-item-selected' : ''}`} onClick={() => { setTypeForm('alterar-senha') }}>
                            <i className="empresa__sidebar__list-item-icon">
                                <RiLockPasswordLine />
                            </i>Alterar Senha
                        </li>

                        <a href="/login" className="empresa__sidebar__list-item-link">
                            <li className="empresa__sidebar__list-item" onClick={logout}>
                                <i className="empresa__sidebar__list-item-icon">
                                    <FiLogOut />
                                </i>Sair
                            </li>
                        </a>
                    </ul>
                </section>

                <div className="empresa__content">

                    {typeForm == 'dados-pessoais-usuario' ?
                        <div className="empresa__content__usuario">
                            <span className="empresa__content__usuario-title">Altere seus dados pessoais</span>
                            <form className="empresa__content__usuario-form">

                                <label className="empresa__content__usuario-form-label" htmlFor="nome">Nome <span style={{ color: "red" }}>*</span></label>
                                <input
                                    className="empresa__content__usuario-form-input"
                                    type="text"
                                    name='nome'
                                    id='nome'
                                    // value={userComum.nome}
                                    // onChange={(e) => { editarUsuario(e) }}
                                    required
                                />

                                <label className="empresa__content__usuario-form-label" htmlFor="data_nascimento">Data de nascimento <span style={{ color: "red" }}>*</span></label>
                                <input
                                    className="empresa__content__usuario-form-input"
                                    type="text"
                                    name='data_nascimento'
                                    id='data_nascimento'
                                    maxLength={10}
                                    // value={userComum.data_nascimento}
                                    // onChange={(e) => { editarUsuario(e) }}
                                    required
                                />

                                <label className='empresa__content__usuario-form-label' htmlFor="email">CPF <span style={{ color: "red" }}>*</span></label>
                                <input
                                    className='empresa__content__usuario-form-input'
                                    type="text"
                                    name='cpf'
                                    id='cpf'
                                    // value={userComum.cpf}
                                    // onChange={(e) => { editarUsuario(e) }}
                                    required
                                />

                                <label className='empresa__content__usuario-form-label' htmlFor="email">E-mail <span style={{ color: "red" }}>*</span></label>
                                <input
                                    className='empresa__content__usuario-form-input'
                                    type="email"
                                    name='email'
                                    id='email'
                                    // value={userComum.email}
                                    // onChange={(e) => { editarUsuario(e) }}
                                    required
                                />

                                <button type="submit" className="empresa__content__usuario-form-btn">SALVAR INFORMAÇÕES</button>

                                <span className="empresa__content__usuario-form-alert">* Campos requeridos</span>
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

export default Empresa;