import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { authApi } from '../../database/api';
import { IEmpresa } from '../../interfaces';
import './_styles.scss';

const AlteraDadosEmpresa = () => {

    const { user } = useContext(AuthContext)
    const token = user.token;

    const [dadosEmpresa, setDadosEmpresa] = useState({} as IEmpresa);

    useEffect(() => {
        authApi(token).get(`/empresa/${user.id}`).then((response) => {
            setDadosEmpresa(response.data);
        }).catch((erro) => {
            console.log(`erro ao listar os dados da empresa: ${erro}`);
        })
    }, []);

    function editarEndereco(evento: any) {
        const { name, value } = evento.target;
        setDadosEmpresa({ ...dadosEmpresa, [name]: value });
    }

    async function salvarEmpresa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        try {
            await authApi(token).put(`/empresa/${user.id}`, dadosEmpresa);
            alert('Dados da empresa atualizados com sucesso!');
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="AlteraDadosEmpresa__content__usuario">
            <span className="AlteraDadosEmpresa__content__usuario-title">Altere seus dados pessoais</span>
            <form className="AlteraDadosEmpresa__content__usuario-form" onSubmit={salvarEmpresa}>

                <label className="AlteraDadosEmpresa__content__usuario-form-label" htmlFor="razao_social">Razão social <span style={{ color: "red" }}>*</span></label>
                <input
                    className="AlteraDadosEmpresa__content__usuario-form-input"
                    type="text"
                    name='razao_social'
                    id='razao_social'
                    value={dadosEmpresa.razao_social}
                    onChange={(e) => { editarEndereco(e) }}
                    required
                />

                <label className="AlteraDadosEmpresa__content__usuario-form-label" htmlFor="cnpj">CNPJ <span style={{ color: "red" }}>*</span></label>
                <input
                    className="AlteraDadosEmpresa__content__usuario-form-input"
                    type="text"
                    name='cnpj'
                    id='cnpj'
                    maxLength={18}
                    value={dadosEmpresa.cnpj}
                    onChange={(e) => { editarEndereco(e) }}
                    required
                />

                <label className='AlteraDadosEmpresa__content__usuario-form-label' htmlFor="email">E-mail <span style={{ color: "red" }}>*</span></label>
                <input
                    className='AlteraDadosEmpresa__content__usuario-form-input'
                    type="email"
                    name='email'
                    id='email'
                    value={dadosEmpresa.email}
                    onChange={(e) => { editarEndereco(e) }}
                    required
                />

                <label className='AlteraDadosEmpresa__content__usuario-form-label' htmlFor="descricao">Descrição <span style={{ color: "red" }}>*</span></label>
                <textarea
                    className='AlteraDadosEmpresa__content__usuario-form-input AlteraDadosEmpresa__content__usuario-form-textarea'
                    name='descricao'
                    id='descricao'
                    value={dadosEmpresa.descricao}
                    onChange={(e) => { editarEndereco(e) }}
                    required
                />

                <button type="submit" className="AlteraDadosEmpresa__content__usuario-form-btn">SALVAR INFORMAÇÕES</button>

                <span className="AlteraDadosEmpresa__content__usuario-form-alert">* Campos requeridos</span>
            </form>
        </div>
    )
}

export default AlteraDadosEmpresa