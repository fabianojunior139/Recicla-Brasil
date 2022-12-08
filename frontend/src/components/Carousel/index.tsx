import Carousel from 'react-bootstrap/Carousel';
import { BsArrowRight } from 'react-icons/bs';

import nature from '../../assets/nature.jpg';
import truckRecycleImg from '../../assets/truckRecycleImg.jpg';
import menRecycle from '../../assets/menRecycle.jpg';

import './_styles.scss';

export const MyCarousel = () => {
    return (
        <Carousel fade interval={4000}>
            <Carousel.Item>
                <img
                    className="d-block container"
                    src={truckRecycleImg}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <div className='carousel-card'>
                        <h3 className='carousel-card-title'>Encontre as empresas de reciclagem mais próximas de você e ajude a salvar o planeta!</h3>
                        <a href='/servicos' className='carousel-card-btn'>Conheça nossos serviços <i><BsArrowRight /></i></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block container"
                    src={menRecycle}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='carousel-card'>
                        <h3 className='carousel-card-title'>Realize seu cadastro no Recicla +Brasil para aproveitar de todas as vantagens!</h3>
                        <a href='/tipoCadastro' className='carousel-card-btn'>Cadastre-se <i><BsArrowRight /></i></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block container"
                    src={nature}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='carousel-card'>
                        <h3 className='carousel-card-title'>Ao reciclar, você está contribuindo com a natureza!</h3>
                        <a href='/servicos' className='carousel-card-btn'>Conheça nossos serviços <i><BsArrowRight /></i></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}