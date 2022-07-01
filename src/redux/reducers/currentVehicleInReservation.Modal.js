import {
    ENDPOINT_GET_VEHICLE_ID_SUCCESS,
    ENDPOINT_GET_VEHICLE_ID_LOADING,
    ENDPOINT_GET_VEHICLE_ID_ERROR,
} from "../actions/actionsTypes";

const initialState = {
    data :[],
    loading:false,
    error : null
}


export default function currentVehicleInReservation (state = initialState, action) {
    switch(action.type){
        case ENDPOINT_GET_VEHICLE_ID_LOADING:
            return {
                ...state,
                error: null,
                loading: true
            }
        case ENDPOINT_GET_VEHICLE_ID_SUCCESS:
            localStorage.setItem("gacela-token" , action.payload.token);
            return {
                ...state ,
                data : action.payload.data,
                error: null,
                loading: false
            }
        case ENDPOINT_GET_VEHICLE_ID_ERROR:
            return {
                ...state ,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}