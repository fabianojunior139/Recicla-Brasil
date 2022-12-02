import { FaFacebookSquare, FaInstagram, FaWhatsapp, FaTwitterSquare } from 'react-icons/fa';

import './_styles.scss'

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__content container">
                <div className='footer__links'>
                    <div className='footer__lists'>
                        <ul>
                            <li className='footer__list-title'>Saiba mais</li>
                            <a href='/sobre'className='footer__list-item'><li className='footer__list-item-li'>Sobre nós</li></a>
                            <a href='/tipoCadastro'className='footer__list-item'><li className='footer__list-item-li'>Seja nosso parceiro</li></a>
                        </ul>
                    </div>
                    <div className='footer__lists'>
                        <ul>
                            <li className='footer__list-title'>Serviços</li>
                            <a href='/sobre'className='footer__list-item'><li className='footer__list-item-li'>Ver todos os serviços</li></a>
                            <a href='/tipoCadastro'className='footer__list-item'><li className='footer__list-item-li'>Acha a empresa mais próxima</li></a>
                        </ul>
                    </div>
                    <div className='footer__lists'>
                        <ul>
                            <li className='footer__list-title'>Atendimento ao cliente</li>
                            <a href='/sobre' className='footer__list-item'><li className='footer__list-item-li'>Fale Conosco</li></a>
                            <a href='/tipoCadastro' className='footer__list-item'><li className='footer__list-item-li'>FAQ</li></a>
                        </ul>
                    </div>
                </div>

                <div className='footer__social container'>
                    <div className='footer__socials-media'>
                        <a href="https://www.facebook.com/" target='_blank'>
                            <i className='footer__icon footer__icon-facebook'><FaFacebookSquare /></i>
                        </a>

                        <a href="https://www.instagram.com/" target='_blank'>
                            <i className='footer__icon footer__icon-instagram'><FaInstagram /></i>
                        </a>

                        <a href="https://web.whatsapp.com//" target='_blank'>
                            <i className='footer__icon footer__icon-whatsapp'><FaWhatsapp /></i>
                        </a>

                        <a href="https://twitter.com/" target='_blank'>
                            <i className='footer__icon footer__icon-twitter'><FaTwitterSquare /></i>
                        </a>
                    </div>

                    <p className='footer__copyright-text'>© 2022 Universidade Paulista - todos os direitos reservados.</p>

                </div>
            </div>
        </footer>
    )
}