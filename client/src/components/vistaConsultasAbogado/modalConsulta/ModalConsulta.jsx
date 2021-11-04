import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import swal from "sweetalert"
import { deleteConsulta, getConsultas, setConsulta } from '../../../redux/actions';


export default function ModalConsulta({ consulta, usuario, modalId }) {

    let [respuesta, setRespuesta] = useState('');


    const dispatch = useDispatch();


    function confimarConsulta() {
        swal({
            title: "Confirmar",
            text: "¿Quiere tomar la consulta?",
            icon: "info",
            buttons: true,
            // dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    
                    
                    dispatch(setConsulta(consulta.id, usuario.abogado.id, respuesta)).then(() => {
                        dispatch(getConsultas());
                    })
                } else {
                }
            });
    }

    function eliminarConsulta() {
        swal({
            title: "Eliminar",
            text: "¿Quiere eliminar la consulta?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(deleteConsulta(consulta.id)).then(() => {
                        dispatch(getConsultas());
                    });
                    swal("La consulta fue eliminada", {
                        icon: "success",
                    });
                } else {
                }
            });
    }

    function modificarCampos(e) {
        setRespuesta(e.target.value)
    };


    return (<>
        <div className="modal fade" id={`modal${modalId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Detalle de la consulta</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body ">
                        <ul className="list-group">
                            <li className="list-group-item active"><span className="align-middle">Nombre: {consulta.nombre} {consulta.apellido} </span></li>
                        </ul>
                        <li className="list-group-item "><span>Teléfono: </span>{consulta.telefono}</li>
                        <li className="list-group-item "><span>Email: </span>{consulta.email}</li>
                        <li className="list-group-item "><span className="d-flex justify-content-center">
                            {consulta.mensaje}</span></li>
                    </div>


                    {!consulta.abogadoId ? <div>
                        <div className="bg-light border-top p-2 align-middle">
                            <div class="form-floating my-3 mx-1">
                                <textarea type="text" name="respuesta" onChange={modificarCampos} value={respuesta} class="form-control" id="respuesta" placeholder="Precio"></textarea>
                                <label htmlFor="respuesta">Escribir un mensaje al cliente</label>
                            </div>
                            <div class="form-floating my-3 mx-1">
                                <input type="number" class="form-control" id="precio" placeholder="Precio"></input>
                                <label htmlFor="precio">$ Ingresar precio de la consulta</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={eliminarConsulta}>Eliminar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={confimarConsulta}>Tomar consulta</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                        :
                        <div>
                            <div className="alert alert-warning">Esta consulta ya fue tomada</div>
                            <div className="modal-footer">
                            {/* <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={confimarConsulta}>Tomar consulta</button> */}
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={eliminarConsulta}>Eliminar</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                            </div>


                        </div>
                    }

                </div>
            </div>
        </div>
    </>)
}