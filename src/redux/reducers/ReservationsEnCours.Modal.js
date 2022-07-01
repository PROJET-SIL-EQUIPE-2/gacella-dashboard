
import {
    ENDPOINT_GET_RESERVATIONS_EN_COURS_SUCCESS,
    ENDPOINT_GET_RESERVATIONS_EN_COURS_LOADING,
    ENDPOINT_GET_RESERVATIONS_EN_COURS_ERROR,
} from "../actions/actionsTypes";

const initialState = {
    data :[],
    loading:false,
    error : null
}


export default function ReservationsEnCoursModal (state = initialState, action) {
    switch(action.type){
        case ENDPOINT_GET_RESERVATIONS_EN_COURS_LOADING:
            return {
                ...state,
                error: null,
                loading: true
            }
        case ENDPOINT_GET_RESERVATIONS_EN_COURS_SUCCESS:
            localStorage.setItem("gacela-token" , action.payload.token);
            return {
                ...state ,
                data : action.payload.reservations,
                error: null,
                loading: false
            }
        case ENDPOINT_GET_RESERVATIONS_EN_COURS_ERROR:
            return {
                ...state ,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}