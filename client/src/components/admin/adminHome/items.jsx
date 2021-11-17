import React, { useEffect, useState } from "react";
import { putItem } from "../../../redux/actions/index";
import { useDispatch } from "react-redux";
import "./items.css";

export default function Items({ item, handleDelete }) {
  const [flag, setFlag] = useState(true);
  const [input, setInput] = useState({
    id: item.id,
    descripcion: item.descripcion,
  });
  const dispatch = useDispatch();

  console.log({ item, input });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putItem(input));
    setFlag(true);
  };

  useEffect(() => {
    setInput({ id: item.id, descripcion: item.descripcion });
  }, [item]);

  return flag ? (
    <div>
      <li className="list-group-item d-flex  justify-content-center flex-column">
        {input.descripcion}
      </li>
      <button className="btn btn-warning" onClick={() => setFlag(false)}>
        edit
      </button>
      <button
        className="btn btn-danger "
        name={input.id}
        onClick={(e) => handleDelete(e)}
      >
        X
      </button>
    </div>
  ) : (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <li className="list-group-item justify-content-center flex-column">
          <input
            value={input.descripcion}
            onChange={(e) => setInput({ ...item, descripcion: e.target.value })}
          ></input>
        </li>
        <button className="btn btn-warning" type="submit">
          Enviar
        </button>
        <button
          className="btn btn-danger "
          name={input.id}
          onClick={(e) => handleDelete(e)}
        >
          X
        </button>
      </div>
    </form>
  );
}
