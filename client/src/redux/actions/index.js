import axios from "axios";

export function getMaterias() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3000/materias");
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
      var json = await axios.get("http://localhost:3000/abogado" + nombre);
      return dispatch({
        type: "GET_NOMBRE_ABOGADOS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProvincias() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3000/provincias");
      return dispatch({
        type: "GET_PROVINCIAS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postUsuario() {}
