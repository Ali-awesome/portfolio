import React from 'react';
import Navbar from '../Shared/Navbar';
import Website from '../Website/Website';
import Carousel from './Carousel';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Website></Website>
        </div>
    );
};

export default Home;