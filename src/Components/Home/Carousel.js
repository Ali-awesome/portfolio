import React from 'react';
import wall from '../../images/wall.jpg';
import codeone from '../../images/codeone.jpg';
import codetwo from '../../images/codeTwo.jpg';
import duel from '../../images/dualWindow.jpg';
import logoone from '../../images/SaNaUllah (1).png'
import { Link } from 'react-router-dom';
import myPDF from '../../images/Resume of Sanaullah.pdf'

const Carousel = () => {
    return (
        <div>
            <div className='relative carousel w-full h-screen'>
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={wall} class="w-full  brightness-[.25]" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={codeone} class="w-full  brightness-[.25]" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={codetwo} class="w-full  brightness-[.25]" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src={duel} class="w-full  brightness-[.25]" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div className='fixed inset-1/3 z-10 w-1/3'>
                    <img className='hidden md:flex' src={logoone} alt="" />
                    {/* <a className='btn' href={myPDF} download="My_File.pdf"> Download Here </a> */}
                    <Link className='btn btn-ghost text-white border border-white' to={myPDF} target="_blank" download>RESUME</Link>
                    {/* <button>RESUME</button> */}
                </div>
            </div>

        </div>
    );
};

export default Carousel;