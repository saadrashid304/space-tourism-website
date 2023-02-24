import { combineReducers } from "redux";
import activeNavLinkReducer from "./ActiveNavLinkReducer";
import activeDestNavLinkReducer from "./ActiveDestNavLinkReducer";
import activeCrewNavLinkReducer from "./ActiveCrewNavLinkReducer";
import activeTechNavLinkReducer from "./ActiveTechNavLinkReducer";

const rootReducer = combineReducers({
  activeNavLink: activeNavLinkReducer,
  activeDestNavLink: activeDestNavLinkReducer,
  activeCrewNavLink: activeCrewNavLinkReducer,
  activeTechNavLink: activeTechNavLinkReducer,
});

export default rootReducer;
