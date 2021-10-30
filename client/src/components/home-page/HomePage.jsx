import React from 'react'
import AbogadosCarrusel from './AbogadosCarrusel/AbogadosCarrusel';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

const HomePage = () => {
    return (
        <div className="height">
            <Header />
            <Navbar />
            <AbogadosCarrusel/>
        </div>
    )
}

export default HomePage;
