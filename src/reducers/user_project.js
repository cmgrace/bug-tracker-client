const user_project_reducer = (userProjects = [], action) => {
  switch (action.type) {
    case "GET_ALL_USER_PROJECTS":
      return action.payload;
    // case "CREATE_NEW_PROJECT":
    //   return [...userProjects, action.payload];
    // case "UPDATE_PROJECT":
    //   return userProjects.map((project) =>
    //     project.id === action.payload.id ? action.payload : project
    //   );
    default:
      return userProjects;
  }
};

export default user_project_reducer;
