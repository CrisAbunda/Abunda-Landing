import React, { useState, useEffect } from 'react';
import '../styles/slider.css';

const Slider = ({FirstSliderImages, SecondSliderImages}) => {
    return (
        <>
        <div id="infinite" className="ab-slider-section" >
            <div className='ab-slider-container'>
                <ul className='ab-slider'>
                    {
                        FirstSliderImages.map(i => (
                            FirstSliderImages.length > 0 && (
                                <li className="slider-card">
                                    <img src={i.url} alt={i.desc} />
                                </li>
                            )
                        ))
                    }
                </ul>
            </div>
        </div>
        <div id="infinite2" className="ab-slider-section" >
            <div className='ab-slider-container'>
                <ul className='ab-slider'>
                    {
                        SecondSliderImages.map(i => (
                            SecondSliderImages.length > 0 && (
                                <li className="slider-card">
                                    <img src={i.url} alt={i.desc} />
                                </li>
                            )
                        ))
                    }
                </ul>
            </div>
        </div>
        </>
    );
};

export default Slider;