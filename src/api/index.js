import { API_ENDPOINT } from "../config";
import axios from "axios";

export const getProjects = () => axios.get(`${API_ENDPOINT}/projects`);
export const getUsers = () => axios.get(`${API_ENDPOINT}/users`);
export const getTickets = () => axios.get(`${API_ENDPOINT}/tickets`);

export const createProject = (newProject) =>
  axios.post(`${API_ENDPOINT}/projects`);
export const createTicket = (newTicket) =>
  axios.post(`${API_ENDPOINT}/tickets`);

export const updateUser = (id, updatedUser) =>
  axios.patch(`${API_ENDPOINT}/users/${id}`, updatedUser);
export const updateProject = (id, updatedProject) =>
  axios.patch(`${API_ENDPOINT}/projects/${id}`, updatedProject);
export const updateTicket = (id, updatedTicket) =>
  axios.patch(`${API_ENDPOINT}/tickets/${id}`, updatedTicket);
