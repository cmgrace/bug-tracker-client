const ticket_reducer = (tickets = [], action) => {
  switch (action.type) {
    case "GET_ALL_TICKETS":
      return action.payload;
    case "CREATE_NEW_TICKET":
      return [...tickets, action.payload];
    case "UPDATE_TICKET":
      return tickets.map((ticket) =>
        ticket.id === action.payload.id ? action.payload : ticket
      );
    case "DELETE_TICKET":
      return tickets.filter((ticket) => ticket.id !== action.payload);
    default:
      return tickets;
  }
};

export default ticket_reducer;
