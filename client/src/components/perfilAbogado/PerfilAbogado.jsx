import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import Navbar from "../home-page/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAbogado } from "../../redux/actions/index";

import "./PerfilAbogado.css";

export default function PerfilAbogado() {
  const dispatch = useDispatch();
  const { abogado } = useSelector((state) => state);

  const history = useHistory();

  const { eMail } = useParams();

  useEffect(() => {
    dispatch(getAbogado(eMail));
  }, [eMail, dispatch]);

  return (
    <>
      <Navbar></Navbar>
      <div className="animate__animated animate__fadeIn animate__faster">
        <div className="">
          <div className="col bg-light">
            <button
              className="btn border-end border-bottom shadow mr-5 text-left text-muted"
              onClick={() => history.goBack()}
            >
              {" "}
              &lt; Volver
            </button>
            <div className="my-4">
              <img
                className="rounded mx-auto d-block shadow imagen-perfil-abogado"
                src={
                  abogado?.imagen ||
                  "https://www.caracteristicas.co/wp-content/uploads/2017/03/Derecho-e1564875517201.jpg"
                }
                alt=""
              />
              <h1 className="text-secondary text-center mt-4">
                {abogado.firstName} {abogado.lastName}
              </h1>
              <h5 className="color-titulo text-center p-4">Abogado</h5>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="mx-5 col">
              <p className="fs-4 text-muted">FormaciÃ³n y experiencia</p>
              <ul>
                <li className="text-muted my-1">{abogado.estudios}</li>
                <li className="text-muted my-1">{abogado.detalle}</li>
                <li className="text-muted my-1">{abogado.experiencia}</li>
              </ul>
            </div>
            <div className="col">
              <p className="fs-4 text-muted">Especialidades</p>
              <p className="fs-6  fw-bold text-secondary">
                Especialista en Derecho Laboral.
              </p>
              <hr className="w-25 text-black"></hr>
              <i className="bi bi-telephone"></i>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
