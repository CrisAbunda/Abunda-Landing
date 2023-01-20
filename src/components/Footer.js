import logo from '../assets/Logotype.png';
import insta from '../assets/icons/Instagram.png';
import tiktok from '../assets/icons/TikTok.png';
import twitter from '../assets/icons/Twitter.png';
import face from '../assets/icons/Facebook.png';

import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className='ab-footer'>
            <div className='ab-container ab-footer-container'>
                <div className='ab-footer-row ab-footer-logo'>
                    <img src={logo} alt="Abunda Icon" />
                </div>
                <div className='ab-footer-row ab-footer-contact'>
                    <div className="ab-footer-contact-cell">
                        <h3>Contacto</h3>
                        <a href="/" className='ab-footer-contact-link'>hola@abunda.com.co</a>
                    </div>
                    <div className="ab-footer-contact-cell">
                        <h3>Contacto</h3>
                        <a href="/" className='ab-footer-contact-link'>hola@abunda.com.mx</a>
                    </div>
                </div>
            </div>
            <div className='ab-container ab-footer-bottom-row'>
                <div className='ab-footer-row'>
                    <div className='ab-footer-privacy-info'>
                        <a href="/" className='ab-footer-contact-link'>Politicas de Privacidad</a>
                    </div>
                    <ul className='ab-footer-socials'>
                        <li>
                            <a href="/" className='ab-footer-link'>
                                <img src={insta} alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="/" className='ab-footer-link'>
                                <img src={tiktok} alt="Tik Tok" />
                            </a>
                        </li>
                        <li>
                            <a href="/" className='ab-footer-link'>
                                <img src={twitter} alt="Twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="/" className='ab-footer-link'>
                                <img src={face} alt="Facebook" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;