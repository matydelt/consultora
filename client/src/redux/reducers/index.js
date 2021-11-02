const initialState = {
  materias: [],
  usuarios: [],
  provincias: [],
  abogados: [],
  abogado: {
    eMail: "jonito@gmail.com",
    firstName: "jony",
    lastName: "lolin",
    dni: 12312123,
    celular: 114512873,
    abogado: {
      id: 1,
      detalle: null,
      imagen: null,
      estudios: null,
      experiencia: null,
      createdAt: "2021-11-01T19:44:04.807Z",
      updatedAt: "2021-11-01T19:44:04.807Z",
    },
  },
  error: "",
  personas: [],
  usuario: {},
  consultas: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MATERIAS":
      return {
        ...state,
        materias: action.payload,
      };
    case "GET_ABOGADOS":
      return {
        ...state,
        abogados: action.payload,
      };
    case "GET_PROVINCIAS":
      return {
        ...state,
        provincias: action.payload,
      };
    case "GET_USUARIO":
      return {
        ...state,
        usuario: action.payload,
      };
    case "GET_USUARIOS":
      return {
        ...state,
        usuarios: action.payload,
      };
    case "GET_CASOS":
      return {
        ...state,
        casos: action.payload,
      };
    case "POST_USUARIO": //for login
      let user = action.payload;
      if (user.adminId) {
        return {
          ...state,
          admin: action.payload,
        };
      } else if (user.abogadoId) {
        return {
          ...state,
          abogado: action.payload,
        };
      } else {
        return {
          ...state,
          usuario: action.payload,
        };
      }
    case "POST_ABOGADO":
      return {
        ...state,
      };
    case "POST_CONSULTA":
      return {
        ...state,
      };
    case "GET_ABOGADO":
      return {
        ...state,
        abogado: action.payload,
      };
    case "SET_ABOGADO":
      return {
        ...state,
      };
    case "GET_CONSULTAS":
      return {
        ...state,
        consultas: action.payload,
      };
    case "ASIGNAR_CONSULTA":
      return {
        ...state,
      };
    case "DELETE_CONSULTA":
      return {
        ...state,
        consultas: [],
      };
    case "FILTRAR_MATERIAS":
      const materiasFiltradas =
        action.payload === "todas"
          ? state.abogados
          : state.abogados.filter((e) => e === action.payload.nombre);
      return {
        ...state,
        abogados: materiasFiltradas,
      };
    case "FILTRAR_PROVINCIAS":
      const provinciasFiltradas =
        action.payload === "todas"
          ? state.abogados
          : state.abogados.filter((e) => e === action.payload.nombre);
      return {
        ...state,
        abogados: provinciasFiltradas,
      };
    default:
      return state;
  }
};

export default rootReducer;
