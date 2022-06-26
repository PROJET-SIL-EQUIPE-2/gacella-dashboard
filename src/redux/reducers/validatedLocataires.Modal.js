
import {
    GET_VALIDATED_LOCATAIRES_SUCCESS,
    GET_VALIDATED_LOCATAIRES_LOADING,
    GET_VALIDATED_LOCATAIRES_ERROR,
} from "../actions/actionsTypes";

const initialState = {
    data :[],
    loading:false,
    error : null
}


export default function validatedLocatairesModal (state = initialState, action) {
    switch(action.type){
        case GET_VALIDATED_LOCATAIRES_LOADING:
            return {
                ...state,
                error: null,
                loading: true
            }
        case GET_VALIDATED_LOCATAIRES_SUCCESS:
            localStorage.setItem("gacela-token" , action.payload.token);
            return {
                ...state ,
                data : action.payload.data,
                error: null,
                loading: false
            }
        case GET_VALIDATED_LOCATAIRES_ERROR:
            return {
                ...state ,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}

