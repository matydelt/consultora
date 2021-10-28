import { Link } from "react-router-dom";

import './CardAbogado.css';

export default function CardAbogado({abogado}) {

 
    return (<>

        <div className="col">
            <div className="card text-center shadow p-2 border-0 bg-light rounded tarjeta-abogado">
                <Link to={`perfil/${abogado.eMail.split('@')[0]}`}>
                    <img className="card-img-top" src="https://abogados.com.ar/assets/img/articulos/2021-04-01-025119-mar-im-690-south-latam-arg-e-chl-tr-programa-intensivo-de-formacion-para-abogados-corporativos-segunda-edicion.jpg" alt="https://abogados.com.ar/assets/img/articulos/2021-04-01-025119-mar-im-690-south-latam-arg-e-chl-tr-programa-intensivo-de-formacion-para-abogados-corporativos-segunda-edicion.jpg"></img>
                    <div className="card-body">
                        <h5 className="card-title text-black fs-6">{abogado.firstName} {abogado.lastName}</h5>
                        <p className="card-text text-muted">Abogado</p>
                    </div>
                </Link>

            </div>
        </div>

    </>)

}