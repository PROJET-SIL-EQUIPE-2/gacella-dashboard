import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage';

import { persistStore, persistReducer } from 'redux-persist';

import postsReducerModal from "./postsReducer.Modal";
import customizationReducer from "./customizationReducer";


let persistConfig = {
    key : 'root',
    storage : storage ,
    whitelist : ['user']
}

let reducers= combineReducers({
    posts : postsReducerModal,
    templateSettings : customizationReducer
    // users : usersReducer,
});

export default persistReducer(persistConfig, reducers);
