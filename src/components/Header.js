import React, { useEffect } from 'react';
import Sidemenu from './Sidemenu';

import logo from '../assets/icons/svgs/Logotype.svg';

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
                        <span className="hamburger__bars"></span>
                    </button>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;