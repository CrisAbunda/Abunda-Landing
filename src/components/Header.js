import React, { useState, useEffect } from 'react';

import logo from '../assets/Logotype.png';
import btnIcon from '../assets/icons/Icon.png'

import '../styles/header.css';

const Header = () => {

    useEffect(() =>{
        return () =>{
            document.addEventListener('scroll', (e) => {
                let Yposition = window.scrollY;
                let applyButton = document.querySelector('.ab-header-apply-button');
                if(Yposition > 500){
                    applyButton.style.visibility = "visible";
                }else{
                    applyButton.style.visibility = "hidden";
                }
            });
        }
    });
    return (
        <header className='ab-header'>
            <div className='ab-header-container'>
                <a href="/" className='ab-header-logo'>
                    <img src={logo} alt="Logo Abunda" className='logo-abunda'/>
                </a>
                <div className="ab-btn-container">
                    <a href="#" className='ab-header-apply-button'>
                            Aplica a la lista de espera
                    </a>
                    <a href="#" className='ab-sidemenu-button'>
                        Menú
                        <img src={btnIcon} alt="Sidemenu Icon" className='ab-sidemenu-button-icon'/>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;