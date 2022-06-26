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
import carsViewReducerModal from "./carsView.Modal";
import reportsListsModal from "./reportsLists.Modal";
import vehiculesModal from "./vehicules.Modal";
import regionsStatsModal from "./regions.Modal";
import alllocatairesModal from "./alllocataires.Modal";

let persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
};

let reducers = combineReducers({
  alllocataires: alllocatairesModal,
  posts: postsReducerModal,
  templateSettings: customizationReducer,
  user: userModal,
  amsProfiles: amsProfilesModal,
  amprofile: amProfileModal,
  locatairesRequests: locatairesRequestsModal,
  decideursProfiles: decideursProfilesModal,
  vehiculesInfos: vehiculesModal,
  regionsStats: regionsStatsModal,
  snackBarInfo: snackBarModal,
  carsViewReducer: carsViewReducerModal,
  reportsLists: reportsListsModal,
  // users : usersReducer,
});

export default persistReducer(persistConfig, reducers);
