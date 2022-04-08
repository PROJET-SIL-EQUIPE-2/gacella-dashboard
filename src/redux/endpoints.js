const  baseUrlTest = "http://localhost:3000";
module.exports={
    ENDPOINT_GET_POSTS : `${baseUrlTest}/posts`,
    ENDPOINT_POST_POST : `${baseUrlTest}/posts`,
    ENDPOINT_POST_LOGIN : `${baseUrlTest}/api/web_login`,
    ENDPOINT_POST_RESET_PASSWORD : `${baseUrlTest}/api/web_passwordReset/admin`,
    ENDPOINT_GET_LOCATAIRES_REQUESTS: `${baseUrlTest}/api/locataire/non_validated`,
    ENDPOINT_POST_ACCEPT_LOCATAIRE : `${baseUrlTest}/api/signup/locataire/validate`,
    ENDPOINT_POST_REJECT_LOCATAIRE : `${baseUrlTest}/api/signup/locataire/reject`,
    ENDPOINT_GET_AMS : `${baseUrlTest}/api/agents/all`,
    ENDPOINT_GET_AM : `${baseUrlTest}/api/agents/1`,
    
}
