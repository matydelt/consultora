import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router"


import './PerfilAbogado.css';

export default function PerfilAbogado({ location }) {

    const [abogado, setAbogado] = useState({});

    const history = useHistory();

    const { nombreAbogado } = useParams();

    useEffect(() => {

        getAbogado();

    }, []);


    const getAbogado = () => {
        
        return axios.get(`http://localhost:3000/abogado/${nombreAbogado}@gmail.com`).then(({ data }) => {
            setAbogado(data);
        });

    };


    return (<>


        <div className="animate__animated animate__fadeIn animate__faster">

            <div className="row">

                <div className="col bg-light">
                    <button className="btn border-end border-bottom shadow mr-5 text-left text-muted" onClick={() => history.goBack()}> &lt; Volver</button>

                    <div className="my-5">
                        <img className="rounded mx-auto d-block shadow" width="450" src="https://abogados.com.ar/assets/img/articulos/2021-04-01-025119-mar-im-690-south-latam-arg-e-chl-tr-programa-intensivo-de-formacion-para-abogados-corporativos-segunda-edicion.jpg" alt="" />
                        <h1 className="text-secondary text-center mt-3">{abogado.firstName} {abogado.lastName}</h1>
                        <h5 className="color-titulo text-center mt-3">Abogado</h5>
                    </div>

                </div>
            </div>

            <div className="container">

                <div className="row mt-4">

                    <div className="mx-5 col">
                        <p className="fs-4 text-muted">Formación y experiencia</p>
                        <ul>
                            <li className="text-muted">Abogado (Universidad de Buenos Aires). Especialista en Derecho Laboral y Recursos Humanos (UCA).</li>
                            <li className="text-muted">Intervino como representante ante la Asociación Internacional de Abogados Laboralistas (IusLaboris – Venecia – Italia, mayo 2003).</li>
                            <li className="text-muted">Participa activamente en la gestión de litigios transnacionales, con amplia experiencia en USA, donde ha sido convocado como testigo experto sobre el Derecho Laboral Argentino y ha gestionado litigios complejos.</li>
                        </ul>
                    </div>

                    <div className="col">
                        <p className="fs-4 text-muted">Especialidades</p>
                        <p className="fs-6  fw-bold text-secondary">Especialista en Derecho Laboral.</p>
                        <hr className="w-25 text-black"></hr>
                        <i className="bi bi-telephone"></i><p>asdsa</p>
                    </div>
                </div>

            </div>

        </div>

    </>)
}