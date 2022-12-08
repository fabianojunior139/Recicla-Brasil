import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import { authApi } from '../../database/api';
import { IProduto } from '../../interfaces';
import DataTable from "react-data-table-component";
import MensagemExcluir from '../MensagemExcluir';
import { AiFillEye, AiFillEdit, AiOutlineClose } from 'react-icons/ai'
import AlteraProduto from '../AlteraProduto';
import { IInfoProduto } from '../../interfaces';

import './_styles.scss'
import { useNavigate } from 'react-router-dom';

const ProdutoTable = () => {

    const { user } = useContext(AuthContext);
    const token = user.token;

    const navigate = useNavigate();

    const [produto, setProduto] = useState<IProduto[]>([]);
    const [msgExcluir, setMsgExcluir] = useState('table');
    const [id, setId] = useState(0);
    const [idProduto, setIdProduto] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        authApi(token).get(`/produto/empresa/${user.id}`).then((response) => {            
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
            selector: (row: any) => row.nome_categoria,
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
            selector: (row: any) => <button className='produtosTable__btn' onClick={() => {
                navigate(`/infoProduto/${row.id}`)
            }}>
                <i className='produtosTable__icon'><AiFillEye /></i>
            </button>,
        },
        {
            name: "Editar",
            sortable: false,
            maxWidth: '1px',
            center: true,
            selector: (row: any) => <button className='produtosTable__btn' onClick={() => {
                setMsgExcluir('editar'), setIdProduto(row.id)
            }}>
                <i className='produtosTable__icon'><AiFillEdit /></i>
            </button>,
        },
        {
            name: "Excluir",
            sortable: false,
            maxWidth: "10px",
            center: true,
            selector: (row: any) => <button className='produtosTable__btn' onClick={() => {
                setId(row.id), setMsgExcluir('excluir'), setNome(row.nome)
            }}>
                <i className='produtosTable__icon'><AiOutlineClose /></i>
            </button>,
        }
    ]
    AiOutlineClose

    console.log(produto);
    

    return (
        <>
            {msgExcluir == 'table' ?
                <DataTable
                    columns={columns}
                    data={produto}
                    className='produtosTable'
                    title='Produtos cadastrados pela empresa'
                    pagination
                />
                :
                <>
                    {msgExcluir == 'excluir' ?
                        <MensagemExcluir id={id} nome={nome} abortarExclusão={setMsgExcluir} />
                        :
                        <AlteraProduto id={idProduto} />
                    }
                </>

            }

        </>
    )


}

export default ProdutoTable