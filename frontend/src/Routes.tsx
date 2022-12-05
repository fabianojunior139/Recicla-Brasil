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
import Bloqueio from './pages/Bloqueio';

function AppRoutes() {

    const { user } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/cadastroUsuario/:id' element={<CadastroUsuario />} />
                
                <Route path='/login' element={(user.auth == true) ? <Home /> : <Login />} />
                <Route path='/tipoCadastro' element={(user.auth == true) ? <Home /> : <TipoCadastro />} />
                <Route path='/recuperaSenha' element={(user.auth == true) ? <Home /> : <RecuperaSenha />} />
                <Route path='/cadastroEmpresa/:idEndereco' element={(user.auth == true) ? <Home /> : <CadastroEmpresa />} />
                <Route path='/cadastroEndereco/:type' element={(user.auth == true) ? <Home /> : <CadastroEndereco />} />

                <Route path='/meuPerfil' element={<MeuPerfil />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;