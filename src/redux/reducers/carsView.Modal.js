// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    WEBSOCKET_FETCH_ALL_CARS, WEBSOCKET_OBSERVE_CAR_DATA
} from "../actions/actionsTypes";

const initialState = {
    data: [],
    error: null,
};

// {
//     name : 'V-12D7',
//         position : {
//     lat : 48.7230,
//         lng: 2.2550
// },
//     speed : '45',
//         heat : '65',
//     AM : {
//     fullName : 'Eren Yeager',
//         email : 'ie_yeager@esi.dz'
// }
// }

export default function carsViewReducerModal(state = initialState, action) {
    switch (action.type) {

        case WEBSOCKET_FETCH_ALL_CARS:
            return {
                ...state,
                data: action.payload.map(car=>({...car , heat : car.temperature , name : car.matricule , AM : {fullName : "Metidji Sid Ahmed" , email :"is_metidji@esi.dz"} , position : {lat : car.lat , lng : car.long}})),
                error: null,
                loading: false,
            };
        // Update a car data
        case WEBSOCKET_OBSERVE_CAR_DATA:
            return {
                ...state,
                data: state.data.map(car=>car.matricule!== action.payload.matricule ? car : {...action.payload , heat : action.payload.temperature , name :action.payload.matricule , AM : {fullName : "Metidji Sid Ahmed" , email :"is_metidji@esi.dz"} , position : {lat : action.payload.lat , lng : action.payload.long}} ),
                error: null,
                loading: false,
            };
        // case GET_ALL_POSTS_ERROR:
        //     return {
        //         ...state,
        //         error: action.payload,
        //         loading: false,
        //     };
        default:
            return state;
    }
}
