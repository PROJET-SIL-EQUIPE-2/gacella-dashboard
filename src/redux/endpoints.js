const baseUrlTest = "http://192.168.108.205:3000";
module.exports = {
  ENDPOINT_GET_POSTS: `${baseUrlTest}/posts`,
  ENDPOINT_POST_POST: `${baseUrlTest}/posts`,
  ENDPOINT_POST_LOGIN: `${baseUrlTest}/api/web_login`,
  ENDPOINT_POST_RESET_PASSWORD: `${baseUrlTest}/api/web_passwordReset/admin`,

  ENDPOINT_GET_LOCATAIRES_REQUESTS: `${baseUrlTest}/api/locataire/waiting`,
  ENDPOINT_POST_ACCEPT_LOCATAIRE: `${baseUrlTest}/api/signup/locataire/validate`,
  ENDPOINT_POST_REJECT_LOCATAIRE: `${baseUrlTest}/api/signup/locataire/reject`,

  ENDPOINT_GET_DEVEROUILLAGE_REQUESTS: `${baseUrlTest}/api/locataire/validated`,
  ENDPOINT_GET_ALL_LOCATAIRES: `${baseUrlTest}/api/locataire/all`,

  ENDPOINT_GET_DECIDEURS_PROFILES: `${baseUrlTest}/api/decideurs/all`,
  ENDPOINT_POST_ADD_DECIDEUR: `${baseUrlTest}/api/signup/decideur`,
  ENDPOINT_PUT_UPDATE_DECIDEUR_EMAIL: `${baseUrlTest}/api/web_settings/decideur/email/`,
  ENDPOINT_PUT_UPDATE_DECIDEUR_PASSSWORD: `${baseUrlTest}/api/web_settings/decideur/password/`,
  ENDPOINT_PATCH_TOGGLE_BLOCK_DECIDEUR: `${baseUrlTest}/api/accounts/toggle-block/decideur`,
  ENDPOINT_DELETE_REMOVE_DECIDEUR: `${baseUrlTest}/api/decideurs/delete`,
    ENDPOINT_GET_LOCATAIRES_REQUESTS: `${baseUrlTest}/api/locataire/waiting`,
    ENDPOINT_POST_ACCEPT_LOCATAIRE : `${baseUrlTest}/api/signup/locataire/validate`,
    ENDPOINT_POST_REJECT_LOCATAIRE : `${baseUrlTest}/api/signup/locataire/reject`,
    ENDPOINT_GET_DEVEROUILLAGE_REQUESTS: `${baseUrlTest}/api/locataire/validated`,
    ENDPOINT_GET_DECIDEURS_PROFILES: `${baseUrlTest}/api/decideurs/all`,
    ENDPOINT_POST_ADD_DECIDEUR: `${baseUrlTest}/api/signup/decideur`,
    ENDPOINT_PUT_UPDATE_DECIDEUR_EMAIL: `${baseUrlTest}/api/web_settings/decideur/email/`,
    ENDPOINT_PUT_UPDATE_DECIDEUR_PASSSWORD: `${baseUrlTest}/api/web_settings/decideur/password/`,
    ENDPOINT_PATCH_TOGGLE_BLOCK_DECIDEUR: `${baseUrlTest}/api/accounts/toggle-block/decideur`,
    ENDPOINT_DELETE_REMOVE_DECIDEUR: `${baseUrlTest}/api/decideurs/delete`,
    ENDPOINT_GET_DEMANDESSUPPORTS : `${baseUrlTest}/api/supports`,
    ENDPOINT_GET_DEMANDESUPPORT : `${baseUrlTest}/api/demandesupport/`,
    ENDPOINT_GET_REPLYSUPPORT: `${baseUrlTest}/api/supports/reply/`,

  ENDPOINT_GET_AMS: `${baseUrlTest}/api/agents/all`,
  ENDPOINT_GET_AM: `${baseUrlTest}/api/agents/`,
  ENDPOINT_POST_ADD_AM: `${baseUrlTest}/api/signup/agent`,
  ENDPOINT_DELETE_REMOVE_AM: `${baseUrlTest}/api/accounts/agent`,

  ENDPOINT_PUT_DECIDEUR_PROFIL: `${baseUrlTest}/api/web_settings/decideur/email/`,
    ENDPOINT_GET_AMS : `${baseUrlTest}/api/agents/all`,
    ENDPOINT_GET_AM : `${baseUrlTest}/api/agents/`,
    ENDPOINT_POST_ADD_AM: `${baseUrlTest}/api/signup/agent`,
    ENDPOINT_DELETE_REMOVE_AM: `${baseUrlTest}/api/accounts/agent`,
    ENDPOINT_GET_VALIDATESLOCATAIRES: `${baseUrlTest}/api/locataire/validated`,


    ENDPOINT_GET_RESERVATIONS_EN_COURS: `${baseUrlTest}/api/reservations/encours`,
    ENDPOINT_GET_RESERVATIONS_COMPLETED:`${baseUrlTest}/api/reservations/completed`,

  ENDPOINT_GET_REPORTS_LISTS: `${baseUrlTest}/api/reportsLists`,

  ENDPOINT_GET_ALL_VEHICULES: `${baseUrlTest}/api/vehicles/all`,
  ENDPOINT_GET_VEHICULE: `${baseUrlTest}/api/vehicles`,
  ENDPOINT_POST_ADD_VEHICULE: `${baseUrlTest}/api/vehicles/add`,
  ENDPOINT_POST_ASSIGN_VEHICULE: `${baseUrlTest}/api/vehicles/assign`,
  ENDPOINT_DELETE_REMOVE_VEHICULE: `${baseUrlTest}/api/vehicles/delete`,

  ENDPOINT_GET_ALL_REGIONS: `${baseUrlTest}/api/stats/rental`,

    ENDPOINT_GET_VEHICLE_BY_ID: `${baseUrlTest}/api/vehicles/`
}
