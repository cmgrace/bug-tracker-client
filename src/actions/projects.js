import * as api from "../api";

export const getAllProjects = () => async (dispatch) => {
  try {
    const { data } = await api.getProjects();
    dispatch({ type: "GET_ALL_PROJECTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createProject = (newProject) => async (dispatch) => {
  try {
    const { data } = await api.createProject(newProject);
    dispatch({ type: "CREATE_NEW_PROJECT", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateProject = (id, updatedProject) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, updatedProject);
    dispatch({ type: "UPDATE_PROJECT", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await api.deleteProject(id);
    dispatch({ type: "DELETE_PROJECT", payload: id });
  } catch (error) {
    console.log(error);
  }
};
