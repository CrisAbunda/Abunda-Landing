import React, { useEffect, useState } from 'react';

import '../styles/home.css';
import ArrowIcon from '../assets/icons/Vector-4.png';
import Sparkles from '../assets/icons/sparkles.png';
import Rappi from '../assets/Slider/Rappi.png';
import Tyba from '../assets/Slider/tyba.png';
import Nu from '../assets/Slider/Nubank.png';
import BBVA from '../assets/Slider/BBVA.png';
import Bitso from '../assets/Slider/Bitso.png';
import Davivienda from '../assets/Slider/Davivienda.png';
import Bancolombia from '../assets/Slider/Bancolombia.png';
import Hov1 from '../assets/home/hov1.jpg';
import Hov2 from '../assets/home/hov2.jpg';

import Slider from '../components/Slider';
import TitleGroup from '../components/TitleGroup';
import Form from '../components/Form';

const Home = () => {
  const [open, setOpen] = useState(false);

  const firstSliderImages = [];
  const secondSliderImages = [];
  const GetSliderImages1 = () =>{
    for (let i = 0; i < 6; i++) {
      firstSliderImages.push({
        url: Rappi,
        desc: 'Rappi',
      });
      firstSliderImages.push({
        url: Tyba,
        desc: 'Tyba',
      });
      firstSliderImages.push({
        url: Nu,
        desc: 'Nubank',
      });
      firstSliderImages.push({
        url: BBVA,
        desc: 'BBVA',
      });
      secondSliderImages.push({
        url: Bitso,
        desc: 'Bitso',
      });
      secondSliderImages.push({
        url: Davivienda,
        desc: 'Davivienda',
      });
      secondSliderImages.push({
        url: Bancolombia,
        desc: 'Bancolombia',
      });
    }
  };
  const GetSliderImages2 = () =>{
    for (let i = 0; i < 2; i++) {
      secondSliderImages.push({
        url: Bitso,
        desc: 'Bitso',
      });
      secondSliderImages.push({
        url: Davivienda,
        desc: 'Davivienda',
      });
      secondSliderImages.push({
        url: Bancolombia,
        desc: 'Bancolombia',
      });
    }
  };
  GetSliderImages1();
  GetSliderImages2();

  document.addEventListener('scroll', (e) => {
      let Yposition = window.scrollY;
      let applyButtonContainer = document.querySelector('.ab-btn-fixed-container');
      let applyButton = document.querySelector('.ab-apply-button-fixed');
      if(Yposition > 400){
        applyButtonContainer.style.display = "flex";
        applyButton.style.transform = "translateY(0)";
      }else{
        applyButtonContainer.style.display = "none";
        applyButton.style.transform = "translateY(150%)";
      }
  });
  useEffect(() =>{
    return () =>{
      console.log('Component Compiled');
    }
  });
  return (
    <>
    {open ? <Form closePopup={() => setOpen(false)} /> : null}
    
    <section id='ab-opening-section' className=''>
      <div className='ab-container ab-opening-container'>
        <TitleGroup></TitleGroup>
        <div className='ab-button-container'>
          <form action="" className='ab-opening-form'>
            <label htmlFor="opening-email-input" className='opening-email-label'>
              <img src={Sparkles} alt="Sparkles" />
              Sé el primero en probarlo
            </label>
            <input type="email" placeholder='Tu correo electrónico' id='opening-email-input' required/>
          </form>
          <button className='ab-apply-button' onClick={() => setOpen(true)}>
            Aplica a la lista de espera
            <img src={ArrowIcon} alt="Arrow Icon" />
          </button>
        </div>
      </div>
    </section>
    <section>
      <Slider FirstSliderImages={firstSliderImages} SecondSliderImages={secondSliderImages}></Slider>
    </section>
    <section className='ab-imageInfo-section'>
      <div className="ab-container imageInfo-container">
        <div className="ab-image-container">
          <div className="ab-image">
            <img src={Hov1} alt="Balance" />
          </div>
        </div>
        <div className="ab-title-group">
          <div className="pretitle">Organiza</div>
          <h2 className='title'>tu vida financiera</h2>
          <div className="subtitle">Toma decisiones inteligentes y solicita productos financieros en línea.</div>
        </div>
      </div>
      <div className="ab-container imageInfo-container">
        <div className="ab-image-container">
          <div className="ab-image">
            <img src={Hov2} alt="Get Better" />
          </div>
        </div>
        <div className="ab-title-group">
          <div className="pretitle">Mejora</div>
          <h2 className='title'>tus tasas de interés</h2>
          <div className="subtitle">Unifica tu cartera y construye confiabilidad con una institución.</div>
        </div>
      </div>
    </section>
    <div className='ab-btn-fixed-container'>
      <button className='ab-apply-button-fixed' onClick={() => setOpen(true)}>
        Aplica a la lista de espera
        <img src={ArrowIcon} alt="Arrow Icon" />
      </button>
    </div>
    </>
  );
};

export default Home;