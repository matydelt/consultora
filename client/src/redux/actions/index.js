import axios from "axios";

export function getMaterias() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/materias");
      return dispatch({
        type: "GET_MATERIAS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNombreAbogados(nombre) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/abogados" + nombre);
      return dispatch({
        type: "GET_NOMBRE_ABOGADOS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
