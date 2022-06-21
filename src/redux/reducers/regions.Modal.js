// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
  GET_ALL_REGIONS_ERROR,
  GET_ALL_REGIONS_LOADING,
  GET_ALL_REGIONS_SUCCESS,
} from "../actions/actionsTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function regionsModal(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REGIONS_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case GET_ALL_REGIONS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        loading: false,
      };
    case GET_ALL_REGIONS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
