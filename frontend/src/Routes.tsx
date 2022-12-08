import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import TipoCadastro from './pages/TipoCadastro';
import RecuperaSenha from './pages/RecuperaSenha';
import CadastroEmpresa from './pages/CadastroEmpresa';
import CadastroEndereco from './pages/CadastroEndereço';
import CadastroUsuario from './pages/CadastroUsuario';
import Home from './pages/Home';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import { Sobre } from './pages/Sobre';
import MeuPerfil from './pages/MeuPerfil';
import Servicos from './pages/Servicos';
import Empresa from './pages/Empresa';
import Bloqueio from './pages/Bloqueio';
import InfoProduto from './pages/InfoProduto';

function AppRoutes() {

    const { user } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={(user.auth == true) ? (user.usuario_comum ? <Servicos /> : <Empresa />) : <Login />} />

                <Route path='/home' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/cadastroUsuario/:id' element={<CadastroUsuario />} />

                <Route path='/login' element={(user.auth == true) ? <Home /> : <Login />} />
                <Route path='/tipoCadastro' element={(user.auth == true) ? <Home /> : <TipoCadastro />} />
                <Route path='/recuperaSenha' element={(user.auth == true) ? <Home /> : <RecuperaSenha />} />
                <Route path='/cadastroEmpresa/:idEndereco' element={(user.auth == true) ? <Home /> : <CadastroEmpresa />} />
                <Route path='/cadastroEndereco/:type' element={(user.auth == true) ? <Home /> : <CadastroEndereco />} />

                <Route path='/meuPerfil' element={(user.auth == true) ? <MeuPerfil /> : <Login />} />
                <Route path='/servicos' element={(user.auth == true && user.usuario_comum) ? <Servicos /> : <Bloqueio />} />
                <Route path='/empresa' element={(user.auth == true && !user.usuario_comum) ? <Empresa /> : <Bloqueio />} />

                <Route path='/infoProduto/:id_produto' element={(user.auth == true) ? <InfoProduto /> : <Bloqueio />} />



            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;