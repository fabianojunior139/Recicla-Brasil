import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { authApi } from '../../database/api';
import { ISenha } from '../../interfaces';

import './_styles.scss';

const AlteraSenha = () => {

    const { user } = useContext(AuthContext);

    const token = user.token

    const [senha, setSenha] = useState({} as ISenha);
    const [msg, setMsg] = useState(true)

    function editarSenha(evento: any) {
        const { name, value } = evento.target;
        setSenha({ ...senha, [name]: value });
    }

    async function salvarSenha(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        try {
            await authApi(token).put(`/auth/${user.id}/${user.usuario_comum ? 'usuario_comum' : 'empresa'}`, senha).then((response) => {
                setMsg(response.data);
            });

            if (msg == false) {
                alert('Senha errada, tente novamente. ');
            } else {
                alert('Senha atualizada com sucesso!');
                window.location.reload();
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="alteraSenha">
            <span className="alteraSenha-title">Altere sua senha</span>
            <form className="alteraSenha-form" onSubmit={salvarSenha}>

                <label className="alteraSenha-form-label" htmlFor="senhaAntiga">Senha antiga<span style={{ color: "red" }}>*</span></label>
                <input
                    className="alteraSenha-form-input"
                    type="password"
                    name='senha_antiga'
                    id='senha_antiga'
                    onChange={(e) => { editarSenha(e) }}
                    required
                />

                <label className="alteraSenha-form-label" htmlFor="data_nascimento">Nova senha <span style={{ color: "red" }}>*</span></label>
                <input
                    className="alteraSenha-form-input"
                    type="password"
                    name='nova_senha'
                    id='nova_senha'
                    onChange={(e) => { editarSenha(e) }}
                    required
                />

                <label className='alteraSenha-form-label' htmlFor="email">Confirmação de senha <span style={{ color: "red" }}>*</span></label>
                <input
                    className='alteraSenha-form-input'
                    type="password"
                    name='confirmacao_senha'
                    id='confirmacao_senha'
                    onChange={(e) => { editarSenha(e) }}
                    required
                />

                <button type="submit" className="alteraSenha-form-btn">SALVAR INFORMAÇÕES</button>

                <span className="alteraSenha-form-alert">* Campos requeridos</span>
            </form>
        </div>
    )
}

export default AlteraSenha