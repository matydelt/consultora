const initialState = {
  materias: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MATERIAS":
      return {
        ...state,
        materias: [action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
