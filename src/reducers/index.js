import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./users";
import doctorReducer from "./doctorReducer";

// import imageReducer from "./imageReducer";

export default combineReducers({
  auth: authReducer,
  users: userReducer,
  doctorReducer,

  // imageReducer: imageReducer
});