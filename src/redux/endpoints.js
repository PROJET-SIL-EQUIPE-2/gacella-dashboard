const  baseUrlTest = "http://localhost:3000";
module.exports={
    ENDPOINT_GET_POSTS : `${baseUrlTest}/posts`,
    ENDPOINT_POST_POST : `${baseUrlTest}/posts`,
    ENDPOINT_POST_LOGIN : `${baseUrlTest}/api/web_login`,
    ENDPOINT_POST_RESET_PASSWORD : `${baseUrlTest}/api/web_passwordReset/admin`,
    ENDPOINT_GET_LOCATAIRES_REQUESTS: `${baseUrlTest}/api/locataire/non_validated`,
    ENDPOINT_POST_ACCEPT_LOCATAIRE : `${baseUrlTest}/api/signup/locataire/validate`,
    ENDPOINT_POST_REJECT_LOCATAIRE : `${baseUrlTest}/api/signup/locataire/reject`,
    ENDPOINT_GET_DECIDEURS_PROFILES: `${baseUrlTest}/api/decideurs/all`,
    ENDPOINT_POST_ADD_DECIDEUR: `${baseUrlTest}/api/signup/decideur`,
    ENDPOINT_PUT_UPDATE_DECIDEUR_EMAIL: `${baseUrlTest}/api/web_settings/decideur/email/`,
    ENDPOINT_PUT_UPDATE_DECIDEUR_PASSSWORD: `${baseUrlTest}/api/web_settings/decideur/password/`,
    ENDPOINT_PATCH_TOGGLE_BLOCK_DECIDEUR: `${baseUrlTest}/api/accounts/toggle-block/decideur`,
    ENDPOINT_DELETE_REMOVE_DECIDEUR: `${baseUrlTest}/api/decideurs/delete`,

}
