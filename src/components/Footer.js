import logo from '../assets/icons/svgs/Logotype.svg';
import insta from '../assets/icons/Instagram.png';
import tiktok from '../assets/icons/TikTok.png';

import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className='ab-footer'>
            <div className='ab-container ab-footer-container'>
                <div className='ab-footer-row ab-footer-logo'>
                    <img src={logo} alt="Abunda Icon" />
                </div>
                <div className='ab-footer-row ab-footer-contact'>
                    {/* <div className="ab-footer-contact-cell">
                        <h3>Contacto</h3>
                        <a href="mailto:cris@abunda.com.co" className='ab-footer-contact-link'>cris@abunda.com.co</a>
                    </div> */}
                    <h3 className='title'>Escríbenos</h3>
                    <ul className='ab-footer-socials'>
                        <li>
                            <a href="https://www.instagram.com/abunda.colombia/" className='ab-footer-link' target="_blank" rel="noreferrer">
                                <img src={insta} alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@abunda.colombia" className='ab-footer-link' target="_blank" rel="noreferrer">
                                <img src={tiktok} alt="Tik Tok" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className='ab-container ab-footer-bottom-row'>
                <div className='ab-footer-row'>
                    <div className='ab-footer-privacy-info'>
                        <a href="/" className='ab-footer-contact-link'>Politicas de Privacidad</a>
                    </div>
                    <ul className='ab-footer-socials'>
                        <li>
                            <a href="/" className='ab-footer-link'>
                                <img alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="/" className='ab-footer-link'>
                                <img alt="Tik Tok" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div> */}
        </footer>
    );
};

export default Footer;