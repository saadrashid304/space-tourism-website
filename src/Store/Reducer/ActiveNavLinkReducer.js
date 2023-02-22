const activeNavLinkReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_ACTIVE_NAV_LINK":
      return action.payload;
    default:
      return state;
  }
};

export default activeNavLinkReducer;
