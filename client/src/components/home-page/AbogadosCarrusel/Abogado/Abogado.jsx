import React from 'react'
import ButtonsNav from '../../../ButtonsNav/ButtonsNav';

const Abogado = ({ name, lastName, img, message }) => {
    return (
        <>
            <div>
                <div className="img_abogado">
                    <img className="card-img-top" src={img} alt={name} />
                </div>
                <div className="text_equipo">
                    <p>{name} {lastName}</p>
                    <p>"{message}"</p>
                </div>
            </div>
            <div className="button_ver_mas">
                <ButtonsNav link="#" className="btn " text="Ver mas" />
            </div>
        </>
    )
}

export default Abogado;
