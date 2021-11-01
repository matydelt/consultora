import React from 'react'
import Logo from '../assets/img/buffet-buffet-law.png'
import ButtonsNav from '../../ButtonsNav/ButtonsNav';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav id="menu" className="col-12 col-xl-12">
            <ul className="widht_li row col-xxl-12 justify-content-evenly align-items-center border-bottom">
                <li className="col-xl-1">
                    <ButtonsNav link="#" text='Home' />
                </li>

                <li className="col-xl-1">
                    <ButtonsNav link="#" text='Nosotros' />
                </li>

                <img
                    src={Logo}
                    alt="Logo"
                    className="col-xl-1"
                />

                <li className="col-xl-1">
                    <a className="textDecoration" href="#contain_title_abogado">Nuestro Equipo</a>
                </li>

                <li className="col-xl-1">
                    <ButtonsNav link="/registro" text='Registrate Ahora' />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
