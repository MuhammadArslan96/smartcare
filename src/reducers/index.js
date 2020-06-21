import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./users";

// import imageReducer from "./imageReducer";

export default combineReducers({
  auth: authReducer,
  users: userReducer,

  // imageReducer: imageReducer
});