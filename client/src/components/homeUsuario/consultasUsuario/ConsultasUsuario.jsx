import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getConsultas, modificarTicket } from '../../../redux/actions';
import UsuarioNavBar from '../usuarioNavBar/UsuarioNavBar';

export default function ConsultasUsuario() {

    const dispatch = useDispatch();

    const { consultas, usuario } = useSelector((state) => state);


    useEffect(() => {
        dispatch(getConsultas());
    }, []);


    function efectuarPago(enlace) {
        console.log(enlace);
        dispatch(modificarTicket({ enlace }));
    };

    return (<>

        <UsuarioNavBar></UsuarioNavBar>

        <div className="container mt-5">


            <h1>Consultas realizadas</h1>
            <hr></hr>
        </div>


        <table className="table table-hover mt-5">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Mensaje</th>

                    <th>Respuesta</th>
                    <th>Estado</th>
                    <th>Link de pago</th>
                    <th>Notificar pago</th>
                </tr>
            </thead>
            <tbody>
                {
                    consultas?.filter(c => c.dni?.toString() === usuario.dni?.toString()).map(consulta => {

                        return (<>

                            <tr className="align-middle">
                                <td>
                                    <div className="text-muted">
                                        {new Date(consulta.createdAt).toLocaleTimeString()}
                                    </div>
                                    <div>
                                        {new Date(consulta.createdAt).toLocaleDateString()}
                                    </div>
                                </td>
                                <td className="w-25">{consulta.mensaje}</td>

                                {consulta.respuestaAbogado ?
                                    <td>{consulta.respuestaAbogado}</td>
                                    :
                                    <td className="text-muted">Aún no se ha respondido</td>
                                }

                                <td>
                                    {consulta.abogadoId ?
                                        <span className="badge bg-success">Aceptado</span>
                                        :
                                        <span className="badge bg-warning">En revisión</span>
                                    }
                                </td>

                                {
                                    !consulta.ticket ?
                                        <td className="text-muted">No hay enlance de pago</td>
                                        :
                                        consulta.ticket.estatus === 'pending'
                                            ?
                                            <td><a href={consulta.ticket.enlace} target="_blank">Enlace al pago</a></td>
                                            :
                                            <td className="text-success">La consulta fue abonada</td>
                                }

                                {
                                    <td>
                                        <button disabled={consulta.ticket?.estatus !== 'pending'} onClick={() => efectuarPago(consulta?.ticket?.enlace)} className={`btn btn-${consulta.ticket?.estatus === 'pending' ? 'success' : 'light text-muted'}`}>Notificar</button>
                                    </td>
                                }
                            </tr>


                        </>)
                    })

                }
            </tbody>
        </table>
    </>)
}