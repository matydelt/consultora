const initialState = {
  materias: [],
  abogados: [],
  provincias: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MATERIAS":
      return {
        ...state,
        materias: action.payload,
      };
    case "GET_NOMBRE_ABOGADOS":
      return {
        ...state,
        abogados: action.payload,
      };
    case "GET_PROVINCIAS":
      return {
        ...state,
        provincias: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
