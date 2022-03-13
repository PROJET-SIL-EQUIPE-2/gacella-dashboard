import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage';

import { persistStore, persistReducer } from 'redux-persist';

import postsReducerModal from "./postsReducer.Modal";


let persistConfig = {
    key : 'root',
    storage : storage ,
    whitelist : ['user']
}

let reducers= combineReducers({
    posts : postsReducerModal,
    // users : usersReducer,
});

export default persistReducer(persistConfig, reducers);
