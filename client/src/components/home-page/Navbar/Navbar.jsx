import React from 'react'
import Logo  from '../assets/img/buffet-buffet-law.png'
import ButtonsNav from './ButtonsNav/ButtonsNav';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav id="menu" className="col-12 col-xl-12">
            <ul className="widht_li row col-xxl-12 justify-content-evenly align-items-center border-bottom">                
                <ButtonsNav text='Home'/>
                <ButtonsNav text='Nosotros'/>
                <img 
                src={Logo} 
                alt="Logo"
                className="col-xl-1"
                />                
                <ButtonsNav text='Nuestro Equipo'/>
                <ButtonsNav text='Registrate Ahora'/>
            </ul>
        </nav>
    )
}

export default Navbar;
