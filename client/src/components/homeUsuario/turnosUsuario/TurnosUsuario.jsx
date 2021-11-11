import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UsuarioNavBar from '../usuarioNavBar/UsuarioNavBar';


export default function TurnosUsuario() {

    const { abogados } = useSelector(state => state)
    const [diasDisponibles, setDiasDisponibles] = useState([]);
    const [turnosDisponibles, setTurnosDisponibles] = useState([]);

    useEffect(() => {

    }, []);

    function seleccionarAbogado(e) {
        axios.get('/dias', { params: { abogadoId: e.target.value } }).then(({ data }) => {
            if (data.length) {
                setDiasDisponibles(data);
            } else {
                setDiasDisponibles([])
                setTurnosDisponibles([])
            }
        })
    };

    function seleccionarDia(e) {
        let { turnos } = JSON.parse(e.target.value);
        setTurnosDisponibles(turnos);
    };


    return (<>
        <UsuarioNavBar></UsuarioNavBar>


        <div className="container mt-5">


            <h1>Turnos</h1>
            <hr></hr>


            <div className="row mt-5">
                <div className="col-3">


                    <select className="form-select pointer" onChange={(e) => seleccionarAbogado(e)}>
                        <option value="-1">Seleccionar abogado</option>
                        {
                            abogados?.map(abogado => {
                                return <option value={abogado.abogado.id} >{abogado.firstName}</option>
                            })
                        }
                    </select>

                    {
                        diasDisponibles.length > 0 &&

                        <select name="" id="" className="form-select pointer mt-2" onChange={(e) => seleccionarDia(e)}>
                            <option value="-2">Seleccionar fecha</option>

                            {
                                diasDisponibles?.map(turnoDisp => {
                                    return <option value={JSON.stringify(turnoDisp)}>{new Date(turnoDisp.fecha).toLocaleDateString()}</option>
                                })
                            }
                        </select>
                    }

                </div>

                <div className="col">

                    {turnosDisponibles?.length > 0 ?

                        <ul className="list-group w-50">
                            {turnosDisponibles?.sort((a, b) => a.hora < b.hora ? -1 : (a.hora > b.hora ? 1 : 0)).map(turnoDisp => {
                                return <li className="list-group-item row p-3">
                                    <span className="bdg bg-light border shadow py-1">{turnoDisp.hora}</span>
                                    <label className="form-label my-2">Mensaje opcional para el abogado</label>
                                    <input type="text" className="form-control mb-2" />
                                    <button className="btn btn-primary">Confirmar</button>
                                </li>
                            })
                            }
                        </ul>

                        :

                        <h4 className="text-center">Seleccione un abogado para ver sus turnos</h4>
                        // <h4 className="text-center">No hay turnos disponibles</h4>
                    }

                </div>
            </div>
        </div>

    </>)

};