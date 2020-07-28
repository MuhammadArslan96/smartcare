import {
  REGISTER_USER,
  LOGIN_USER,
  ERROR,
  LOG_OUT,
  SOCIAL,
} from "../actions/type";
//   const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: true,
  error:undefined,
  is_user:false,
  logout:false,
};
export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading:false,
        // is_user
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        // isAuthenticated: true,
        error: action.payload
      };
    case LOG_OUT:
    return {
      ...state,
      loading: false,
      isAuthenticated: false,
      logout:true,
      // error: action.payload
    };
    case SOCIAL:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        // error: action.payload
      };
    default:
      return state;
  }
}