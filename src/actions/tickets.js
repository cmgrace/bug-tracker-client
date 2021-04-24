import * as api from "../api";

export const getAllTickets = () => async (dispatch) => {
  try {
    const { data } = await api.getTickets();
    dispatch({ type: "GET_ALL_TICKETS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createProject = (newTicket) => async (dispatch) => {
  try {
    const { data } = await api.createProject(newTicket);
    dispatch({ type: "CREATE_NEW_TICKET", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTicket = (id, updatedTicket) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, updatedTicket);
    dispatch({ type: "UPDATE_TICKET", payload: data });
  } catch (error) {
    console.log(error);
  }
};