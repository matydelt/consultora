import React from "react";
import CardBanner from "../../CardBanner/CardBanner";
import ImgCard from "../assets/img/imgLealtad.jpg";
import "./Banner.css";

const Banner = (props) => {
  const {
    containBanner,
    bannerContent,
    bannerTitle,
    title,
    cardFlex,
  } = props;
  return (
    <div className={containBanner}>
      <div className={bannerContent}>
        <div className={bannerTitle}>
          <h1 className="fw-bold">{title}</h1>
        </div>
        <div className={cardFlex}>
          <CardBanner nameStyle="card_banner" img={ImgCard} text="Leales" />
          <CardBanner nameStyle="card_banner" img={ImgCard} text="Leales" />
          <CardBanner nameStyle="card_banner" img={ImgCard} text="Leales" />
          <CardBanner nameStyle="card_banner" img={ImgCard} text="Leales" />
          <CardBanner nameStyle="card_banner" img={ImgCard} text="Leales" />
          <CardBanner nameStyle="card_banner" img={ImgCard} text="Leales" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
