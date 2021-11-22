import React from "react";
import "./Footer.css";
import LogoBlanco from "../../home-page/assets/img/logo-blacno-sin-fondo.png";


const Footer = () => {
  return (
    <footer class="Footer_homeAbogado">
      <div className="p_img_footer">
        <div>
          <img src={LogoBlanco} alt="Logo" />
          <p>BL</p>
        </div>
        <p className="p_grupo10">Grupo 10 - &copy; {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
};

export default Footer;
