const project_reducer = (projects = [], action) => {
  switch (action.type) {
    case "GET_ALL_PROJECTS":
      return action.payload;
    case "CREATE_NEW_PROJECT":
      return [...projects, action.payload];
    case "UPDATE_PROJECT":
      return projects.map((project) =>
        project.id === action.payload.id ? action.payload : project
      );
    default:
      return projects;
  }
};

export default project_reducer;
