import * as api from "../api";

export const getAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    dispatch({ type: "GET_ALL_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, updatedUser) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, updatedUser);
    dispatch({ type: "UPDATE_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};
