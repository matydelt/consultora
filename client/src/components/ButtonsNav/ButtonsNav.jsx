import React from 'react'
import { Link } from 'react-router-dom';

const ButtonsNav = ({ link, text, nameClass }) => {
    return (
        <>
            <Link
                className={nameClass}
                to={link}
            >
                {text}
            </Link>
        </>
    )
}

export default ButtonsNav;
