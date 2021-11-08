import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  deleteConsulta,
  getConsultas,
  setConsulta,
  postTickets,
} from "../../../redux/actions";

let myModal = "";

export default function ModalConsulta({ usuario, modalId }) {
  let [respuesta, setRespuesta] = useState("");
  const dispatch = useDispatch();
  let consulta = useSelector((state) => state.consulta);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setRespuesta("");
  }, [consulta]);

  function confimarConsulta() {
    swal({
      title: "Confirmar",
      text: "¿Quiere aceptar la consulta?",
      icon: "info",
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        const titulo = `${
          usuario.firstName + " " + usuario.lastName
        } - Consulta ${consulta.id}`;
        console.log("id", consulta.id);
        dispatch(setConsulta(consulta.id, usuario.abogado.id, respuesta)).then(
          () => {
            if (price > 0) {
              dispatch(
                postTickets({
                  title: `${titulo}`,
                  unit_price: price,
                  consultaid: consulta.id,
                })
              );
            }
            dispatch(getConsultas());
          }
        );
      }
      setRespuesta("");
    });
  }

  function eliminarConsulta() {
    swal({
      title: "Eliminar",
      text: "¿Quiere eliminar la consulta?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteConsulta(consulta.id)).then(() => {
          dispatch(getConsultas());
        });
        swal("La consulta fue eliminada", {
          icon: "success",
        });
      }
      setRespuesta("");
    });
  }

  function modificarCampos(e) {
    setRespuesta(e.target.value);
  }

  return (
    <>
      <div
        className="modal fade"
        id={`${modalId}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Detalle de la consulta
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <ul className="list-group">
                <li className="list-group-item active">
                  <span className="align-middle">
                    Nombre: {consulta?.nombre} {consulta?.apellido}{" "}
                  </span>
                </li>
              </ul>
              <li className="list-group-item ">
                <span>Teléfono: </span>
                {consulta?.telefono}
              </li>
              <li className="list-group-item ">
                <span>Email: </span>
                {consulta?.email}
              </li>
              <li className="list-group-item ">
                <span>{consulta?.mensaje}</span>
              </li>
            </div>

            {!consulta?.abogadoId ? (
              <div>
                <div className="bg-light border-top p-2 align-middle">
                  <div class="form-floating my-3 mx-1">
                    <textarea
                      type="text"
                      name="respuesta"
                      onChange={modificarCampos}
                      value={respuesta}
                      class="form-control"
                      id="respuesta"
                      placeholder="Precio"
                    ></textarea>
                    <label htmlFor="respuesta">
                      Escribir un mensaje al cliente
                    </label>
                  </div>
                  <div class="form-floating my-3 mx-1">
                    <input
                      type="number"
                      class="form-control"
                      min="0"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      value={price}
                      id="precio"
                      placeholder="Precio"
                    ></input>
                    <label htmlFor="precio">
                      $ Ingresar precio de la consulta
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={eliminarConsulta}
                  >
                    Eliminar
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={confimarConsulta}
                  >
                    Aceptar consulta
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="alert alert-warning text-center">
                  <span className="fw-bold">Esta consulta ya fue aceptada</span>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={eliminarConsulta}
                  >
                    Eliminar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}