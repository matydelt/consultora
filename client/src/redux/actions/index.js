import axios from "axios";

export function getMaterias() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3000/materias");
      return dispatch({
        type: "GET_MATERIAS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAbogados() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3000/abogados");
      return dispatch({
        type: "GET_ABOGADOS",
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

export function getUsuarios() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3000/usuarios");
      return dispatch({
        type: "GET_USUARIOS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCasos() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3000/casos");
      return dispatch({
        type: "GET_CASOS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postUsuario(usuario) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3000/usuarios", usuario);
      return dispatch({
        type: "POST_USUARIOS",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUsuario(usuario) {
  return async function (dispatch) {
    try {
      await axios.get("http://localhost:3000/usuarios", usuario);
      return dispatch({
        type: "GET_USUARIO",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postAbogado(abogado) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3000/usuario/abogado", abogado);
      return dispatch({
        type: "POST_ABOGADO",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAbogado(abogado) {
  return async function (dispatch) {
    try {
      await axios.get("http://localhost:3000/abogado", abogado);
      return dispatch({
        type: "GET_ABOGADO",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postConsulta(consulta) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3000/consultas", consulta);
      return dispatch({
        type: "POST_CONSULTA",
      });
    } catch (error) {
      console.log(error);
    }
  };
}
