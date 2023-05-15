import { combineReducers } from "redux";
import userDataHandling from "./userDataHandler";

const rootReducer = combineReducers({
  userDat: userDataHandling,
});
export default rootReducer;
