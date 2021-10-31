import React, { useEffect } from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import {
  filtrarMaterias,
  filtrarProvincias,
  getProvincias,
  getMaterias,
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Materia from "../Materia/Materia";
import "../Materia/Materia.css";

const HomePage = () => {
  const dispatch = useDispatch();

  const { materias, provincias } = useSelector((state) => state);

  const handleFilterMaterias = (e) => {
    dispatch(filtrarMaterias(e.target.value));
  };

  const handleFilterProvincias = (e) => {
    dispatch(filtrarProvincias(e.target.value));
  };

  useEffect(() => {
    dispatch(getMaterias());
    dispatch(getProvincias());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Navbar />
      Materias:
      <select onChange={(e) => handleFilterMaterias(e)}>
        <option value="todas">Todas</option>
        {materias?.map((e, index) => (
          <option key={index} value={e.nombre}>
            {e.nombre}
          </option>
        ))}
      </select>
      Provincias:
      <select onChange={(e) => handleFilterProvincias(e)}>
        <option value="todas">Todas</option>
        {provincias?.map((e, index) => (
          <option key={index} value={e.nombre}>
            {e.nombre}
          </option>
        ))}
      </select>
      <div className="materias-container">
        {materias?.map((materia) => (
          <Materia key={materia.id} nombre={materia.nombre} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
