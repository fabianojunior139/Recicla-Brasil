import Carousel from 'react-bootstrap/Carousel';
import { BsArrowRight } from 'react-icons/bs';

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';

import './_styles.scss';

export const MyCarousel = () => {
    return (
        <Carousel fade interval={5000}>
            <Carousel.Item>
                <img
                    className="d-block container"
                    src={img6}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <div className='carousel-card'>
                        <h3 className='carousel-card-title'>Encontre as empresas de reciclagem mais próximas de você e ajude a salvar o planeta!</h3>
                        <a href='#' className='carousel-card-btn'>Conheça nossos serviços ⠀<i><BsArrowRight /></i></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item>
                <img
                    className="d-block container"
                    src={img7}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <div className='carousel-card'>
                        <h3 className='carousel-card-title'>Realize seu cadastro no Recicla +Brasil para aproveitar de todas as vantagens!</h3>
                        <a href='/tipoCadastro' className='carousel-card-btn'>Cadastre-se ⠀<i><BsArrowRight /></i></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item>
                <img
                    className="d-block container"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <div className='carousel-card'>
                        <h3 className='carousel-card-title'>Ao reciclar, você está contribuindo com a natureza!</h3>
                        <a href='/' className='carousel-card-btn'>Mais informações sobre reciclagem⠀<i><BsArrowRight /></i></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            

            <Carousel.Item>
                <img
                    className="d-block container"
                    src={img5}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <div className='carousel-card'>
                        <h3 className='carousel-card-title'>Encontre agora mesmo a empresa mais próximo a sua casa que pague o melhor preço pelo seu materia reciclável!</h3>
                        <a href='/' className='carousel-card-btn'>Conheça nossos serviços ⠀<i><BsArrowRight /></i></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}