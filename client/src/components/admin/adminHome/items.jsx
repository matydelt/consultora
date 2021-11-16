import React, { useState } from "react";
import { deleteItem } from "../../../redux/actions/index";

export default function Items({ item }) {
  const [flag, setFlag] = useState(true);
  const [input, setInput] = useState({
    descripcion: item.descripcion,
    id: item.id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setFlag(true);
  };

  return flag ? (
    <li className="list-group-item d-flex  justify-content-center flex-column">
      {input.descripcion}
      <button className="btn btn-warning" onClick={() => setFlag(false)}>
        edit
      </button>
      <button className="btn btn-danger " onClick={deleteItem()}>
        X
      </button>
    </li>
  ) : (
    <form onSubmit={(e) => handleSubmit(e)}>
      <li className="list-group-item justify-content-center flex-column">
        <input
          value={input.descripcion}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button className="btn btn-warning" type="submit">
          Enviar
        </button>
        <button className="btn btn-danger ">X</button>
      </li>
    </form>
  );
}
