const activeCrewNavLinkReducer = (state = "Douglas Hurley", action) => {
  switch (action.type) {
    case "SET_ACTIVE_CREW_NAV_LINK":
      return action.payload;
    default:
      return state;
  }
};

export default activeCrewNavLinkReducer;
