import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function TurnosAbogado() {
  const [dias, setDias] = useState([]);

  const { usuario } = useSelector((state) => state);

  const [form, setForm] = useState({
    fecha: "",
    nota: "",
    turnos: [],
  });

  const { fecha, nota, turnos } = form;

  useEffect(() => {
    console.log("asdsad");
    getDias();
  }, []);

  function getDias() {
    axios.get("/dias").then(({ data }) => {
      setDias(data);
    });
  }

  function handleForm(e) {
    if (e.target.className.includes("clase-turno")) {
      console.log("e.target.name");
      let copiaTurnos = [...turnos];
      copiaTurnos[Number(e.target.dataset.id)].hora = e.target.value;
      setForm({ ...form }, copiaTurnos);
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  }

  function submitForm(e) {
    e.preventDefault();

    axios
      .post("/dia", { form, abogadoId: usuario.abogado.id })
      .then(() => {
        toast.success("Día añadido");
      })
      .then(() => {
        getDias();
      })
      .catch((err) => toast.error("No se pudo crear los turnos"));
  }

  function añadirTurno() {
    turnos.push({ hora: "" });
    setForm({ ...form }, turnos);
  }

  function quitarTurno(i) {
    turnos.splice(i, 1);
    setForm({ ...form }, turnos);
  }

  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form onSubmit={(e) => submitForm(e)}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Turnos
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="row">
                  <div className="col-auto">
                    <label className="col-form-label">
                      Seleccionar fecha de los turnos
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="date"
                      name="fecha"
                      value={fecha}
                      className="form-control pointer"
                      onChange={(e) => handleForm(e)}
                    />
                  </div>
                </div>

                <label className="form-label mt-2">Notas: </label>
                <textarea
                  type="text"
                  name="nota"
                  value={nota}
                  className="form-control"
                  onChange={(e) => handleForm(e)}
                />

                <hr />

                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-xs btn-primary"
                    onClick={añadirTurno}
                  >
                    + Nuevo turno
                  </button>
                </div>

                {turnos?.map((turno, i) => {
                  return (
                    <div className="row my-3">
                      <div className="col">
                        <label className="col-form-label">
                          {" "}
                          Turno {i + 1}{" "}
                        </label>
                      </div>
                      <div className="col-auto">
                        <input
                          className="form-control pointer clase-turno"
                          type="time"
                          data-id={i}
                          value={turnos[i].hora}
                          onChange={handleForm}
                        ></input>
                      </div>
                      <span
                        className="col-1 mt-1 text-danger pointer"
                        onClick={() => quitarTurno(i)}
                      >
                        {" "}
                        x{" "}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button type="submit" class="btn btn-primary">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="container mt-5">
        <h1>Turnos</h1>
        <hr></hr>

        <div>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Agregar día
          </button>
          {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Crear plantilla
                </button> */}
        </div>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cantidad</th>
              <th>Notas</th>
              <th className="text-center">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {dias?.map((dia) => {
              return (
                <>
                  <tr>
                    <td>{new Date(dia.fecha).toLocaleDateString()}</td>
                    <td>{dia.turnos?.length}</td>
                    <td>{dia.nota}</td>
                    <td className="text-center">
                      <button className="btn btn-primary">Ver turnos</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
