// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    GET_ALL_POSTS_LOADING, GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_ERROR,
    POST_POST_LOADING, POST_POST_SUCCESS, POST_POST_ERROR, POST_LOGIN_LOADING, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR

} from "../actions/actionsTypes";

const initialState = {
    data: {
        token : localStorage.getItem("gacela-token"),
        accountType : localStorage.getItem("accountType")
    },
    loading:false,
    // Message d'erreur
    error : null
}

export default function userModal (state = initialState, action) {
    switch(action.type){
        case POST_LOGIN_LOADING:
            return {
                ...state,
                error: null,
                loading: true
            }
        case POST_LOGIN_SUCCESS:
            localStorage.setItem("gacela-token" , action.payload.token);
            localStorage.setItem("accountType" , action.payload.accountType);

            return {
                ...state ,
                data : action.payload,
                error: null,
                loading: false
            }
        case POST_LOGIN_ERROR:
            return {
                ...state ,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}

