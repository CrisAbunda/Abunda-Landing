import icon from '../assets/Isotype.png';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className='ab-footer'>
            <div className='ab-container ab-footer-container'>
                <div className='ab-footer-col'>
                    <h3>Contacto</h3>
                    <a href="/" className='ab-footer-link'>hola@abunda.com.co</a>
                    <h3>Contacto</h3>
                    <a href="/" className='ab-footer-link'>hola@abunda.com.mx</a>
                </div>
                <div className='ab-footer-col'>
                    <h3>Redes Sociales</h3>
                    <ul className='ab-footer-socials'>
                        <li className='ab-footer-link'>Instagram</li>
                        <li className='ab-footer-link'>TikTok</li>
                        <li className='ab-footer-link'>Twitter</li>
                        <li className='ab-footer-link'>Facebook</li>
                    </ul>
                </div>
            </div>
            <div className='ab-container'>
                <img src={icon} alt="Abunda Icon" />
            </div>
        </footer>
    );
};

export default Footer;