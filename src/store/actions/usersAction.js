import axios from "axios";

export const getUsers = (category) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    dispatch({
      type: "GET_USERS",
      payload: res?.data,
    });
  } catch (e) {
    dispatch({
      type: "USERS_ERROR",
      payload: console.log(e),
    });
  }
};
