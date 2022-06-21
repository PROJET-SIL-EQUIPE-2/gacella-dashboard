import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";

import postsReducerModal from "./postsReducer.Modal";
import customizationReducer from "./customizationReducer";
import userModal from "./user.Modal";
import locatairesRequestsModal from "./locatairesRequests.Modal";
import snackBarModal from "./snackBarInfo.Modal";
import decideursProfilesModal from "./decideursProfiles.Modal";
import amsProfilesModal from "./amsProfiles.Modal";
import amProfileModal from "./amProfile.Modal";
import vehiculesModal from "./vehicules.Modal";
import regionsStatsModal from "./vehicules.Modal";

let persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
};

let reducers= combineReducers({
    posts : postsReducerModal,
    templateSettings : customizationReducer,
    user : userModal,
    amsProfiles : amsProfilesModal,
    amprofile :amProfileModal,
    locatairesRequests : locatairesRequestsModal,
    decideursProfiles : decideursProfilesModal,
    vehiculesInfos : vehiculesModal,
    regionsStats : regionsStatsModal,
    snackBarInfo : snackBarModal
    // users : usersReducer,

});

export default persistReducer(persistConfig, reducers);
