import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./users";
import doctorReducer from "./doctorReducer";
import storeReducer from "./storeReducer";

// import imageReducer from "./imageReducer";

export default combineReducers({
  auth: authReducer,
  users: userReducer,
  doctorReducer,
  storeReducer,

  // imageReducer: imageReducer
});