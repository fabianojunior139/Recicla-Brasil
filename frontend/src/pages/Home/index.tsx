import NavBar from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { MyCarousel } from '../../components/Carousel';
import { BsArrowRight } from 'react-icons/bs'

import truckImg from '../../assets/truck.jpg';
import batteryImg from '../../assets/battery.jpg';
import recycleImg from '../../assets/recycle.jpg';
import peopleRecycle from '../../assets/peopleRecycle.jpg';

import './_styles.scss';
const Home = () => {

    return (
        <main className='home main'>
            <NavBar />

            <section className='home__content'>
                <MyCarousel />
            </section>

            <section className='container home__informations'>
                <span className='home__title'>Mais sobre reciclagem</span>

                <div className='home__row-1'>
                    <div className='home__row-1-content'>
                        <div className='home__row-1-content-left'>
                            <span className='home__row-1-content-left-title'>Você sabia que apenas 3% do lixo gerado é reciclado?</span>
                            <p className='home__row-1-content-left-text'>Levantamento realizado em 2018 aponta que caso houvesse um bom trabalho na separação do lixo, os números poderiam chegar a 30%. </p>
                            <a href='#' className='home__row-1-content-left-btn'>Saiba mais <i><BsArrowRight /></i></a>
                        </div>

                        <div className='home__row-1-content-right'>
                            <img src={truckImg} alt="trash" className='home__row-1-content-right-image' />
                        </div>
                    </div>
                </div>

                <div className='home__row-2'>
                    <div className='home__row-2-content'>
                        <div className='home__row-2-content-left'>
                            <img src={batteryImg} alt="trash" className='home__row-2-content-left-image' />
                        </div>

                        <div className='home__row-2-content-right'>
                            <span className='home__row-2-content-right-title'>Pilhas e bateriais são uns dos principais agentes que poluem o planeta</span>
                            <p className='home__row-2-content-right-text'>pilhas e baterias são descartadas em lixões ao ar livre contaminando o solo, e quando são descartados em aterros sanitários acabam contaminando lençóis freáticos e cursos d'água. </p>
                            <a href='#' className='home__row-2-content-right-btn'>Saiba mais <i><BsArrowRight /></i></a>
                        </div>
                    </div>
                </div>

                <div className='home__row-3'>
                    <div className='home__row-3-content'>
                        <div className='home__row-3-content-left'>
                            <span className='home__row-3-content-left-title'>Você sabia que existem diversas empresas de reciclagem próximas a você?</span>
                            <p className='home__row-3-content-left-text'>Além de ajudar a natureza, você pode estar ganhando dinheiro por reciclar materiais recicláveis.</p>
                            <a href='/servicos' className='home__row-1-content-left-btn'>Comece agora mesmo <i><BsArrowRight /></i></a>
                        </div>

                        <div className='home__row-1-content-right'>
                            <img src={recycleImg} alt="trash" className='home__row-3-content-right-image' />
                        </div>
                    </div>
                </div>

                <div className='home__row-4'>
                    <div className='home__row-4-content'>
                        <div className='home__row-4-content-left'>
                            <img src={peopleRecycle} alt="trash" className='home__row-4-content-left-image' />
                        </div>

                        <div className='home__row-4-content-right'>
                            <span className='home__row-4-content-right-title'>Aqui as empresas de reciclagem podem encontrar diversos clientes novos!</span>
                            <p className='home__row-4-content-right-text'>Anuncie de graça sua empresa e consiga mais clientes e maximize seus lucros </p>
                            <a href='/tipoCadastro' className='home__row-4-content-right-btn'>Faça Parte <i><BsArrowRight /></i></a>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </main>
    )
}

export default Home;