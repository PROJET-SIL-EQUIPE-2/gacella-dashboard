
import {
    GET_ALL_REPLYDEMANDESSUPPORTS_LOADING,
    GET_ALL_REPLYDEMANDESSUPPORTS_SUCCESS,
    GET_ALL_REPLYDEMANDESSUPPORTS_ERROR,
} from "../actions/actionsTypes";

const initialState = {
    data :[],
    loading:false,
    error : null
}


export default function replySupports (state = initialState, action) {
    switch(action.type){
        case GET_ALL_REPLYDEMANDESSUPPORTS_LOADING:
            return {
                ...state,
                error: null,
                loading: true
            }
        case GET_ALL_REPLYDEMANDESSUPPORTS_SUCCESS:
            localStorage.setItem("gacela-token" , action.payload.token);
            return {
                ...state ,
                data : action.payload.replies,
                error: null,
                loading: false
            }
        case GET_ALL_REPLYDEMANDESSUPPORTS_ERROR:
            return {
                ...state ,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}

