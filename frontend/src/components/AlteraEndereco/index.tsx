import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { authApi } from "../../database/api";
import { IEndereco } from "../../interfaces";

import './_styles.scss'

const AlteraEndereco = () => {
    const { user } = useContext(AuthContext);

    const idEndereco = user.id_endereco;
    const token = user.token;

    const [endereco, setEndereco] = useState({} as IEndereco);

    useEffect(() => {
        authApi(token).get(`/endereco/${idEndereco}`).then((response) => {
            setEndereco(response.data);
        }).catch((erro) => {
            console.log(`erro ao listar o endereço: ${erro}`);
        })
    }, []);

    function editarEndereco(evento: any) {
        const { name, value } = evento.target;
        setEndereco({ ...endereco, [name]: value });
    }

    async function salvarEndereco(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        try {
            await authApi(token).put(`/endereco/${idEndereco}`, endereco);
            alert('Endereco atualizado com sucesso!');
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="alteraEndereco">
            <span className="alteraEndereco-title">Altere seu endereço</span>
            <form className="alteraEndereco-form" onSubmit={salvarEndereco}>

                <div className="alteraEndereco-form-columns">
                    <div className="alteraEndereco-form-left">
                        <label className="alteraEndereco-form-label" htmlFor="cep">CEP<span style={{ color: "red" }}>*</span></label>
                        <input
                            className="alteraEndereco-form-input"
                            type="text"
                            name='cep'
                            id='cep'
                            maxLength={9}
                            value={endereco.cep}
                            onChange={(e) => { editarEndereco(e) }}
                            required
                        />

                        <label className="alteraEndereco-form-label" htmlFor="numero">Número <span style={{ color: "red" }}>*</span></label>
                        <input
                            className="alteraEndereco-form-input"
                            type="number"
                            name='numero'
                            id='numero'
                            maxLength={4}
                            value={endereco.numero}
                            onChange={(e) => { editarEndereco(e) }}
                            required
                        />

                        <label className='alteraEndereco-form-label' htmlFor="referencia">Referência <span style={{ color: "red" }}>*</span></label>
                        <input
                            className='alteraEndereco-form-input'
                            type="text"
                            name='referencia'
                            id='referencia'
                            value={endereco.referencia}
                            onChange={(e) => { editarEndereco(e) }}
                            required
                        />

                        <label className='alteraEndereco-form-label' htmlFor="cidade">Cidade <span style={{ color: "red" }}>*</span></label>
                        <input
                            className='alteraEndereco-form-input'
                            type="text"
                            name='cidade'
                            id='cidade'
                            value={endereco.cidade}
                            onChange={(e) => { editarEndereco(e) }}
                            required
                        />

                        <label className='alteraEndereco-form-label' htmlFor="tel1">Celular <span style={{ color: "red" }}>*</span></label>
                        <input
                            className='alteraEndereco-form-input'
                            type="tel"
                            name='tel1'
                            id='tel1'
                            value={endereco.tel1}
                            onChange={(e) => { editarEndereco(e) }}
                            required
                        />
                    </div>

                    <div className="alteraEndereco-form-divisor"></div>

                    <div className="alteraEndereco-form-right">
                        <label className="alteraEndereco-form-label" htmlFor="longradouro">Longradouro<span style={{ color: "red" }}>*</span></label>
                        <input
                            className="alteraEndereco-form-input"
                            type="text"
                            name='longradouro'
                            id='longradouro'
                            value={endereco.longradouro}
                            onChange={(e) => { editarEndereco(e) }}
                            required
                        />

                        <label className="alteraEndereco-form-label" htmlFor="data_nascimento">Complemento <span style={{ color: "red" }}>*</span></label>
                        <input
                            className="alteraEndereco-form-input"
                            type="text"
                            name='complemento'
                            id='complemento'
                            value={endereco.complemento}
                            onChange={(e) => { editarEndereco(e) }}
                            required
                        />

                        <label className='alteraEndereco-form-label' htmlFor="bairro">Bairro <span style={{ color: "red" }}>*</span></label>
                        <input
                            className='alteraEndereco-form-input'
                            type="text"
                            name='bairro'
                            id='bairro'
                            value={endereco.bairro}
                            onChange={(e) => { editarEndereco(e) }}
                            required
                        />

                        <label className='alteraEndereco-form-label' htmlFor="estado">Estado <span style={{ color: "red" }}>*</span></label>
                        <input
                            className='alteraEndereco-form-input'
                            type="text"
                            name='estado'
                            id='estado'
                            value={endereco.estado}
                            onChange={(e) => { editarEndereco(e) }}
                            required
                        />

                        <label className='alteraEndereco-form-label' htmlFor="tel2">Telefone</label>
                        <input
                            className='alteraEndereco-form-input'
                            type="tel"
                            name='tel2'
                            id='tel2'
                            value={endereco.tel2}
                            onChange={(e) => { editarEndereco(e) }}
                            required
                        />
                    </div>
                </div>

                <div className="alteraEndereco-form-more-btns">
                    <button type="submit" className="alteraEndereco-form-btn">SALVAR INFORMAÇÕES</button>

                    <span className="alteraEndereco-form-alert">* Campos requeridos</span>
                </div>

            </form>
        </div>
    )
}

export default AlteraEndereco;