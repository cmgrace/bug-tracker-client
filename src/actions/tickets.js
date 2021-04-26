import * as api from "../api";

export const getAllTickets = () => async (dispatch) => {
  try {
    const { data } = await api.getTickets();
    dispatch({ type: "GET_ALL_TICKETS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTicket = (newTicket) => async (dispatch) => {
  try {
    const { data } = await api.createTicket(newTicket);
    dispatch({ type: "CREATE_NEW_TICKET", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTicket = (id, updatedTicket) => async (dispatch) => {
  try {
    const { data } = await api.createTicket(id, updatedTicket);
    dispatch({ type: "UPDATE_TICKET", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTicket = (id) => async (dispatch) => {
  try {
    await api.deleteTicket(id);
    dispatch({ type: "DELETE_TICKET", payload: id });
  } catch (error) {
    console.log(error);
  }
};
