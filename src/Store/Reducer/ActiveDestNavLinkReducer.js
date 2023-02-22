const activeDestNavLinkReducer = (state = "MOON", action) => {
  switch (action.type) {
    case "SET_ACTIVE_DEST_NAV_LINK":
      return action.payload;
    default:
      return state;
  }
};

export default activeDestNavLinkReducer;
