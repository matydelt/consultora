import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSiteMateria } from "../../../redux/actions";

const SiteMateria = () => {
  const { materia } = useParams();

  const dispatch = useDispatch();

  let { abogados } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getSiteMateria(materia));
  }, [dispatch, materia]);

  console.log(abogados);

  if (materia === "Derecho Civil") {
    return (
      <div>
        <h2>Derecho Civil</h2>
        {abogados?.map((a, i) => (
          <div key={a.dni}>
            <p>
              {a.firstName} {a.lastName}
            </p>
            <img src={a.abogado.imagen} alt="Imagen Abogado" />
          </div>
        ))}
      </div>
    );
  } else if (materia === "Derecho Penal") {
    return (
      <div>
        <h2>Derecho Penal</h2>
        {abogados?.map((a, i) => (
          <div key={a.dni}>
            <p>
              {a.firstName} {a.lastName}
            </p>
            <img src={a.abogado.imagen} alt="Imagen Abogado" />
          </div>
        ))}
      </div>
    );
  } else if (materia === "Derecho Familia") {
    return (
      <div>
        <h2>Derecho Familia</h2>
        {abogados?.map((a, i) => (
          <div key={a.dni}>
            <p>
              {a.firstName} {a.lastName}
            </p>
            <img src={a.abogado.imagen} alt="Imagen Abogado" />
          </div>
        ))}
      </div>
    );
  } else if (materia === "Derecho Contencioso") {
    return (
      <div>
        <h2>Derecho Contencioso</h2>
        {abogados?.map((a, i) => (
          <div key={a.dni}>
            <p>
              {a.firstName} {a.lastName}
            </p>
            <img src={a.abogado.imagen} alt="Imagen Abogado" />
          </div>
        ))}
      </div>
    );
  } else if (materia === "Derecho Penal") {
    return (
      <div>
        <h2>Derecho Penal</h2>
        {abogados?.map((a, i) => (
          <div key={a.dni}>
            <p>
              {a.firstName} {a.lastName}
            </p>
            <img src={a.abogado.imagen} alt="Imagen Abogado" />
          </div>
        ))}
      </div>
    );
  } else if (materia === "Derecho Notarial") {
    return (
      <div>
        <h2>Derecho Notarial</h2>
        {abogados?.map((a, i) => (
          <div key={a.dni}>
            <p>
              {a.firstName} {a.lastName}
            </p>
            <img src={a.abogado.imagen} alt="Imagen Abogado" />
          </div>
        ))}
      </div>
    );
  } else if (materia === "Derecho Corporativo") {
    return (
      <div>
        <h2>Derecho Corporativo</h2>
        {abogados?.map((a, i) => (
          <div key={a.dni}>
            <p>
              {a.firstName} {a.lastName}
            </p>
            <img src={a.abogado.imagen} alt="Imagen Abogado" />
          </div>
        ))}
      </div>
    );
  } else if (materia === "Derecho Comercial") {
    return (
      <div>
        <h2>Derecho Comercial</h2>
        {abogados?.map((a, i) => (
          <div key={a.dni}>
            <p>
              {a.firstName} {a.lastName}
            </p>
            <img src={a.abogado.imagen} alt="Imagen Abogado" />
          </div>
        ))}
      </div>
    );
  } else if (materia === "Derecho Administrativo") {
    return (
      <div>
        <h2>Derecho Administrativo</h2>
        {abogados?.map((a, i) => (
          <div key={a.dni}>
            <p>
              {a.firstName} {a.lastName}
            </p>
            <img src={a.abogado.imagen} alt="Imagen Abogado" />
          </div>
        ))}
      </div>
    );
  } else if (materia === "Derecho Laboral") {
    return (
      <div>
        <h2>Derecho Laboral</h2>
        {abogados?.map((a, i) => (
          <div key={a.dni}>
            <p>
              {a.firstName} {a.lastName}
            </p>
            <img src={a.abogado.imagen} alt="Imagen Abogado" />
          </div>
        ))}
      </div>
    );
  }
};

export default SiteMateria;
