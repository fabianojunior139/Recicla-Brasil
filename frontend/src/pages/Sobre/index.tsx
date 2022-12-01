import { useContext } from "react";
import NavBar from "../../components/Navbar";
import AuthContext from "../../context/AuthContext";

import './_styles.scss';

export const Sobre = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
            <NavBar />
            <section className="about-us">
                <h1 className="about-us__title">Sobre o Recicla +Brasil</h1>
                <p className="about-us__text">O principal objetivo da plataforma Recicla +Brasil é incentivar a população brasileira criar o hábito de reciclar todo e qualquer material reciclável, mas como? </p>
                <p className="about-us__text">O Recicla +Brasil mostrará para os usuários, que produzem materiais recicláveis em suas casas ou comércios, as empresas de reciclagem mais próximas que pagam os melhores valores por determinados materiais. </p>
                <p className="about-us__text">para as empresas, é interessante pois através da plataforma é possível captar diversos clientes.</p>

                <span className="about-us__text">encontre agora mesmo as empresas de reciclagem mais próximas de você!</span>

                {!user.auth ? <a href="/login" className="about-us__btn">Realizar Login</a> : <a href="/login" className="about-us__btn">Faça uma consulta!</a>}

            </section>
        </>
    )
}