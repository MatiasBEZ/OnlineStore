import React from 'react'
import './Slider.css'
import {ArrowLeft} from 'phosphor-react';
import {ArrowRight} from 'phosphor-react';

export default function BtnSlider({direction, moveSlide}) {
    return (
        <button onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" :
        "btn-slide prev"}>
            {direction === "next" ?
            <ArrowRight size={20} />  
            :   
            <ArrowLeft size={20} />}
        </button>
    );
}