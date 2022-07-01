// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
  GET_LOC_ALL_ERROR,
  GET_LOC_ALL_SUCESS,
  GET_LOC_ALL_LOADING,
} from "../actions/actionsTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function alllocatairesModal(state = initialState, action) {
  switch (action.type) {
    case GET_LOC_ALL_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case GET_LOC_ALL_SUCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case GET_LOC_ALL_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
