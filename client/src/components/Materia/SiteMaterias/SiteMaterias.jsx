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
        <div className="body_site_materia">
          <div className="button_back_site_materia">
            <button onClick={() => history.goBack()}>Volver</button>
            <img src={Logo} alt="Logo" />
          </div>
          <h2 className="text-center">Derecho Civíl</h2>
          <div className="container_flex_materias_site">
            <div className="flex_materias_site">
              <Carousel
                pagination={false}
                className="carrusel_siteMaterias"
                breakPoints={breakPoints}
              >
                {abogados?.map((a) => {
                  return (
                    <Link key={a.dni} to={`/perfil/${a.slug}`}>
                      <SiteMateria
                        firstName={a.firstName}
                        lastName={a.lastName}
                        img={a.abogado.imagen}
                        abogado={abogados}
                      />
                    </Link>
                  );
                })}
              </Carousel>
            </div>

            <div className="contain_text_site_materia">
              <div>
                <p>
                  Nuestros expertos procuran que tu vida civíl esté alineada a
                  las leyes, por lo que garantizamos la legislación correcta en
                  cada situación civíl en que te encuentres muy perjudicado
                </p>
                <div className="button_consulta_site_materia">
                  <ButtonsNav link="#" text="Consultanos cuando quieras." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Penal") {
    return (
      <div>
        <div className="body_site_materia">
          <div className="button_back_site_materia">
            <button onClick={() => history.goBack()}>Volver</button>
          </div>
          <h2 className="text-center">Derecho Penal</h2>
          <div className="container_flex_materias_site">
            <div className="flex_materias_site">
              <Carousel
                pagination={false}
                className="carrusel_siteMaterias"
                breakPoints={breakPoints}
              >
                {abogados?.map((a) => {
                  return (
                    <Link key={a.dni} to={`/perfil/${a.slug}`}>
                      <SiteMateria
                        firstName={a.firstName}
                        lastName={a.lastName}
                        img={a.abogado.imagen}
                        abogado={abogados}
                      />
                    </Link>
                  );
                })}
              </Carousel>
            </div>

            <div className="contain_text_site_materia">
              <div>
                <p>
                  Nuestros expertos procuran que tu vida civíl esté alineada a
                  las leyes, por lo que garantizamos la legislación correcta en
                  cada situación civíl en que te encuentres muy perjudicado
                </p>
                <div className="button_consulta_site_materia">
                  <ButtonsNav link="#" text="Consultanos cuando quieras." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Familia") {
    return (
      <div>
        <div className="body_site_materia">
          <div className="button_back_site_materia">
            <button onClick={() => history.goBack()}>Volver</button>
          </div>
          <h2 className="text-center">Derecho Familia</h2>
          <div className="container_flex_materias_site">
            <div className="flex_materias_site">
              <Carousel
                pagination={false}
                className="carrusel_siteMaterias"
                breakPoints={breakPoints}
              >
                {abogados?.map((a) => {
                  return (
                    <Link key={a.dni} to={`/perfil/${a.slug}`}>
                      <SiteMateria
                        firstName={a.firstName}
                        lastName={a.lastName}
                        img={a.abogado.imagen}
                        abogado={abogados}
                      />
                    </Link>
                  );
                })}
              </Carousel>
            </div>

            <div className="contain_text_site_materia">
              <div>
                <p>
                  Nuestros expertos procuran que tu vida civíl esté alineada a
                  las leyes, por lo que garantizamos la legislación correcta en
                  cada situación civíl en que te encuentres muy perjudicado
                </p>
                <div className="button_consulta_site_materia">
                  <ButtonsNav link="#" text="Consultanos cuando quieras." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Contencioso") {
    return (
      <div>
        <div className="body_site_materia">
          <div className="button_back_site_materia">
            <button onClick={() => history.goBack()}>Volver</button>
          </div>
          <h2 className="text-center">Derecho Contencioso</h2>
          <div className="container_flex_materias_site">
            <div className="flex_materias_site">
              <Carousel
                pagination={false}
                className="carrusel_siteMaterias"
                breakPoints={breakPoints}
              >
                {abogados?.map((a) => {
                  return (
                    <Link key={a.dni} to={`/perfil/${a.slug}`}>
                      <SiteMateria
                        firstName={a.firstName}
                        lastName={a.lastName}
                        img={a.abogado.imagen}
                        abogado={abogados}
                      />
                    </Link>
                  );
                })}
              </Carousel>
            </div>

            <div className="contain_text_site_materia">
              <div>
                <p>
                  Nuestros expertos procuran que tu vida civíl esté alineada a
                  las leyes, por lo que garantizamos la legislación correcta en
                  cada situación civíl en que te encuentres muy perjudicado
                </p>
                <div className="button_consulta_site_materia">
                  <ButtonsNav link="#" text="Consultanos cuando quieras." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Notarial") {
    return (
      <div>
        <div className="body_site_materia">
          <div className="button_back_site_materia">
            <button onClick={() => history.goBack()}>Volver</button>
          </div>
          <h2 className="text-center">Derecho Notarial</h2>
          <div className="container_flex_materias_site">
            <div className="flex_materias_site">
              <Carousel
                pagination={false}
                className="carrusel_siteMaterias"
                breakPoints={breakPoints}
              >
                {abogados?.map((a) => {
                  return (
                    <Link key={a.dni} to={`/perfil/${a.slug}`}>
                      <SiteMateria
                        firstName={a.firstName}
                        lastName={a.lastName}
                        img={a.abogado.imagen}
                        abogado={abogados}
                      />
                    </Link>
                  );
                })}
              </Carousel>
            </div>

            <div className="contain_text_site_materia">
              <div>
                <p>
                  Nuestros expertos procuran que tu vida civíl esté alineada a
                  las leyes, por lo que garantizamos la legislación correcta en
                  cada situación civíl en que te encuentres muy perjudicado
                </p>
                <div className="button_consulta_site_materia">
                  <ButtonsNav link="#" text="Consultanos cuando quieras." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Corporativo") {
    return (
      <div>
        <div className="body_site_materia">
          <div className="button_back_site_materia">
            <button onClick={() => history.goBack()}>Volver</button>
          </div>
          <h2 className="text-center">Derecho Corporativo</h2>
          <div className="container_flex_materias_site">
            <div className="flex_materias_site">
              <Carousel
                pagination={false}
                className="carrusel_siteMaterias"
                breakPoints={breakPoints}
              >
                {abogados?.map((a) => {
                  return (
                    <Link key={a.dni} to={`/perfil/${a.slug}`}>
                      <SiteMateria
                        firstName={a.firstName}
                        lastName={a.lastName}
                        img={a.abogado.imagen}
                        abogado={abogados}
                      />
                    </Link>
                  );
                })}
              </Carousel>
            </div>

            <div className="contain_text_site_materia">
              <div>
                <p>
                  Nuestros expertos procuran que tu vida civíl esté alineada a
                  las leyes, por lo que garantizamos la legislación correcta en
                  cada situación civíl en que te encuentres muy perjudicado
                </p>
                <div className="button_consulta_site_materia">
                  <ButtonsNav link="#" text="Consultanos cuando quieras." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Comercial") {
    return (
      <div>
        <div className="body_site_materia">
          <div className="button_back_site_materia">
            <button onClick={() => history.goBack()}>Volver</button>
          </div>
          <h2 className="text-center">Derecho Comercial</h2>
          <div className="container_flex_materias_site">
            <div className="flex_materias_site">
              <Carousel
                pagination={false}
                className="carrusel_siteMaterias"
                breakPoints={breakPoints}
              >
                {abogados?.map((a) => {
                  return (
                    <Link key={a.dni} to={`/perfil/${a.slug}`}>
                      <SiteMateria
                        firstName={a.firstName}
                        lastName={a.lastName}
                        img={a.abogado.imagen}
                        abogado={abogados}
                      />
                    </Link>
                  );
                })}
              </Carousel>
            </div>

            <div className="contain_text_site_materia">
              <div>
                <p>
                  Nuestros expertos procuran que tu vida civíl esté alineada a
                  las leyes, por lo que garantizamos la legislación correcta en
                  cada situación civíl en que te encuentres muy perjudicado
                </p>
                <div className="button_consulta_site_materia">
                  <ButtonsNav link="#" text="Consultanos cuando quieras." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Administrativo") {
    return (
      <div>
        <div className="body_site_materia">
          <div className="button_back_site_materia">
            <button onClick={() => history.goBack()}>Volver</button>
          </div>
          <h2 className="text-center">Derecho Administrativo</h2>
          <div className="container_flex_materias_site">
            <div className="flex_materias_site">
              <Carousel
                pagination={false}
                className="carrusel_siteMaterias"
                breakPoints={breakPoints}
              >
                {abogados?.map((a) => {
                  return (
                    <Link key={a.dni} to={`/perfil/${a.slug}`}>
                      <SiteMateria
                        firstName={a.firstName}
                        lastName={a.lastName}
                        img={a.abogado.imagen}
                        abogado={abogados}
                      />
                    </Link>
                  );
                })}
              </Carousel>
            </div>

            <div className="contain_text_site_materia">
              <div>
                <p>
                  Nuestros expertos procuran que tu vida civíl esté alineada a
                  las leyes, por lo que garantizamos la legislación correcta en
                  cada situación civíl en que te encuentres muy perjudicado
                </p>
                <div className="button_consulta_site_materia">
                  <ButtonsNav link="#" text="Consultanos cuando quieras." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (materia === "Derecho Laboral") {
    return (
      <div>
        <div className="body_site_materia">
          <div className="button_back_site_materia">
            <button onClick={() => history.goBack()}>Volver</button>
          </div>
          <h2 className="text-center">Derecho Laboral</h2>
          <div className="container_flex_materias_site">
            <div className="flex_materias_site">
              <Carousel
                pagination={false}
                className="carrusel_siteMaterias"
                breakPoints={breakPoints}
              >
                {abogados?.map((a) => {
                  return (
                    <Link key={a.dni} to={`/perfil/${a.slug}`}>
                      <SiteMateria
                        firstName={a.firstName}
                        lastName={a.lastName}
                        img={a.abogado.imagen}
                        abogado={abogados}
                      />
                    </Link>
                  );
                })}
              </Carousel>
            </div>

            <div className="contain_text_site_materia">
              <div>
                <p>
                  Nuestros expertos procuran que tu vida civíl esté alineada a
                  las leyes, por lo que garantizamos la legislación correcta en
                  cada situación civíl en que te encuentres muy perjudicado
                </p>
                <div className="button_consulta_site_materia">
                  <ButtonsNav link="#" text="Consultanos cuando quieras." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SiteMaterias;
