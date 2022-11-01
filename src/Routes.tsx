import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import TipoCadastro from './pages/TipoCadastro';
import RecuperaSenha from './pages/RecuperaSenha';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/tipoCadastro' element={<TipoCadastro />} />
                <Route path='/recuperaSenha' element={<RecuperaSenha />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;