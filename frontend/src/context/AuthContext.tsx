import { createContext, useState } from "react";
import { authApi } from "../database/api";

export interface IUser {
    id_endereco: any;
    id: number,
    email: string,
    admin?: boolean,
    usuario_ativo: boolean,
    token: string,
    auth: boolean
}

export interface IUsuarioLogin {
    email: string,
    senha: string
}

interface IAuthContext {
    user: IUser;
    login(user: IUsuarioLogin): boolean;
    logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: any) => {

    const [userData, setUserData] = useState<IUser>(() => {
        const user = localStorage.getItem('user');

        if (user) {
            return JSON.parse(user);
        }

        return {} as IUser
    });

    const login = (user: IUsuarioLogin) => {

        try {
            authApi("").post('/auth', user)
                .then((response) => {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    setUserData(response.data);

                }).catch(() => {
                    alert("Usuário ou senha incorreto");
                })

        } catch (error) {
            console.log(error);
        }

        return true
    }

    const logout = () => {
        localStorage.clear();
        setUserData({} as IUser);
        alert('usuário deslogado com sucesso!');
    }

    return (
        <AuthContext.Provider value={{ user: userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider };

export default AuthContext;