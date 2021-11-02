import axios from "axios";

export function getMaterias() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/materias");
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
      const json = await axios.get("http://localhost:3001/abogados");
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
      const json = await axios.get("http://localhost:3001/provincias");
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
      const json = await axios.get("http://localhost:3001/usuarios");
      return dispatch({
        type: "GET_USUARIOS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPersonas() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/personas");
      return dispatch({
        type: "GET_PERSONAS",
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
      const json = await axios.get("http://localhost:3001/casos");
      return dispatch({
        type: "GET_CASOS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postCasos (payload) {
  return async function () {
    try {
      const newCaso = await axios.post("http://localhost:3001/casos/new", payload);
      return newCaso;
    } catch (error) {
      console.log(error)
    }
  }
}

export function postUsuario(usuario) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/usuarios", usuario);
      return dispatch({
        type: "POST_USUARIO",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getUsuario = (usuario) =>{
  return (dispatch)=>{
    axios.put("http://localhost:3001/usuario", usuario)
    .then(user =>{
      return dispatch({
        type: "GET_USUARIO",
        payload: user.data
      })
    })
    .catch((error)=>{
      console.log(error);
      return dispatch({
        type: "GET_USUARIO",
        payload: {}
      })
    })
  }
}

export function postAbogado(abogado) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/usuario/abogado", abogado);
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
      await axios.get("http://localhost:3001/abogado", abogado);
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
      await axios.post("http://localhost:3001/consultas", consulta);
      return dispatch({
        type: "POST_CONSULTA",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function setAbogado(user) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/usuario/abogado", user);
      return dispatch({
        type: "SET_ABOGADO"
      });
    } catch (error) {
      console.log(error);
    }
  }
}
export function getConsultas() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/consultas");
      return dispatch({
        type: "GET_CONSULTAS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("no se pudo conseguir las consultas");
    }
  };
}

export function deleteConsulta(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/consultas/${id}`);
      return dispatch({
        type: "DELETE_CONSULTA",
      });
    } catch (error) {
      console.log(error);
      alert("no se pudo borrar la consulta");
    }
  };
}

export function filtrarMaterias(payload) {
  return { type: "FILTRAR_MATERIAS", payload };
}

export function filtrarProvincias(payload) {
  return { type: "FILTRAR_PROVINCIAS", payload }
}
