import React from 'react'
import { Link } from 'react-router-dom';
import Logo  from '../assets/img/buffet-buffet-law.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav id="menu" className="col-12 col-xl-12">
            <ul className="widht_li row col-xxl-12 justify-content-evenly align-items-center border-bottom">
                <li className="col-xl-1 ">
                    <Link
                        className="textDecoration"
                        to="#"
                    >
                        Home
                    </Link>
                </li>
                <li className="col-xl-1 ">
                    <Link
                        className="  textDecoration"
                        to="#"
                    >
                        Sobre Nosotros
                    </Link>
                </li>

                <img 
                src={Logo} 
                alt="Logo"
                className="col-xl-1"
                />
                
                <li className="col-xl-1 ">
                    <Link
                        className=" textDecoration"
                        to="#"
                    >
                        Nuestro Equipo
                    </Link>
                </li>

                <li className="col-xl-4 ">
                    <Link
                        className="textDecoration"
                        to="#"
                    >
                        Registrate Ahora
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
