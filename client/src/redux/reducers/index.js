const initialState = {
  materias: [],
  abogados: [],
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

    default:
      return state;
  }
};

export default rootReducer;
