const initialState = {
  loading: false,
  data: [],
  errorMsg: "",
  count: 0,
  selected: {},
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD":
      return {
        ...state,
        loading: true,
        errorMsg: "",
        selected: {},
      };
    case "FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "nenhum registro encontrado!",
        selected: {},
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: "",
        count: action.payload.count,
        selected: {},
      };
    case "GET_INFO":
      return {
        ...state,
        loading: false,
        selected: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
