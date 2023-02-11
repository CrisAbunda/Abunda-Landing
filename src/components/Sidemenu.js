import React from 'react';
import '../styles/sidemenu.css';

import logo from '../assets/icons/svgs/Logotype.svg';
import CloseIcon from '../assets/icons/Vector-3.png'

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
                    <h4 className='ab-sidemenu-footer-title'>Contacto</h4>
                    <a href='mailto:cris@abunda.com.co' className='ab-sidemenu-footer-link'>cris@abunda.com.co</a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Sidemenu;