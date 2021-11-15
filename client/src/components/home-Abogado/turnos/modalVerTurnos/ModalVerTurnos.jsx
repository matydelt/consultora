import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { actionCancelarTurno, getDia } from '../../../../redux/actions';

export default function ModalVerTurnos() {

    const { dia } = useSelector(state => state);

    // const dispatch = useDispatch();



    // function cancelarTurno(turnoId) {
    //     swal({
    //         title: "Cancelar y eliminar",
    //         text: "El turno se eliminará y el cliente será notificado por email ¿Continuar?",
    //         icon: "warning",
    //         buttons: true,
    //     }
    //     ).then((willDelete) => {
    //         if (willDelete) {
    //             dispatch(actionCancelarTurno(turnoId, true));
    //             toast.success('El turno fue cancelado');
    //             dispatch(getDia(dia?.dia?.id));
    //         }
    //     }).catch(err => toast.error('Ocurrió un problema al cancelar el turno'));
    // };



    return (<>
        <div class="modal fade" id="modalVerTurnos" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Turnos del <b>{new Date(dia?.dia?.fecha).toLocaleDateString()}</b></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <table className="table">

                            <thead>
                                <tr>
                                    <th>Hora</th>
                                    <th className="w-75 text-center">Datos</th>
                                    {/* <td>Opciones</td> */}
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    dia.turnos?.map(turno => {

                                        return < tr key={turno.id}>
                                            <td>{turno.hora}</td>
                                            <td className="text-center">{turno?.cliente?.persona?.firstName} {turno?.cliente?.persona?.lastName}</td>
                                            {/* <td>
                                                <button className="btn btn-danger btn-sm" disabled={!turno.cliente} onClick={() => cancelarTurno(turno.id)}>Cancelar</button>
                                            </td> */}
                                        </tr>

                                    })
                                }
                            </tbody>

                        </table>



                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        {/* <button type="button" class="btn btn-primary">Guardar</button> */}
                    </div>
                </div>
            </div>
        </div>

    </>)

}