import React from "react";
import AbogadosCarrusel from "./AbogadosCarrusel/AbogadosCarrusel";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import "./HomePage.css";
import BannerDiagonal from "./BannerDiagonal/BannerDiagonal";

const HomePage = () => {
  return (
    <div className="height">
      <Header />
      <Navbar navId={"menu"} />
      {/* <BannerDiagonal
        contenedorBannerDiagonal={"contenedor_banner_diagonal"} 
        bannerDirection={"banner_diagonal_left"}
        containBanner={"banner_contain_left"}
        bannerContent={"banner_content_left"}
        bannerTitle={"text_banner_title"}
        title={"Somos"}
        cardFlex={"card_flex"}
      /> */}
      <BannerDiagonal
        contenedorBannerDiagonal={"contenedor_banner_diagonal"}
        bannerDirection={"banner_diagonal_left"}
        containBanner={"banner_contain_left"}
        bannerContent={"banner_content_left"}
        bannerTitle={"text_banner_title"}
        title={"Somos"}
        cardFlex={"card_flex"}
      />
      <AbogadosCarrusel />
    </div>
  );
};

export default HomePage;
