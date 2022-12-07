import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import { authApi } from '../../database/api';
import { IProduto } from '../../interfaces';
import DataTable from "react-data-table-component";

import { AiFillEye, AiFillEdit, AiOutlineClose } from 'react-icons/ai'

import './_styles.scss'
import { useNavigate } from 'react-router-dom';

const ProdutoTable = () => {

    const { user } = useContext(AuthContext);
    const token = user.token;

    const navigate = useNavigate();

    const [produto, setProduto] = useState<IProduto[]>([]);

    useEffect(() => {
        authApi(token).get(`/produto/${user.id}`).then((response) => {
            setProduto(response.data);
        }).catch((erro) => {
            console.log(`erro ao listar os produtos: ${erro}`);
        });
    }, []);

    const columns = [
        {
            name: "Nome do produto",
            sortable: true,
            center: true,
            selector: (row: any) => row.nome,
        },
        {
            name: "Categoria",
            sortable: true,
            center: true,
            selector: (row: any) => row.id_categoria,
        },
        {
            name: "Valor",
            sortable: true,
            maxWidth: '1000px',
            center: true,
            selector: (row: any) => row.valor,
        },
        {
            name: "Visualizar",
            sortable: false,
            maxWidth: '1px',
            center: true,
            selector: (row: any) => <button className='produtosTable__btn' onClick={() => {  }}>
                <i className='produtosTable__icon'><AiFillEye /></i>
            </button>,
        },
        {
            name: "Editar",
            sortable: false,
            maxWidth: '1px',
            center: true,
            selector: (row: any) => <button className='produtosTable__btn'>
                <i className='produtosTable__icon'><AiFillEdit /></i>
            </button>,
        },
        {
            name: "Excluir",
            sortable: false,
            maxWidth: "10px",
            center: true,
            selector: (row: any) => <button className='produtosTable__btn'>
                <i className='produtosTable__icon'><AiOutlineClose /></i>
            </button>,
        }
    ]
    AiOutlineClose
    return <DataTable
        columns={columns}
        data={produto}
        className='produtosTable'
        title='Produtos cadastrados pela empresa'
        pagination
    />

}

export default ProdutoTable