import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { getSiteMateria } from "../../../redux/actions";
import SiteMateria from "./SiteMateria/SiteMateria";
import ButtonsNav from "../../ButtonsNav/ButtonsNav.jsx";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Logo from "../../home-page/assets/img/logo-blacno-sin-fondo.png";
import "./SiteMaterias.css";

const SiteMaterias = () => {
  const { materia } = useParams();
  const history = useHistory();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

  const dispatch = useDispatch();

  let { abogados } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getSiteMateria(materia));
    console.log(materia);
  }, [dispatch, materia]);
  console.log(abogados);

  if (materia === "Derecho Civil") {
    return (
      <div>
        <ButtonsNav nameClass="btn btn-primary" text="Volver" link="/" />
        <h2 className="text-center">Derecho Civil</h2>

        <div className="flex_materia">
          <div className="materia_site">
            {abogados?.map((a, i) => (
              <SiteMateria
                key={a.dni}
                firstName={a.firstName}
                lastName={a.lastName}
                img={a.abogado.imagen}
              />
            ))}
          </div>
          <div className="materia_site_text">
            <p>
              Nuestros expertos procuran que tu vida civíl esté alineada a las
              leyes, por lo que garantizamos la legislación correcta en cada
              situación civíl en que te encuentres muy perjudicado
            </p>
            <ButtonsNav link="#" text="Consultanos cuando quieras." />
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Penal") {
    return (
      <div>
        <ButtonsNav nameClass="btn btn-primary" text="Volver" link="/" />
        <h2>Derecho Penal</h2>
        <div className="flex_materia">
          <div className="materia_site">
            {abogados?.map((a, i) => (
              <SiteMateria
                key={a.dni}
                firstName={a.firstName}
                lastName={a.lastName}
                img={a.abogado.imagen}
              />
            ))}
          </div>
          <div className="materia_site_text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              quibusdam beatae cumque tenetur consectetur culpa mollitia dolorum
              eligendi illo minus? Blanditiis quae quis maiores ipsam dolorum
              distinctio consequatur unde error.
            </p>
            <ButtonsNav link="#" text="Consultanos cuando quieras." />
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Familia") {
    return (
      <div>
        <ButtonsNav nameClass="btn btn-primary" text="Volver" link="/" />
        <h2>Derecho Familia</h2>
        <div className="flex_materia">
          <div className="materia_site">
            {abogados?.map((a, i) => (
              <SiteMateria
                key={a.dni}
                firstName={a.firstName}
                lastName={a.lastName}
                img={a.abogado.imagen}
              />
            ))}
          </div>
          <div className="materia_site_text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              veniam eos. Ab, aspernatur dolor eum, a alias delectus expedita
              fuga illum id odit distinctio deleniti nihil reiciendis modi, quas
              iusto?
            </p>
            <ButtonsNav link="#" text="Consultanos cuando quieras." />
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Contencioso") {
    return (
      <div>
        <ButtonsNav nameClass="btn btn-primary" text="Volver" link="/" />
        <h2>Derecho Contencioso</h2>
        <div className="flex_materia">
          <div className="materia_site">
            {abogados?.map((a, i) => (
              <SiteMateria
                key={a.dni}
                firstName={a.firstName}
                lastName={a.lastName}
                img={a.abogado.imagen}
              />
            ))}
          </div>
          <div className="materia_site_text">
            <p>
              Nuestros expertos procuran que tu vida civíl esté alineada a las
              leyes, por lo que garantizamos la legislación correcta en cada
              situación civíl en que te encuentres muy perjudicado
            </p>
            <ButtonsNav link="#" text="Consultanos cuando quieras." />
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Penal") {
    return (
      <div>
        <ButtonsNav nameClass="btn btn-primary" text="Volver" link="/" />
        <h2>Derecho Penal</h2>
        <div className="flex_materia">
          <div className="materia_site">
            {abogados?.map((a, i) => (
              <SiteMateria
                key={a.dni}
                firstName={a.firstName}
                lastName={a.lastName}
                img={a.abogado.imagen}
              />
            ))}
          </div>
          <div className="materia_site_text">
            <p>
              Nuestros expertos procuran que tu vida civíl esté alineada a las
              leyes, por lo que garantizamos la legislación correcta en cada
              situación civíl en que te encuentres muy perjudicado
            </p>
            <ButtonsNav link="#" text="Consultanos cuando quieras." />
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Notarial") {
    return (
      <div>
        <ButtonsNav nameClass="btn btn-primary" text="Volver" link="/" />
        <h2>Derecho Notarial</h2>
        <div className="flex_materia">
          <div className="materia_site">
            {abogados?.map((a, i) => (
              <SiteMateria
                key={a.dni}
                firstName={a.firstName}
                lastName={a.lastName}
                img={a.abogado.imagen}
              />
            ))}
          </div>
          <div className="materia_site_text">
            <p>
              Nuestros expertos procuran que tu vida civíl esté alineada a las
              leyes, por lo que garantizamos la legislación correcta en cada
              situación civíl en que te encuentres muy perjudicado
            </p>
            <ButtonsNav link="#" text="Consultanos cuando quieras." />
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Corporativo") {
    return (
      <div>
        <ButtonsNav nameClass="btn btn-primary" text="Volver" link="/" />
        <h2>Derecho Corporativo</h2>
        <div className="flex_materia">
          <div className="materia_site">
            {abogados?.map((a, i) => (
              <SiteMateria
                key={a.dni}
                firstName={a.firstName}
                lastName={a.lastName}
                img={a.abogado.imagen}
              />
            ))}
          </div>
          <div className="materia_site_text">
            <p>
              Nuestros expertos procuran que tu vida civíl esté alineada a las
              leyes, por lo que garantizamos la legislación correcta en cada
              situación civíl en que te encuentres muy perjudicado
            </p>
            <ButtonsNav link="#" text="Consultanos cuando quieras." />
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Comercial") {
    return (
      <div>
        <ButtonsNav nameClass="btn btn-primary" text="Volver" link="/" />
        <h2>Derecho Comercial</h2>
        <div className="flex_materia">
          <div className="materia_site">
            {abogados?.map((a, i) => (
              <SiteMateria
                key={a.dni}
                firstName={a.firstName}
                lastName={a.lastName}
                img={a.abogado.imagen}
              />
            ))}
          </div>
          <div className="materia_site_text">
            <p>
              Nuestros expertos procuran que tu vida civíl esté alineada a las
              leyes, por lo que garantizamos la legislación correcta en cada
              situación civíl en que te encuentres muy perjudicado
            </p>
            <ButtonsNav link="#" text="Consultanos cuando quieras." />
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Administrativo") {
    return (
      <div>
        <ButtonsNav nameClass="btn btn-primary" text="Volver" link="/" />
        <h2>Derecho Administrativo</h2>
        <div className="flex_materia">
          <div className="materia_site">
            {abogados?.map((a, i) => (
              <SiteMateria
                key={a.dni}
                firstName={a.firstName}
                lastName={a.lastName}
                img={a.abogado.imagen}
              />
            ))}
          </div>
          <div className="materia_site_text">
            <p>
              Nuestros expertos procuran que tu vida civíl esté alineada a las
              leyes, por lo que garantizamos la legislación correcta en cada
              situación civíl en que te encuentres muy perjudicado
            </p>
            <ButtonsNav link="#" text="Consultanos cuando quieras." />
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Laboral") {
    return (
      <div>
        <ButtonsNav nameClass="btn btn-primary" text="Volver" link="/" />
        <h2>Derecho Laboral</h2>
        <div className="flex_materia">
          <div className="materia_site">
            {abogados?.map((a, i) => (
              <SiteMateria
                key={a.dni}
                firstName={a.firstName}
                lastName={a.lastName}
                img={a.abogado.imagen}
              />
            ))}
          </div>
          <div className="materia_site_text">
            <p>
              Nuestros expertos procuran que tu vida civíl esté alineada a las
              leyes, por lo que garantizamos la legislación correcta en cada
              situación civíl en que te encuentres muy perjudicado
            </p>
            <ButtonsNav link="#" text="Consultanos cuando quieras." />
          </div>
        </div>
      </div>
    );
  }
};

export default SiteMaterias;
