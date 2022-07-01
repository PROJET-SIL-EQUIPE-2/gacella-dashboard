
import {
    GET_DEMANDESUPPORT_LOADING,
    GET_DEMANDESUPPORT_SUCCESS, 
    GET_DEMANDESUPPORT_ERROR,
} from "../actions/actionsTypes";

const initialState = {
    data :[],
    loading:false,
    error : null
}


export default function demandeSupportModal (state = initialState, action) {
    switch(action.type){
        case GET_DEMANDESUPPORT_LOADING:
            return {
                ...state,
                error: null,
                loading: true
            }
        case GET_DEMANDESUPPORT_SUCCESS:
            localStorage.setItem("gacela-token" , action.payload.token);
            return {
                ...state ,
                data : action.payload.data,
                error: null,
                loading: false
            }
        case GET_DEMANDESUPPORT_ERROR:
            return {
                ...state ,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}

