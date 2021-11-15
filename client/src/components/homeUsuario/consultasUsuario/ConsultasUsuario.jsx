import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import { getConsultas, modificarTicket, mostartDetalleConsulta } from '../../../redux/actions';
import UsuarioNavBar from '../usuarioNavBar/UsuarioNavBar';
import DetalleConsulta from '../DetalleConsulta/DetalleConsulta';

export default function ConsultasUsuario() {

    const dispatch = useDispatch();

    const { consultas, usuario } = useSelector((state) => state);
    const [n_operacion, setN_Operacion] = useState('');
    const [ detalle, setDetalle ] = useState();

    useEffect(() => {
        dispatch(getConsultas());
    }, []);




    // function efectuarPago(enlace) {

    //           dispatch(modificarTicket({ enlace }));  

    //   }
    function efectuarPago(enlace) {
        swal({
            title: "Notificar pago de la consulta",
            text: "Si ya abonó la consulta puede proceder a notificarlo, ¿notificar el pago de la consulta?",
            icon: "warning",
            buttons: true,
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(modificarTicket({ enlace, n_operacion }))

                setTimeout(() => {
                    dispatch(getConsultas());

                }, 1000)


            }

        });
    }


     function setConsulta(consulta) {
         console.log("setConsulta", consulta)
        dispatch(mostartDetalleConsulta(consulta))
    }



    return (<>

        <UsuarioNavBar></UsuarioNavBar>

        <DetalleConsulta modalId={`modalConsultaDetalle`}></DetalleConsulta>


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

                    <th>Opciones</th>
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
                                        <input type="number" min="0" name="n_operacion" autoComplete="off" placeholder="1111111111" className="form-control" required onChange={(e) => { setN_Operacion(e.target.value) }} />
                                        <button disabled={consulta?.ticket?.estatus !== 'pending'} onClick={() => { efectuarPago(consulta.ticket?.enlace, n_operacion) }} className={`btn btn-${consulta.ticket?.estatus === 'pending' ? 'success' : 'light text-muted'}`}>Notificar</button>
                                    </td>
                                }
                                <td><button onClick={() => { setConsulta(consulta) }} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modalConsultaDetalle`}>
                                            Ver detalle
                                        </button></td>
                            </tr>
                            


                        </>)
                    })

                }
            </tbody>
        </table>
      
    </>)
}