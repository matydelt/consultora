import React from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import { filtrarMaterias, filtrarProvincias } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  const { materias, provincias } = useSelector((state) => state);
  

  const handleFilterMaterias = (e) => {
    dispatch(filtrarMaterias(e.target.value));
  };

  const handleFilterProvincias = (e) => {
    dispatch(filtrarProvincias(e.target.value));
  }

  return (
    <div>
      <Header />
      <Navbar />
      Materias:
      <select onChange={(e) => handleFilterMaterias(e)}>
        <option value="todas">Todas</option>
        {materias.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
      Provincias:
      <select onChange={(e) => handleFilterProvincias(e)}>
        <option value="todas">Todas</option>
        {provincias.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
    </div>
  );
};

export default HomePage;
