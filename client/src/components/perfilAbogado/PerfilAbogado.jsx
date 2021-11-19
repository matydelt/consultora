import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBarGeneral from "../NavBarGeneral/NavBarGeneral";

import "./PerfilAbogado.css";

export default function PerfilAbogado() {
  const [abogado, setAbogado] = useState({});

  const { slug } = useParams();

  useEffect(() => {
    const getAbogado = () => {
      // return axios.get(`/${eMail}@gmail.com`).then(({ data }) => {
      return axios.get(`abogado/${slug}`).then(({ data }) => {
        setAbogado(data);
      });
    };
    getAbogado();
  }, [slug]);

  return (
    <>
      <div className="animate__animated animate__fadeIn animate__faster">
        <NavBarGeneral />
        <div className="bg_perfil_slug">
          <div className="">
            <h1 className="text-secondary text-center mt-4">
              {abogado.firstName} {abogado.lastName}
            </h1>
            <img
              className="rounded mx-auto d-block shadow imagen-perfil-abogado"
              src={
                abogado?.imagen ||
                "https://www.caracteristicas.co/wp-content/uploads/2017/03/Derecho-e1564875517201.jpg"
              }
              alt=""
            />
          </div>
        </div>
        <h5 className="color-titulo text-center p-4">Abogado</h5>

        <div className="text-center">
          {abogado.provincias?.map((provincia) => {
            return (
              <span key={provincia.nombre} className="text-muted">
                {provincia.nombre}{" "}
                <span
                  hidden={
                    abogado.provincias.length - 1 ===
                    abogado.provincias.indexOf(provincia)
                  }
                >
                  {" "}
                  |{" "}
                </span>{" "}
              </span>
            );
          })}
        </div>

        <div className="container">
          <div className="row mt-4">
            <div className="mx-5 col">
              <p className="fs-4 text-muted">Formación y experiencia</p>
              <ul>
                <li className="text-muted my-1">{abogado.estudios}</li>
                <li className="text-muted my-1">{abogado.detalle}</li>
                <li className="text-muted my-1">{abogado.experiencia}</li>
              </ul>
            </div>

            <div className="col">
              <p className="fs-4 text-muted">Especialidades</p>
              {/* <p className="fs-6  fw-bold text-secondary">Especialista en Derecho Laboral.</p> */}
              <hr className="w-25 text-black"></hr>

              {abogado.materias?.map((materia) => {
                return (
                  <p
                    key={materia.nombre}
                    className="fs-6  fw-bold text-secondary"
                  >
                    {materia.nombre}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
