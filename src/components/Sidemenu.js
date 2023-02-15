import React from 'react';
import '../styles/sidemenu.css';

import logo from '../assets/icons/svgs/Logotype.svg';
import CloseIcon from '../assets/icons/Vector-3.png'
import insta from '../assets/icons/Instagram.png';
import tiktok from '../assets/icons/TikTok.png';

const Sidemenu = () => {


    const handleClose = e => {
        e.preventDefault();
        let sidemenu = document.querySelector('.ab-sidemenu-section');
        sidemenu.classList.remove('show');
        sidemenu.classList.add('hide');
    }
    return (
        <>
        <div className='ab-sidemenu-section hide'>
            <div className="ab-sidemenu-container">
                <div className="ab-sidemenu-header">
                    <img src={logo} alt="Logo Abunda" className='logo-abunda'/>
                    <span className="close-icon" onClick={handleClose}>
                        <img src={CloseIcon} alt="Close Form" className='close-image' />
                    </span>
                </div>
                <div className="ab-sidemenu-content">
                    {/* <h4 className='ab-sidemenu-link'>Colombia</h4>
                    <h4 className='ab-sidemenu-link'>Mexico</h4> */}
                </div>
                <div className="ab-sidemenu-footer">
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
        </div>
        </>
    );
};

export default Sidemenu;