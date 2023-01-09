import logo from '../assets/Logotype.png';
import btnIcon from '../assets/icons/Icon.png'

import '../styles/header.css';

const Header = () => {
    return (
        <header className='ab-header'>
            <div className='ab-header-container'>
                <a href="/" className='ab-header-logo'>
                    <img src={logo} alt="Logo Abunda" className='logo-abunda'/>
                </a>
                <a href="#" className='ab-sidemenu-button'>
                    Menú
                    <img src={btnIcon} alt="Sidemenu Icon" className='ab-sidemenu-button-icon'/>
                </a>
            </div>
        </header>
    );
};

export default Header;