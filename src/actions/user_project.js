import * as api from "../api";

export const getAllUserProjects = () => async (dispatch) => {
  try {
    const { data } = await api.getUserProjects();
    dispatch({ type: "GET_ALL_USER_PROJECTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
