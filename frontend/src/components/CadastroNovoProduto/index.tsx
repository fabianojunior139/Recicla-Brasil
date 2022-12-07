import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { authApi } from '../../database/api';
import { ICategoria, IProduto } from '../../interfaces';

import './_styles.scss';

// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";

import DataTable from "react-data-table-component";

const CadastroNovoProduto = () => {

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


    const valorInicialProduto = {
        nome: '',
        id_categoria: 0,
        valor: '',
        id_empresa: user.id
    }

    const [produto, setProduto] = useState<IProduto>(valorInicialProduto);

    function editarProduto(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    }

    async function salvarProduto(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await authApi(token).post('/produto', produto).then(response => {
                const produto = response.data;
                if (produto) {
                    alert('Produto cadastrado com sucesso!');
                    window.location.reload();
                } else {
                    alert('Erro ao cadastrar o produto, tente novamente!');
                }
            })
        } catch (error) {
            alert('Erro ao cadastrar o produto, tente novamente!');
        }
    }

    return (
        <div className="AlteraDadosEmpresa__content__usuario">
            <span className="AlteraDadosEmpresa__content__usuario-title">Cadastre um novo produto em seu catálogo!</span>
            <form className="AlteraDadosEmpresa__content__usuario-form" onSubmit={salvarProduto}>

                <label className='AlteraDadosEmpresa__content__usuario-form-label' htmlFor="id_categoria">Categoria <span style={{ color: "red" }}>*</span></label>
                <select
                    name="id_categoria"
                    id="id_categoria"
                    className='AlteraDadosEmpresa__content__usuario-form-input'
                    onChange={(e) => { editarProduto(e) }}
                    defaultValue={''}
                    required >

                    <option value={''} disabled>Selecione a categoria...</option>
                    {
                        categoria.map(categoria => (
                            <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                        ))
                    }
                </select>

                <label className="AlteraDadosEmpresa__content__usuario-form-label" htmlFor="nome">Nome do produto <span style={{ color: "red" }}>*</span></label>
                <input
                    className="AlteraDadosEmpresa__content__usuario-form-input"
                    type="text"
                    name='nome'
                    id='nome'
                    onChange={(e) => { editarProduto(e) }}
                    required
                />

                <label className="AlteraDadosEmpresa__content__usuario-form-label" htmlFor="valor">Valor por quilo <span style={{ color: "red" }}>*</span></label>
                <input
                    className="AlteraDadosEmpresa__content__usuario-form-input"
                    type="text"
                    name='valor'
                    id='valor'
                    onChange={(e) => { editarProduto(e) }}
                    required
                />

                <button type="submit" className="AlteraDadosEmpresa__content__usuario-form-btn">SALVAR INFORMAÇÕES</button>

                <span className="AlteraDadosEmpresa__content__usuario-form-alert">* Campos requeridos</span>
            </form>
        </div>
    )
}

export default CadastroNovoProduto;