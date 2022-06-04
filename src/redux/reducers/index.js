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
import amProfileModal from './amProfile.Modal';
import demandesSupportsModal from './demandesSupports.Modal';
import demandeSupportModal from './demandeSupport.Modal';
import validatedLocatairesModal from "./validatedLocataires.Modal";
import replySupports from "./repyDemandeSupports";


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
    demandesSupports :demandesSupportsModal,
    demandeSupport:demandeSupportModal,
    locatairesRequests : locatairesRequestsModal,
    decideursProfiles : decideursProfilesModal,
    snackBarInfo : snackBarModal,
    validatedLocataires : validatedLocatairesModal,
    replysupports : replySupports,
    // users : usersReducer,

});

export default persistReducer(persistConfig, reducers);
