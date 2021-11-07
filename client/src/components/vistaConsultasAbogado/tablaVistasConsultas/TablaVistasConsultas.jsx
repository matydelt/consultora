import React from 'react';
import { useDispatch } from 'react-redux';
import { getTickets, mostrarConsulta } from '../../../redux/actions';


export default function TablaVistasConsultas({ consultas, usuario, aceptadas }) {

    const dispatch = useDispatch();

    function setConsulta(consulta) {
        dispatch(mostrarConsulta(consulta))
        console.log(consulta);
        dispatch(getTickets(consulta.ticketId))
    }

    return (<>
        <div className="my-4 mx-1">

            <table className="table table-hover table-striped">
                <thead className="text-center">
                    <tr>
                        <th scope="col">Estado</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mensaje</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        consultas.filter((c) => {
                            if (aceptadas) {
                                return c.abogadoId === usuario?.abogado?.id
                            } else {
                                return c
                            }
                        }).map((consulta, i) => {
                            return (
                                <tr key={i} className="text-center">
                                    {consulta.abogadoId ?
                                        <td className="align-middle"><span className="badge bg-warning">Aceptada</span></td>
                                        :
                                        <td className="align-middle"><span className="badge bg-success">Libre</span></td>
                                    }

                                    <td className="align-middle">{consulta.nombre}</td>
                                    <td className="align-middle">{consulta.apellido}</td>
                                    <td className="align-middle">{consulta.telefono}</td>
                                    <td className="align-middle">{consulta.email}</td>
                                    <td className="align-middle" className="w-50">{consulta.mensaje}</td>
                                    <td className="align-middle">

                                        <button onClick={() =>{ setConsulta(consulta)}} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modalConsulta`}>
                                            Ver detalle
                                        </button>
                                        {/* <ModalConsulta consulta={consulta} usuario={usuario} modalId={`modal${consulta.id}`} /> */}
                                    </td>
                                </tr>

                            );
                        })
                    }
                    <tr>
                    </tr>
                </tbody>
            </table>

        </div>




    </>)
}