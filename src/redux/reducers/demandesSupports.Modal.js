
import {
    GET_ALL_DEMANDESSUPPORTS_LOADING,
    GET_ALL_DEMANDESSUPPORTS_SUCCESS, 
    GET_ALL_DEMANDESSUPPORTS_ERROR,
} from "../actions/actionsTypes";

const initialState = {
    data :[],
    loading:false,
    error : null
}


export default function demandesSupportsModal (state = initialState, action) {
    switch(action.type){
        case GET_ALL_DEMANDESSUPPORTS_LOADING:
            return {
                ...state,
                error: null,
                loading: true
            }
        case GET_ALL_DEMANDESSUPPORTS_SUCCESS:
            localStorage.setItem("gacela-token" , action.payload.token);
            return {
                ...state ,
                data : action.payload.data,
                error: null,
                loading: false
            }
        case GET_ALL_DEMANDESSUPPORTS_ERROR:
            return {
                ...state ,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}

