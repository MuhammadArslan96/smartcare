import {
    USERS_LIST,
    CURRENT_USER,
    IS_ADMIN,

  } from "../actions/type";
//   const isEmpty = require("is-empty");

  const initialState = {
    isAuthenticated: false,
    user: [],
    loading: true,
    currentUser:undefined,
    is_admin: false,
    is_approved:false
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case USERS_LIST:
        return {
          ...state,
          // isAuthenticated: true,
          user: action.payload,
          loading:false,
        };
        case CURRENT_USER:
          console.log('reducer',action.payload)
          return {
            ...state,
            isAuthenticated: true,
            currentUser: action.payload,
            loading:false,
            is_admin:false,
          };
        case IS_ADMIN:
          console.log('reducer',action.payload)
          return {
            ...state,
            isAuthenticated: true,
            is_admin: action.payload,
            loading:false,
          };
        case 'APPROVED':
          console.log('reducer',action.payload)
          return {
            ...state,
            isAuthenticated: true,
            is_approved:action.payload,
            loading:false,
          };
    
      default:
        return state;
    }
  }