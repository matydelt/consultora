import React from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import { filtrarMaterias } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  const { materias } = useSelector((state) => state);

  const handleFilterMaterias = (e) => {
    dispatch(filtrarMaterias(e.target.value));
  };

  return (
    <div>
      <Header />
      <Navbar />
      Materias:
      <select onChange={(e) => handleFilterMaterias(e)}>
        <option value="todas">todas</option>
        {materias.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
    </div>
  );
};

export default HomePage;
