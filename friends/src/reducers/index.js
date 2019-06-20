import { combineReducers } from "redux";
import { fetchingReducer } from "./fetchingReducer";
import { friendsReducer } from "./friendsReducer";
import { loginReducer } from "./loginReducer";

const rootReducer = combineReducers({
  fetch: fetchingReducer,
  login: loginReducer,
  friends: friendsReducer
});

export default rootReducer;
