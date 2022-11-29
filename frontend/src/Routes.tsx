import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import TipoCadastro from './pages/TipoCadastro';
import RecuperaSenha from './pages/RecuperaSenha';
import CadastroEmpresa from './pages/CadastroEmpresa';
import CadastroEndereco from './pages/CadastroEndereço';
import CadastroUsuario from './pages/CadastroUsuario';
import Home from './pages/Home';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/login' element={<Login />} />
                <Route path='/tipoCadastro' element={<TipoCadastro />} />
                <Route path='/recuperaSenha' element={<RecuperaSenha />} />
                <Route path='/cadastroEmpresa/:idEndereco' element={<CadastroEmpresa />} />
                <Route path='/cadastroEndereco/:type' element={<CadastroEndereco />} />
                <Route path='/cadastroUsuario/:id' element={<CadastroUsuario />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;