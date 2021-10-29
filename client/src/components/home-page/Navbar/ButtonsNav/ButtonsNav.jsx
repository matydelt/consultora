import React from 'react'
import { Link } from 'react-router-dom';

const ButtonsNav = ({ text }) => {
    return (
        <li className="col-xl-1 ">
            <Link
                className="textDecoration"
                to="#"
            >
                {text}
            </Link>
        </li>
    )
}

export default ButtonsNav;
