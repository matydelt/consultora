import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postConsulta } from "../../redux/actions/index";
import Navbar from "../home-page/Navbar/Navbar";
import "./FormCita.css";

export function validate(input) {
  let errors = {};
  if (!input.nombre) {
    errors.nombre = "nombre es requerido";
  } else if (!/\S+\S+/.test(input.nombre)) {
    errors.nombre = "nombre is invalid";
  }

  if (!input.apellido) {
    errors.apellido = "apellido es requerido";
  } else if (!/\S+\S+/.test(input.apellido)) {
    errors.apellido = "apellido is invalid";
  }

  // if (!input.telefono) {
  //   errors.telefono = "Teléfono es requerido";
  // } else if (/\n# $&:\n\t/.test(input.telefono)) {
  //   errors.telefono = "el Teléfono ingresado contiene errores";
  // }

  if (!input.email) {
    errors.email = "email is required";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "email is invalid";
  }

  if (!input.mensaje) {
    errors.mensaje = "Se debe escribir la consulta que desea realizar";
  } else if (input.mensaje === "") {
    errors.mensaje = "El texto se encuentra vacio";
  }
  return errors;
}

export default function FormCita() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({});
  const [error, setError] = useState({});

  const handleChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(error).length === 0) {
      dispatch(postConsulta(input));
      alert("consulta enviada con exito");
      setInput(" ");
    } else {
      alert("Hay campos que no se ingresaron correctamente por favor revise");
    }
  };

  return (<>

    <Navbar />

    <div className="container p-4 col-lg-6 col-md-6 col-sm-6 mx-auto">
      <div className="row">
        <form onSubmit={handleSubmit} className="card text-center form-group ">
          <div className="col align-self-center">
            <div className="card-body form-sign mt-2 row ">
              <div className="form-group mb-4 col-sm-5 ">
                <label className="form-label">Nombre</label>
                <input className="form-control form-control-sm." name="nombre" type="text" required onChange={handleChange} />
              </div>
            
              <div className="form-group col-sm-5">
                <label className="form-label">Apellido</label>
                <input className="form-control col-8" name="apellido" type="text" required onChange={handleChange} />
              </div>
            </div>
        
            <div className="card-body form-sign row">
              <div className="form-group mb-4 col-sm-5">
                <label className="form-label">DNI</label>
                <input min="0" className="form-control" name="dni" type="number" required onChange={handleChange} />
              </div>

              <div className="form-group col-sm-5">
                <label className="form-label">Teléfono</label>
                <input className="form-control" name="telefono" type="tel" required onChange={handleChange} />
              </div>
            </div>
        
            <div className="card-body form-sign col-sm-8">
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-control" type="email" name="email" required onChange={handleChange} />
              </div>
            </div>

            <div className="card-body form-sign">
              <div className="form-group">
                <label className="form-label">Mensaje</label>
                <textarea
                  className="form-control"
                  name="mensaje"
                  required
                  onChange={handleChange}>
                </textarea>
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-secondary mt-3">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>);
}
