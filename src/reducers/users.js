const user_reducer = (users = [], action) => {
  switch (action.type) {
    case "GET_ALL_USERS":
      return action.payload;
    case "UPDATE_USER":
      return users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    default:
      return users;
  }
};

export default user_reducer;
