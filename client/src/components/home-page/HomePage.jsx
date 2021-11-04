import React from "react";
import AbogadosCarrusel from "./AbogadosCarrusel/AbogadosCarrusel";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import "./HomePage.css";
import Banner from "./Banner/Banner.jsx";
import Materia from "../Materia/Materia.jsx";
import About from "./About/About";

const HomePage = () => {
  return (
    <div className="height">
      <Header />
      <Navbar navId={"menu"} />
      <About
        titleAbout="Sobre nosotros"
        contendioAbout={[
          "Somos una consultoria Jurídica enfocada a la Solución civíl y promovemos la autonomía jurídica y legislativa constitucional y orgánica. Por tanto, nos enfocamos en el cumplimiento objetivo dictado como supremacía por LA CONSTITUCIÓN y no por subjetividades.",
          <br />,
          <br />,
          "Nos especializamos y diferenciamos por la capacidad de personificar cada caso en cada unos de nuestros clientes de persona natiral y jurídica. Somos unas de las consultorías mas solicitadas por la rápida respuesta ante cualquier consulta aún si no eres nuestro cliente.",
        ]}
        titleFilosofia="Nuestra Filosofía"
        contenidoFilosofia={[
          "Las leyes estan por encima de todo, esto es lo que hace cumplir la verdadera justicia que cada juridicción. Esto es nuestro lema y nuestro éxito ante cada caso que solucionamos de manera objetiva día tras día.",
          <br />,
          <br />,
          "Creeemos que la ley es el principio de la verdadera libertad a partir de los poderes estatales hasta cada ciudadano.",
        ]}
      />
      <div className="mb-5">
        <h3 className="text-center mb-4">Competencias</h3>
        <div className="row justify-content-evenly">
          <Materia nombre="Derecho Penal" />
          <Materia nombre="Derecho Civíl" />
          <Materia nombre="Derecho Corporativo" />
          <Materia nombre="Derecho Comercial" />
          <Materia nombre="Derecho Familiar" />
          <Materia nombre="Derecho Contencioso" />
          <Materia nombre="Derecho Administrativo" />
          <Materia nombre="Derecho Laboral" />
          <Materia nombre="Derecho Notarial" />
        </div>
      </div>
      <Banner
        containBanner={""}
        bannerContent={""}
        bannerTitle={""}
        title={"Competencias."}
        cardFlex={"card_flex"}
      />
      <AbogadosCarrusel />
    </div>
  );
};

export default HomePage;
