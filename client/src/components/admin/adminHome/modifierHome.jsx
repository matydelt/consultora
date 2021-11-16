import React, { useEffect, useState } from "react";
import About from "./about";
import Items from "./items";
import { useSelector, useDispatch } from "react-redux";
import { getAbout, getItems } from "../../../redux/actions/index";

export default function ModifierHome() {
  const { about } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [items, setItems] = useState([
    { descripcion: "hola", id: 1 },
    { descripcion: "chau", id: 2 },
  ]);

  useEffect(() => {
    dispatch(getAbout());
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div
      style={{
        width: "90%",
        paddingTop: "20px",
        paddingLeft: "60px",
        paddingRight: "20px",
      }}
    >
      <About about={about} />
      {items.map((item) => {
        return <Items item={item} />;
      })}
    </div>
  );
}
