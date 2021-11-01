import React, { useEffect, useState } from 'react'
import Logo from '../assets/img/buffet-buffet-law.png'
import ButtonsNav from '../../ButtonsNav/ButtonsNav';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Navbar.css'
const Navbar = () => {

    let usuario = useSelector(state => state.usuario);

    return (
        <nav id="menu" className="col-12 col-xl-12">
            <ul className="widht_li row col-xxl-12 justify-content-evenly align-items-center border-bottom">
                <li className="col-xl-1">
                    <Link to="/">
                        Home
                    </Link>
                    {/* <ButtonsNav link="#" text='Home' /> */}
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
                    {/* <a className="textDecoration" href="#contain_title_abogado">Nuestro Equipo</a> */}
                    <Link to="/abogados">
                        <span className="textDecoration">Nuestro Equipo</span>
                    </Link>
                </li>

                {usuario.firstName ?
                    <li>
                        {/* <Link to="/modificar-perfil">
                            {firstName}
                        </Link> */}
                        <div class="dropdown">
                            <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {usuario.firstName}
                            </a>
                            {/* { (usuario.dataValues.abogado.estudios || usuario.abogado.estudios) && <ul class="dropdown-menu bg-light shadow border-0" aria-labelledby="dropdownMenuButton1"> */}
                            { <ul class="dropdown-menu bg-light shadow border-0" aria-labelledby="dropdownMenuButton1">
                                {/* <span class="dropdown-item pointer" href="#">Panel</span> */}
                                <Link to="/user/abogado">
                                    <span class="dropdown-item pointer" >Panel</span>
                                </Link>
                                <Link to="/modificar-perfil">
                                    <span class="dropdown-item pointer" >Perfil</span>
                                </Link>

                                <span class="dropdown-item pointer" href="#">Cerrar sesión</span>
                            </ul>}
                        </div>
                    </li>
                    :
                    <li className="col-xl-1">
                        <ButtonsNav link="#" text='Registrate Ahora' />
                    </li>
                }
            </ul>
        </nav>
    )
}

export default Navbar;
