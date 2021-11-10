import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSiteMateria } from "../../../redux/actions";

const SiteMateria = () => {
  const materiaDerecho = useParams();

  const dispatch = useDispatch();

  let { abogados } = useSelector((state) => state);

  useEffect(() => {
      dispatch(getSiteMateria(materiaDerecho.materia))
  }, [dispatch, materiaDerecho.materia])


  console.log(abogados);

  if (materiaDerecho.materia === "Derecho Civil") {
    return (
    <div>
       <h2>Derecho Civil</h2>
       {
           abogados?.map((a, i) => (
               <div key={a.dni}>
                    <p>{a.firstName} {a.lastName}</p>
                    <img src={a.abogado.imagen} alt='Imagen Abogado' />
               </div>
           ))
       }
    </div>
    );
  }
  else if (materiaDerecho.materia === "Derecho Penal") {
    return <div>Derecho Penal</div>;
  }
  else if (materiaDerecho.materia === "Derecho Familia") {
      return <div>Derecho Familia</div>;
    }
    else if (materiaDerecho.materia === "Derecho Contencioso") {
        return <div>Derecho Contencioso</div>;
    }
    else if (materiaDerecho.materia === "Derecho Penal") {
      return <div>Derecho Penal</div>;
    }
    else if (materiaDerecho.materia === "Derecho Notarial") {
      return <div>Derecho Notarial</div>;
    }
    else if (materiaDerecho.materia === "Derecho Corporativo") {
      return <div>Derecho Corporativo</div>;
    }
    else if (materiaDerecho.materia === "Derecho Comercial") {
      return <div>Derecho Comercial</div>;
    }
    else if (materiaDerecho.materia === "Derecho Administrativo") {
      return <div>Derecho Administrativo</div>;
    }
    else if (materiaDerecho.materia === "Derecho Laboral") {
      return <div>Derecho Laboral</div>;
    }
};

export default SiteMateria;
