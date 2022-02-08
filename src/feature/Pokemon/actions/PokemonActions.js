import axios from "axios";

export const fetchPokemons =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: "LOAD" });
      const itemsPage = 21;
      const offset = page * itemsPage - itemsPage;

      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${itemsPage}&offset=${offset}`
      );

      dispatch({ type: "SUCCESS", payload: response.data });
    } catch (e) {
      dispatch({ type: "FAIL" });
    }
  };

export const getInfo = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD",
    });

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    dispatch({
      type: "GET_INFO",
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: "FAIL",
    });
  }
};
