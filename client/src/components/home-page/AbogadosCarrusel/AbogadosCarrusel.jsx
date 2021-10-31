import React from 'react'
import Abogado from './Abogado/Abogado.jsx';
import abogados from './abogados.js';
import Carousel from 'react-elastic-carousel';
import './AbogadosCarrusel.css'

const AbogadosCarrusel = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },

    ]
    return (
        <div id="contain_title_abogado" className="flex_h2_carrusel container-fluid">
            <div>
                <h2>Nuestro Equipo</h2>
            </div>
            <div>
                <Carousel
                    className="contain_abogado align-items-center"
                    pagination={false}
                    // itemsToScroll={2} 
                    // itemsToShow={2}
                    breakPoints={breakPoints}
                >
                    {

                        abogados.map(({ name, lastName, url, message }, i) => (
                            <div className="me-3 col-xl-6 p-1 abogado" key={i}>
                                <Abogado
                                    name={name}
                                    lastName={lastName}
                                    message={message}
                                    img={url}
                                />
                            </div>

                        ))

                    }
                </Carousel>
            </div>
        </div>
    )
}

export default AbogadosCarrusel;