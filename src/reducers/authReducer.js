import {
    REGISTER_USER,
    LOGIN_USER,
    ERROR,
  } from "../actions/type";
//   const isEmpty = require("is-empty");

  const initialState = {
    isAuthenticated: false,
    user: {},
    loading: true,
    error:undefined,
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case REGISTER_USER:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          loading:false
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
          loading: true,
          // isAuthenticated: true,
          error: action.payload
        };
      default:
        return state;
    }
  }