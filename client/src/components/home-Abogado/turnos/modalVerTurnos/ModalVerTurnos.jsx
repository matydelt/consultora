import React from 'react';
import { useSelector } from 'react-redux';

export default function ModalVerTurnos() {

    const { dia } = useSelector(state => state);



    return (<>

        <div class="modal fade" id="modalVerTurnos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <th>Datos</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    dia.turnos?.map(turno => {

                                        return < tr >
                                            <td>{turno.hora}</td>
                                            <td>{turno?.cliente?.persona?.firstName} {turno?.cliente?.persona?.lastName}</td>
                                        </tr>

                                    })
                                }
                            </tbody>

                        </table>



                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>

    </>)

}