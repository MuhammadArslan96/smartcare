// import {
//     REGISTER_USER,
//     LOGIN_USER,
//     ERROR,
//     LOG_OUT,
//     SOCIAL,
//   } from "../actions/type";
//   const isEmpty = require("is-empty");

const initialState = {
    store_info:undefined,
    quotations:undefined,
    store_list:undefined,
    orders:undefined
  };
  export default function(state = initialState, action) {
    switch (action.type) {
     
      case "STORE_INFO":
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          store_info: action.payload
        };
        
        case 'STORE_LIST':
          return {
            ...state,
            loading:false,
            store_list:action.payload
          }
      case "ORDERS":
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          orders: action.payload
        };
    
      default:
        return state;
    }
  }