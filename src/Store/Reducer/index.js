import { combineReducers } from "redux";
import activeNavLinkReducer from "./ActiveNavLinkReducer";
import activeDestNavLinkReducer from "./ActiveDestNavLinkReducer";

const rootReducer = combineReducers({
  activeNavLink: activeNavLinkReducer,
  activeDestNavLink: activeDestNavLinkReducer,
});

export default rootReducer;
