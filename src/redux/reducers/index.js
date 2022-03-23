import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage';

import { persistStore, persistReducer } from 'redux-persist';

import postsReducerModal from "./postsReducer.Modal";
import customizationReducer from "./customizationReducer";
import userModal from "./user.Modal";
import locatairesRequestsModal from "./locatairesRequests.Modal";
import snackBarModal from "./snackBarInfo.Modal";


let persistConfig = {
    key : 'root',
    storage : storage ,
    whitelist : ['user']
}

let reducers= combineReducers({
    posts : postsReducerModal,
    templateSettings : customizationReducer,
    user : userModal,
    locatairesRequests : locatairesRequestsModal,
    snackBarInfo : snackBarModal
    // users : usersReducer,
});

export default persistReducer(persistConfig, reducers);
