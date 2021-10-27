const initialState = {
  materias: [],
  usuarios: [],
  provincias: [],
  abogados: [],
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
    case "GET_USUARIOS":
      return {
        ...state,
        usuarios: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
