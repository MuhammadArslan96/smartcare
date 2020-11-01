// import {
//     REGISTER_USER,
//     LOGIN_USER,
//     ERROR,
//     LOG_OUT,
//     SOCIAL,
//   } from "../actions/type";
//   const isEmpty = require("is-empty");

  const initialState = {
    doctor_info:undefined,
    quotations:undefined,
    doctorOrders:undefined
  };
  export default function(state = initialState, action) {
    switch (action.type) {
     
      case "DOCTOR_INFO":
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          doctor_info: action.payload
        };

      case "QUOTATIONS":
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          quotations: action.payload
        };

        case "DOCTOR_ORDERS":
          return {
            ...state,
            loading: false,
            isAuthenticated: true,
            doctorOrders: action.payload
          };
        
      default:
        return state;
    }
  }