import { combineReducers } from "redux";
import project_reducer from "./projects";
import user_reducer from "./users";
import tickets_reducer from "./tickets";
import user_project_reducer from "./user_project";

const initialState = {
  sidebarShow: "responsive",
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  nav: changeState,
  projects: project_reducer,
  users: user_reducer,
  tickets: tickets_reducer,
  userProjects: user_project_reducer,
});

export default rootReducer;
