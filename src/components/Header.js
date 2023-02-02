import React, { useEffect } from 'react';
import Sidemenu from './Sidemenu';

import logo from '../assets/Logotype.png';
import btnIcon from '../assets/icons/Icon.png'

import '../styles/header.css';

const Header = () => {
    const handleOpenSidemenu = e => {
        e.preventDefault();
        let sidemenu = document.querySelector('.ab-sidemenu-section');
        sidemenu.classList.add('show');
        sidemenu.classList.remove('hide');
    }

    useEffect(() =>{
        return () =>{
            console.log('Component Compiled - Header');
        }
    });
    return (
        <>
        <Sidemenu />
        <header className='ab-header'>
            <div className='ab-header-container'>
                <a href="/" className='ab-header-logo'>
                    <img src={logo} alt="Logo Abunda" className='logo-abunda'/>
                </a>
                <div className="ab-btn-container">
                    <button className='ab-sidemenu-button' onClick={handleOpenSidemenu}>
                        Menú
                        <img src={btnIcon} alt="Sidemenu Icon" className='ab-sidemenu-button-icon'/>
                    </button>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;