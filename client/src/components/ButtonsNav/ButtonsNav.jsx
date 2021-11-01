import React from 'react'
import { Link } from 'react-router-dom';

const ButtonsNav = ({ link, text }) => {
    return (
        <>
            <Link
                className="textDecoration"
                to={link}
            >
                {text}
            </Link>
        </>
    )
}

export default ButtonsNav;
