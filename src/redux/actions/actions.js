import * as Actiontypes from "./actionsTypes";
import * as Endpoints from "../endpoints";
import axios from "axios";
import {
  ENDPOINT_GET_RESERVATIONS_EN_COURS_LOADING, ENDPOINT_GET_VEHICLE_ID_LOADING, ENDPOINT_GET_VEHICLE_ID_SUCCESS,
  GET_ALL_REPLYDEMANDESSUPPORTS_LOADING,
  GET_VALIDATED_LOCATAIRES_LOADING,
  POST_REPLY_SUPPORT_LOADING
} from "./actionsTypes";

// TEMPLATE GET METHOD
export const getAllPostsLoading = () => {
  return {
    // declancher un signal
    type: Actiontypes.GET_ALL_POSTS_LOADING,
  };
};

export const getAllPostsError = (err) => {
  return {
    type: Actiontypes.GET_ALL_POSTS_ERROR,
    payload: err,
  };
};

export const getAllPostsSuccess = (content) => {
  return {
    type: Actiontypes.GET_ALL_POSTS_SUCCESS,
    payload: content,
  };
};


// TEMPLATE POST METHOD

const addPostLoading = () => {
  return {
    type: Actiontypes.POST_POST_LOADING,
  };
};

const addPostSuccess = (post) => {
  return {
    type: Actiontypes.POST_POST_SUCCESS,
    payload: post,
  };
};

const addPostError = (err) => {
  return {
    type: Actiontypes.GET_ALL_POSTS_ERROR,
    paylaod: err,
  };
};

export const fetchAddPost = (postToAdd) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
  };
  dispatch(addPostLoading());
  const options = {
    headers: { ...headers, "Content-Type": "application/json" },
  };
  // let formattedCouponToPost={...couponToPost , }
  console.log("question To post =", postToAdd);
  return new Promise((resolve, reject) => {
    axios
      .post(Endpoints.ENDPOINT_POST_POST, options)
      .then((res) => {
        // dispatch(addPostSuccess(res.data));
        dispatch(addPostSuccess(""));
        resolve();
      })
      .catch((err) => {
        console.log("ERROR OBJECT = ", err);
        dispatch(addPostError(err.response.data.message));
        reject(err.message);
      });
  });
};

export const templateOpenMenu = (id) => {
  return {
    type: Actiontypes.TEMPLATE_MENU_OPEN,
    id: id,
  };
};

export const templateSetMenu = (id) => {
  return {
    type: Actiontypes.TEMPLATE_SET_MENU,
    opened: id,
  };
};

// LOGIN

const loginLoading = () => {
  return {
    type: Actiontypes.POST_LOGIN_LOADING,
  };
};

const loginSuccess = (data, dispatch) => {
  dispatch(setSnackBarContent("Login avec succées ! ", "success"));
  return {
    type: Actiontypes.POST_LOGIN_SUCCESS,
    payload: data,
  };
};

const loginError = (err) => (dispatch) => {
  dispatch(setSnackBarContent(err, "error"));

  return {
    type: Actiontypes.POST_LOGIN_ERROR,
    paylaod: err,
  };
};

export const fetchLogin = ({ email, password }) => (dispatch) => {
  // const headers = {
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`
  // };
  dispatch(loginLoading());
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  // let formattedCouponToPost={...couponToPost , }
  return new Promise((resolve, reject) => {
    axios
      .post(
        Endpoints.ENDPOINT_POST_LOGIN,
        { email: email, password: password },
        options
      )
      .then((res) => {
        console.log("RESPONSE SUCCESS =", res);
        // dispatch(addPostSuccess(res.data));
        dispatch(loginSuccess(res.data.data, dispatch));
        resolve("success");
      })
      .catch((err) => {
        if (err?.response?.data?.data?.message) {
          console.log(err.response.data.data.message);
          dispatch(loginError(err.response.data.data.message, dispatch));
          reject(err.response.data.data.message);
        } else {
          console.log(err.message);
          dispatch(loginError(err.message, dispatch));
          reject(err.message);
        }
      });
  });
};

// RESET PASSWORD

const resetPasswordLoading = () => {
  return {
    type: Actiontypes.POST_RESET_PASSWORD_LOADING,
  };
};

const resetPassswordSuccess = (data, dispatch) => {
  dispatch(setSnackBarContent(data, "success"));

  return {
    type: Actiontypes.POST_RESET_PASSWORD_SUCCESS,
    payload: data,
  };
};

const resetPasswordError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));

  return {
    type: Actiontypes.POST_RESET_PASSWORD_ERROR,
    paylaod: err,
  };
};

export const fetchResetPassword = ({ email }) => (dispatch) => {
  // const headers = {
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`
  // };
  dispatch(resetPasswordLoading());
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  // let formattedCouponToPost={...couponToPost , }
  return new Promise((resolve, reject) => {
    axios
      .post(Endpoints.ENDPOINT_POST_RESET_PASSWORD, { email: email }, options)
      .then((res) => {
        // dispatch(addPostSuccess(res.data));
        console.log("RESPONSE SUCCESS =", res);
        dispatch(resetPassswordSuccess(res.data.message, dispatch));
        resolve();
      })
      .catch((err) => {
        if (err?.response?.data) {
          console.log("RESPONSE=", err.response);
          dispatch(resetPasswordError(err.response.data.message, dispatch));
          reject(err.response.data);
        } else {
          console.log(err.message);
          dispatch(resetPasswordError(err.message, dispatch));
          reject(err.message);
        }
      });
  });
};

// GET ALL LOCATAIRES REQUESTS

export const getAllLocatairesRequestsLoading = () => {
  console.log("LOADING LOCATAIRES !");
  return {
    type: Actiontypes.GET_LOCATAIRES_REQUESTS_LOADING,
  };
};

export const getAllLocatairesRequestsError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));

  return {
    type: Actiontypes.GET_LOCATAIRES_REQUESTS_ERROR,
    payload: err,
  };
};

export const getAllLocatairesRequestsSuccess = (content) => {
  return {
    type: Actiontypes.GET_LOCATAIRES_REQUESTS_SUCCESS,
    payload: content,
  };
};

export const fetchgetLocatairesRequests = () => (dispatch) => {
  dispatch(getAllLocatairesRequestsLoading());
  const headers = {
    // Pour athentification
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
    // pour specifier le format de reponse
    "Content-Type": "application/json",
  };
  // const headers = {
  //     'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
  // };
  axios
    .get(Endpoints.ENDPOINT_GET_LOCATAIRES_REQUESTS, { headers: headers })
    .then((res) => {
      console.log("response =", res);
      let newResponse = res.data.map((locataire) => {
        return { ...locataire, ...locataire.locataire };
      });
      console.log("NEW response =", newResponse);
      dispatch(getAllLocatairesRequestsSuccess(newResponse, dispatch));
    })
    .catch((err) => {
      console.log("err =", err.response.data);
      dispatch(getAllLocatairesRequestsError(err.response.data, dispatch));
    });
};

// GET ALL LOC
export const getAllLocatairesLoading = () => {
  console.log("LOADING LOCATAIRES !");
  return {
    type: Actiontypes.GET_LOC_ALL_LOADING,
  };
};

export const getAllLocatairesError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));

  return {
    type: Actiontypes.GET_LOC_ALL_ERROR,
    payload: err,
  };
};

export const getAllLocatairesSuccess = (content) => {
  return {
    type: Actiontypes.GET_LOC_ALL_SUCESS,
    payload: content,
  };
};
export const fetchgetLocataires = () => (dispatch) => {
  dispatch(getAllLocatairesLoading());
  const headers = {
    // Pour athentification
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
    // pour specifier le format de reponse
    "Content-Type": "application/json",
  };
  // const headers = {
  //     'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
  // };
  axios
    .get(Endpoints.ENDPOINT_GET_ALL_LOCATAIRES, { headers: headers })
    .then((res) => {
      console.log("response =", res);
      let newResponse = res.data;
      console.log("NEW response =", newResponse);
      dispatch(getAllLocatairesSuccess(newResponse, dispatch));
    })
    .catch((err) => {
      console.log("err =", err.response.data);
      dispatch(getAllLocatairesError(err.response.data, dispatch));
    });
};

export const fetchgetDeverouillageRequests = () => (dispatch) => {
  dispatch(getAllLocatairesRequestsLoading());
  const headers = {
    // Pour athentification
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
    // pour specifier le format de reponse
    "Content-Type": "application/json",
  };
  // const headers = {
  //     'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
  // };
  axios
    .get(Endpoints.ENDPOINT_GET_DEVEROUILLAGE_REQUESTS, { headers: headers })
    .then((res) => {
      console.log("response =", res);
      dispatch(getAllLocatairesRequestsSuccess(res.data, dispatch));
    })
    .catch((err) => {
      console.log("err =", err.response.data);
      dispatch(getAllLocatairesRequestsError(err.response.data, dispatch));
    });
};

// ACCEPT LOCATAIRE REQUEST

const acceptLocataireLoading = () => {
  return {
    type: Actiontypes.POST_ACCEPT_LOCATAIRE_LOADING,
  };
};

const acceptLocataireSuccess = (data, dispatch) => {
  dispatch(
    setSnackBarContent("Le demande est accepté avec succées", "success")
  );
  return {
    type: Actiontypes.POST_ACCEPT_LOCATAIRE_SUCCESS,
    payload: data,
  };
};

const acceptLocataireError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));
  return {
    type: Actiontypes.POST_ACCEPT_LOCATAIRE_ERROR,
    paylaod: err,
  };
};

export const fetchAcceptLocataire = (email) => (dispatch) => {
  console.log("EMAIL = ", email);
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
    "Content-Type": "application/json",
  };
  dispatch(acceptLocataireLoading());
  const options = {
    headers: headers,
  };
  return new Promise((resolve, reject) => {
    axios
      .post(Endpoints.ENDPOINT_POST_ACCEPT_LOCATAIRE, { email: email }, options)
      .then((res) => {
        dispatch(acceptLocataireSuccess(res.response, dispatch));
        resolve();
      })
      .catch((err) => {
        if (err?.response?.data) {
          console.log("RESPONSE=", err.response.data.errors[0].msg);
          dispatch(
            acceptLocataireError(err.response.data.errors[0].msg, dispatch)
          );
          reject(err.response.data);
        } else {
          console.log(err.message);
          dispatch(acceptLocataireError(err), dispatch);
          reject(err.message);
        }
      });
  });
};

// REJECT LOCATAIRE REQUEST

const rejectLocataireLoading = () => {
  return {
    type: Actiontypes.POST_REJECT_LOCATAIRE_LOADING,
  };
};

const rejectLocataireSuccess = (data, dispatch) => {
  dispatch(
    setSnackBarContent("le reject est effectué avec succées", "success")
  );
  return {
    type: Actiontypes.POST_REJECT_LOCATAIRE_SUCCESS,
    payload: data,
  };
};

const rejectlocataireError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));
  return {
    type: Actiontypes.POST_REJECT_LOCATAIRE_ERROR,
    paylaod: err,
  };
};

export const fetchRejectLocataire = ({ locataireEmail, rejectMessage }) => (
  dispatch
) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
  };
  dispatch(rejectLocataireLoading());
  const options = {
    headers: { ...headers, "Content-Type": "application/json" },
  };
  // let formattedCouponToPost={...couponToPost , }
  return new Promise((resolve, reject) => {
    axios
      .post(
        Endpoints.ENDPOINT_POST_REJECT_LOCATAIRE,
        { email: locataireEmail, justificatif: rejectMessage },
        options
      )
      .then((res) => {
        // dispatch(addPostSuccess(res.data));
        dispatch(rejectLocataireSuccess(res.data, dispatch));
        resolve();
      })
      .catch((err) => {
        if (err?.response?.data) {
          console.log("RESPONSE=", err.response.data.errors[0].msg);
          dispatch(
            rejectlocataireError(err.response.data.errors[0].msg, dispatch)
          );
          reject(err.response.data);
        } else {
          console.log(err.message);
          dispatch(rejectlocataireError(err, dispatch));
          reject(err.message);
        }
        console.log("ERROR OBJECT = ", err);
        reject(err.message);
      });
  });
};

// GET ALL DECIDEURS PROFILES

export const getAllDecideursProfilesLoading = () => {
  return {
    type: Actiontypes.GET_DECIDEURS_PROFILES_LOADING,
  };
};

export const getAllDecideursProfilesError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));

  return {
    type: Actiontypes.GET_DECIDEURS_PROFILES_ERROR,
    payload: err,
  };
};

export const getAllDecideursProfilesSuccess = (content) => {
  return {
    type: Actiontypes.GET_DECIDEURS_PROFILES_SUCCESS,
    payload: content,
  };
};

export const fetchgetDecideursProfiles = () => (dispatch) => {
  dispatch(getAllDecideursProfilesLoading());
  const headers = {
    // Pour athentification
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
    // pour specifier le format de reponse
    "Content-Type": "application/json",
  };

  axios
    .get(Endpoints.ENDPOINT_GET_DECIDEURS_PROFILES, { headers: headers })
    .then((res) => {
      console.log("response =", res);
      dispatch(getAllDecideursProfilesSuccess(res.data, dispatch));
    })
    .catch((err) => {
      console.log("err =", err.response.data);
      dispatch(getAllDecideursProfilesError(err.response.data, dispatch));
    });
};

// ADD DECIDEUR REQUEST

const addDecideurLoading = () => {
  return {
    type: Actiontypes.POST_ADD_DECIDEUR_LOADING,
  };
};

const addDecideurSuccess = (data, dispatch) => {
  dispatch(
    setSnackBarContent("Le profile a été ajouté avec succées", "success")
  );
  return {
    type: Actiontypes.POST_ADD_DECIDEUR_SUCCESS,
    payload: data,
  };
};

const addDecideurError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));
  return {
    type: Actiontypes.POST_ADD_DECIDEUR_ERROR,
    paylaod: err,
  };
};

export const fetchAddDecideur = (newdata) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
  };
  dispatch(addDecideurLoading());
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("gacela-token")}`
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(Endpoints.ENDPOINT_POST_ADD_DECIDEUR, newdata, options)
      .then((res) => {
        dispatch(addDecideurSuccess(res.response, dispatch));
        resolve();
      })
      .catch((err) => {
        console.log("ERROR  =",err.response)
        if (err?.response?.data) {
          if(err.response.data?.errors){
            console.log("RESPONSE=", err.response.data.errors[0].msg);
            dispatch(addDecideurError(err.response.data.errors[0].msg, dispatch));
            reject(err.response.data);
          }else{
            console.log("RESPONSE=", err.response.data);
            dispatch(addDecideurError(err.response.data, dispatch));
            reject(err.response.data);
          }

        } else {
          console.log(err.message);
          dispatch(addDecideurError(err), dispatch);
          reject(err.message);
        }
      });
  });
};

// UPDATE DECIDEUR PROFILE

const updateDecideurDecideurLoading = (email_update) => {
  return {
    type: email_update
      ? Actiontypes.PUT_UPDATE_DECIDEUR_EMAIL_LOADING
      : Actiontypes.PUT_UPDATE_DECIDEUR_PASSWORD_LOADING,
  };
};

const updateDecideurDecideursuccess = (email_update, data, dispatch) => {
  dispatch(
    setSnackBarContent(
      "Le profile séléctioné a été mise à jour avec succés",
      "success"
    )
  );
  return {
    type: email_update
      ? Actiontypes.PUT_UPDATE_DECIDEUR_EMAIL_SUCCESS
      : Actiontypes.PUT_UPDATE_DECIDEUR_PASSWORD_SUCCESS,
    payload: data,
  };
};

const updateDecideurError = (email_update, err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));
  return {
    type: email_update
      ? Actiontypes.PUT_UPDATE_DECIDEUR_EMAIL_ERROR
      : Actiontypes.PUT_UPDATE_DECIDEUR_PASSWORD_ERROR,
    payload: err,
  };
};

export const fetchUpdateDecideur = (data, id) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
  };
  const email_update = data.hasOwnProperty("email");
  dispatch(updateDecideurDecideurLoading(email_update));
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  // let formattedCouponToPost={...couponToPost , }
  const url =
    (email_update
      ? Endpoints.ENDPOINT_PUT_UPDATE_DECIDEUR_EMAIL
      : Endpoints.ENDPOINT_PUT_UPDATE_DECIDEUR_PASSSWORD) + id;
  console.log("url =", url);
  return new Promise((resolve, reject) => {
    axios
      .put(url, data, options)
      .then((res) => {
        console.log("success", res);
        dispatch(
          updateDecideurDecideursuccess(email_update, res.data, dispatch)
        );
        resolve();
      })
      .catch((err) => {
        if (err?.response?.data) {
          console.log("RESPONSE=", err.response.data.errors[0].msg);
          dispatch(
            updateDecideurError(
              email_update,
              err.response.data.errors[0].msg,
              dispatch
            )
          );
          reject(err.response.data);
        } else {
          console.log(err?.message);
          dispatch(updateDecideurError(email_update, err), dispatch);
          reject(err.message);
        }
      });
  });
};

// TOGGLE BLOCK DECIDEUR PROFILE

const toggleBlockDecideurLoading = () => {
  return {
    type: Actiontypes.POST_TOGGLE_BLOCK_DECIDEUR_LOADING,
  };
};

const toggleBlockDecideursuccess = (data, dispatch) => {
  dispatch(
    setSnackBarContent(
      "Le profile séléctioné a été " +
        (data?.message.includes("The account is blocked")
          ? "bloqué"
          : "débloqué") +
        " avec succés",
      "success"
    )
  );
  return {
    type: Actiontypes.POST_TOGGLE_BLOCK_DECIDEUR_SUCCESS,
    payload: data,
  };
};

const toggleBlockDecideurError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));
  return {
    type: Actiontypes.POST_TOGGLE_BLOCK_DECIDEUR_ERROR,
    payload: err,
  };
};

export const fetchToggleBlockDecideur = (email) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
  };
  dispatch(toggleBlockDecideurLoading());
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  // let formattedCouponToPost={...couponToPost , }
  return new Promise((resolve, reject) => {
    axios
      .patch(
        Endpoints.ENDPOINT_PATCH_TOGGLE_BLOCK_DECIDEUR,
        { email: email },
        options
      )
      .then((res) => {
        // dispatch(addPostSuccess(res.data));
        console.log("success", res);
        dispatch(toggleBlockDecideursuccess(res.data, dispatch));
        resolve();
      })
      .catch((err) => {
        if (err?.response?.data) {
          console.log("RESPONSE=", err.response.data.errors[0].msg);
          dispatch(
            toggleBlockDecideurError(err.response.data.errors[0].msg, dispatch)
          );
          reject(err.response.data);
        } else {
          console.log(err?.message);
          dispatch(toggleBlockDecideurError(err), dispatch);
          reject(err.message);
        }
      });
  });
};

// REMOVE DECIDEUR PROFILE

const removeDecideurLoading = () => {
  return {
    type: Actiontypes.POST_REMOVE_DECIDEUR_LOADING,
  };
};

const removeDecideursuccess = (data, dispatch) => {
  dispatch(
    setSnackBarContent(
      "Le profile séléctioné a été supprimé avec succés",
      "success"
    )
  );
  return {
    type: Actiontypes.POST_REMOVE_DECIDEUR_SUCCESS,
    payload: data,
  };
};

const removeDecideurError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));
  return {
    type: Actiontypes.POST_REMOVE_DECIDEUR_ERROR,
    paylaod: err,
  };
};

export const fetchRemoveDecideur = (email) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
  };
  dispatch(removeDecideurLoading());
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  // let formattedCouponToPost={...couponToPost , }
  return new Promise((resolve, reject) => {
    axios
      .delete(
        Endpoints.ENDPOINT_DELETE_REMOVE_DECIDEUR,
        { headers: { headers }, data: { email: email } },
        options
      )
      .then((res) => {
        // dispatch(addPostSuccess(res.data));
        dispatch(removeDecideursuccess(res.response, dispatch));
        resolve();
      })
      .catch((err) => {
        if (err?.response?.data) {
          console.log("RESPONSE=", err.response.data.errors[0].msg);
          dispatch(
            removeDecideurError(err.response.data.errors[0].msg, dispatch)
          );
          reject(err.response.data);
        } else {
          console.log(err.message);
          dispatch(removeDecideurError(err), dispatch);
          reject(err.message);
        }
      });
  });
};

// SNACKBAR MANAGEMENT
export const setSnackBarContent = (text, severity) => {
  return {
    type: Actiontypes.SET_SNACKBAR_CONTENT,
    payload: {
      text: text,
      severity: severity,
    },
  };
};

export const closeSnackBar = () => {
  return {
    type: Actiontypes.CLOSE_SNACKBAR,
  };
};

// GET ALL AMS

export const getAllAMSLoading = () => {
  return {
    type: Actiontypes.GET_ALL_AMS_LOADING,
  };
};

export const getAllAMSError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));

  return {
    type: Actiontypes.GET_ALL_AMS_ERROR,
    payload: err,
  };
};

export const getAllAMSSuccess = (content) => {
  return {
    type: Actiontypes.GET_ALL_AMS_SUCCESS,
    payload: content,
  };
};

export const fetchgetAMS = () => (dispatch) => {
  dispatch(getAllAMSLoading()); // loading=true
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
    "Content-Type": "application/json",
  };
  axios
    .get(Endpoints.ENDPOINT_GET_AMS, { headers: headers })
    .then((res) => {
      console.log("response =", res);
      dispatch(getAllAMSSuccess(res.data, dispatch));
    })
    .catch((err) => {
      console.log("err =", err.response.data);
      dispatch(getAllAMSError(err.response.data, dispatch));
    });
};

// ADD AM

const addAmLoading = () => {
  return {
    type: Actiontypes.POST_ADD_AM_LOADING,
  };
};

const addAmSuccess = (data, dispatch) => {
  dispatch(
    setSnackBarContent("Le profile a été ajouté avec succées", "success")
  );
  return {
    type: Actiontypes.POST_ADD_AM_SUCCESS,
    payload: data,
  };
};

const addAmError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));
  return {
    type: Actiontypes.POST_ADD_AM_ERROR,
    paylaod: err,
  };
};

export const fetchAddAm = (newdata) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
  };
  dispatch(addAmLoading());
  const options = {
    headers: { "Content-Type": "application/json" },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(Endpoints.ENDPOINT_POST_ADD_AM, newdata, options)
      .then((res) => {
        dispatch(addAmSuccess(res.response, dispatch));
        resolve();
      })
      .catch((err) => {
        if (err?.response?.data) {
          console.log("RESPONSE=", err.response.data.errors[0].msg);
          dispatch(addAmError(err.response.data.errors[0].msg, dispatch));
          reject(err.response.data);
        } else {
          console.log(err.message);
          dispatch(addAmError(err), dispatch);
          reject(err.message);
        }
      });
  });
};

// REMOVE AM

const removeAmLoading = () => {
  return {
    type: Actiontypes.POST_REMOVE_AM_LOADING,
  };
};

const removeAmsuccess = (data, dispatch) => {
  dispatch(
    setSnackBarContent(
      "Le profile séléctioné a été supprimé avec succés",
      "success"
    )
  );
  return {
    type: Actiontypes.POST_REMOVE_AM_SUCCESS,
    payload: data,
  };
};

const removeAmError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));
  return {
    type: Actiontypes.POST_REMOVE_AM_ERROR,
    paylaod: err,
  };
};

export const fetchRemoveAm = (email) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
  };
  dispatch(removeAmLoading());
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  return new Promise((resolve, reject) => {
    axios
      .delete(
        Endpoints.ENDPOINT_DELETE_REMOVE_AM,
        { headers: { headers }, data: { email: email } },
        options
      )
      .then((res) => {
        dispatch(removeAmsuccess(res.response, dispatch));
        resolve();
      })
      .catch((err) => {
        if (err?.response?.data) {
          console.log("RESPONSE=", err.response.data.errors[0].msg);
          dispatch(removeAmError(err.response.data.errors[0].msg, dispatch));
          reject(err.response.data);
        } else {
          console.log(err.message);
          dispatch(removeAmError(err), dispatch);
          reject(err.message);
        }
      });
  });
};

// GET AM

export const getAMLoading=()=>{
    return{
        type: Actiontypes.GET_AM_LOADING
    }
}

export const getAMError=(err,dispatch)=>{
    dispatch(setSnackBarContent(err, "error"))

    return{
        type : Actiontypes.GET_AM_ERROR,
        payload: err
    }
}


export const getAMSuccess=(content)=>{

    return{
        type: Actiontypes.GET_AM_SUCCESS,
        payload: content
    }
}

export const fetchgetAM=(id)=>(dispatch)=>{
    dispatch(getAMLoading());
    const options = {
        headers: { 'Content-Type': 'application/json'}

    };
    return new Promise(((resolve, reject) => {
        axios.get(Endpoints.ENDPOINT_GET_AM+id,{id:id}, options)
            .then(res=>{
                console.log("RESPONSE SUCCESS =", res);
                dispatch(getAMSuccess(res.data.data , dispatch));
                resolve('success')

            })
            .catch(err=>{
                if(err?.response?.data){
                    console.log("RESPONSE=",err.response.data.errors[0].msg);
                    dispatch(getAMError(err.response.data.errors[0].msg , dispatch));
                    reject(err.response.data);
                }else{
                    console.log(err.message);
                    dispatch(getAMError(err) , dispatch);
                    reject(err.message);
                }
            });
    }))
}

// GET ALL DEMANDES DE SUPPORTS

export const getAllDemandesSupportsLoading=()=>{
    return{
        type: Actiontypes.GET_ALL_DEMANDESSUPPORTS_LOADING
    }
}

export const getAllDemandesSupportsError=(err,dispatch)=>{
    dispatch(setSnackBarContent(err, "error"))

    return{
        type : Actiontypes.GET_ALL_DEMANDESSUPPORTS_ERROR,
        payload: err
    }
}


export const getAllDemandesSupportsSuccess=(content)=>{

    return{
        type: Actiontypes.GET_ALL_DEMANDESSUPPORTS_SUCCESS,
        payload: content
    }
}

export const fetchgetDemandesSupports=()=>(dispatch)=>{
    dispatch(getAllDemandesSupportsLoading());
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('gacela-token')}`,
        'Content-Type': 'application/json'
    };
    axios.get( Endpoints.ENDPOINT_GET_DEMANDESSUPPORTS,
        { headers: headers }
    )
        .then(res=>{
            console.log('response =', res);
            dispatch(getAllDemandesSupportsSuccess(res.data , dispatch))
        })
        .catch(err=>{
            console.log('err =', err.response.data);
            dispatch(getAllDemandesSupportsError(err.response.data , dispatch))
        });

}

// GET DEMANDE DE SUPPORT

export const getDemandeSupportLoading=()=>{
  return{
      type: Actiontypes.GET_DEMANDESUPPORT_LOADING
  }
}

export const getDemandeSupportError=(err,dispatch)=>{
  dispatch(setSnackBarContent(err, "error"))

  return{
      type : Actiontypes.GET_DEMANDESUPPORT_ERROR,
      payload: err
  }
}


export const getDemandeSupportSuccess=(content)=>{

  return{
      type: Actiontypes.GET_DEMANDESUPPORT_SUCCESS,
      payload: content
  }
}

export const fetchgetDemandeSupport=(id)=>(dispatch)=>{
  dispatch(getDemandeSupportLoading());
  const options = {
      headers: { 'Content-Type': 'application/json'}

  };
  return new Promise(((resolve, reject) => {
      axios.get(Endpoints.ENDPOINT_GET_DEMANDESUPPORT+id,{id:id}, options)
          .then(res=>{
              console.log("RESPONSE SUCCESS =", res);
              dispatch(getDemandeSupportSuccess(res.data.data , dispatch));
              resolve('success')

          })
          .catch(err=>{
              if(err?.response?.data){
                  console.log("RESPONSE=",err.response.data.errors[0].msg);
                  dispatch(getDemandeSupportError(err.response.data.errors[0].msg , dispatch));
                  reject(err.response.data);
              }else{
                  console.log(err.message);
                  dispatch(getDemandeSupportError(err) , dispatch);
                  reject(err.message);
              }
          });
  }))
}

// GET ALL VALIDATED LOCATAIRES

export const getAllValidatedLocatairesLoading=()=>{
  return{
    type: Actiontypes.GET_VALIDATED_LOCATAIRES_LOADING
  }
}

export const getAllValidatedLocatairesError=(err,dispatch)=>{
  dispatch(setSnackBarContent(err, "error"))

  return{
    type : Actiontypes.GET_VALIDATED_LOCATAIRES_ERROR,
    payload: err
  }
}


export const getAllValidatedLocatairesSuccess=(content)=>{

  return{
    type: Actiontypes.GET_VALIDATED_LOCATAIRES_SUCCESS,
    payload: content
  }
}

export const fetchgetValidatedLocataires=()=>(dispatch)=>{
  dispatch(getAllValidatedLocatairesLoading());
  const headers = {
    'Authorization': `Bearer ${localStorage.getItem('gacela-token')}`,
    'Content-Type': 'application/json'
  };
  axios.get( Endpoints.ENDPOINT_GET_VALIDATESLOCATAIRES,
      { headers: headers }
  )
      .then(res=>{
        console.log('response =', res);
        dispatch(getAllValidatedLocatairesSuccess(res , dispatch))
      })
      .catch(err=>{
        console.log('err =', err.response.data);
        dispatch(getAllValidatedLocatairesError(err.response.data , dispatch))
      });

}


// ReplySupport

const ReplySupportLoading = () => {
  return {
    type: Actiontypes.POST_REPLY_SUPPORT_LOADING,
  };
};

const ReplySupportSuccess = (post) => {
  return {
    type: Actiontypes.POST_REPLY_SUPPORT_SUCCESS,
    payload: post,
  };
};

const ReplySupportError = (err) => {
  return {
    type: Actiontypes.POST_REPLY_SUPPORT_ERROR,
    paylaod: err,
  };
};

export const fetchReplySupport = (idSupport,locataire_id,reply,admin_id) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  dispatch(ReplySupportLoading());
  const options = {
    headers: { ...headers, "Content-Type": "application/json" },
  };
  // let formattedCouponToPost={...couponToPost , }
  console.log("question To post =");
  return new Promise((resolve, reject) => {
    axios
        .post(Endpoints.ENDPOINT_GET_REPLYSUPPORT+idSupport,{ "locataire_id": locataire_id, "admin_id": admin_id, "message": reply }, options)
        .then((res) => {
          // dispatch(addPostSuccess(res.data));
          dispatch(ReplySupportSuccess(""));
          resolve();
        })
        .catch((err) => {
          console.log("ERROR OBJECT = ", err);
          dispatch(ReplySupportError(err.response.data.message));
          reject(err.message);
        });
  });
};

// GET REPLIES TO SUPPORTS
export const getRepliesSupportLoading = () => {
  return {
    // declancher un signal
    type: Actiontypes.GET_ALL_REPLYDEMANDESSUPPORTS_LOADING,
  };
};

export const getRepliesSupportError = (err) => {
  return {
    type: Actiontypes.GET_ALL_REPLYDEMANDESSUPPORTS_ERROR,
    payload: err,
  };
};

export const getRepliesSupportSuccess = (content) => {
  return {
    type: Actiontypes.GET_ALL_REPLYDEMANDESSUPPORTS_SUCCESS,
    payload: content,
  };
};

export const fetchgetRepliesSupport = (id) => (dispatch) => {
  dispatch(getRepliesSupportLoading());
  const headers = {
    // Pour athentification
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    // pour specifier le format de reponse
    "Content-Type": "application/json",
  };
  // const headers = {
  //     'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
  // };
  axios
      .get(Endpoints.ENDPOINT_GET_REPLYSUPPORT+id, { headers: headers })
      .then((res) => {
        console.log("response =", res);
        dispatch(getRepliesSupportSuccess(res.data));
      })
      .catch((err) => {
        console.log("err");
        dispatch(getRepliesSupportError(err.response.data.message));
      });
};


// GET RESERVATIONS EN COURS
export const getReservationEncoursLoading = () => {
  return {
    // declancher un signal
    type: Actiontypes.ENDPOINT_GET_RESERVATIONS_EN_COURS_LOADING,
  };
};

export const getReservationEncoursError = (err) => {
  return {
    type: Actiontypes.ENDPOINT_GET_RESERVATIONS_EN_COURS_ERROR,
    payload: err,
  };
};

export const getReservationEncoursSuccess = (content) => {
  return {
    type: Actiontypes.ENDPOINT_GET_RESERVATIONS_EN_COURS_SUCCESS,
    payload: content,
  };
};

export const fetchgetReservationEncours = () => (dispatch) => {
  dispatch(getReservationEncoursLoading());
  const headers = {
    // Pour athentification
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    // pour specifier le format de reponse
    "Content-Type": "application/json",
  };
  // const headers = {
  //     'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
  // };
  axios
      .get(Endpoints.ENDPOINT_GET_RESERVATIONS_EN_COURS, { headers: headers })
      .then((res) => {
        console.log("response =", res);
        dispatch(getReservationEncoursSuccess(res.data));
      })
      .catch((err) => {
        console.log("err");
        dispatch(getReservationEncoursError(err.response.data.message));
      });
};


// ReplySupport

const VehicleByIdLoading = () => {
  return {
    type: Actiontypes.ENDPOINT_GET_VEHICLE_ID_LOADING,
  };
};

const VehicleByIdSuccess = (post) => {
  return {
    type: Actiontypes.ENDPOINT_GET_VEHICLE_ID_SUCCESS,
    payload: post,
  };
};

const VehicleByIdError = (err) => {
  return {
    type: Actiontypes.ENDPOINT_GET_VEHICLE_ID_ERROR,
    paylaod: err,
  };
};

export const fetchVehicleById = (idVehicle) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  dispatch(VehicleByIdLoading());
  const options = {
    headers: { ...headers, "Content-Type": "application/json" },
  };
  // let formattedCouponToPost={...couponToPost , }
  console.log("question To post = __________________",Endpoints.ENDPOINT_GET_VEHICLE_BY_ID+idVehicle);
  return new Promise((resolve, reject) => {
    axios
        .get(Endpoints.ENDPOINT_GET_VEHICLE_BY_ID+'/all',{ headers: headers })
        .then((res) => {
          console.log("response =", res);
          dispatch(VehicleByIdSuccess(res.data));
        })

        .catch((err) => {
          console.log("ERROR OBJECT = ", err);
          dispatch(VehicleByIdError(err.response.data.message));
          reject(err.message);
        });
  });
};

// WEBSOCKET STUFF
export const testWebSocket = (arg) => {
  return {
    type: Actiontypes.WEBSOCKET_TEST,
    payload: arg,
  };
};
// GET ALL THE CARS FOR CARS VIEW
export const observeAllCarsData = (carsArr) => {
  return {
    type: Actiontypes.WEBSOCKET_FETCH_ALL_CARS,
    payload: carsArr,
  };
};

// OBSERVE CAR DATA CHANGE
export const observeCarData = (carData) => {
  return {
    type: Actiontypes.WEBSOCKET_OBSERVE_CAR_DATA,
    payload: carData,
  };
};

// UPDATE DECIDEUR PROFILE

export const updateDecideurProfilLoading = () => {
  return {
    type: Actiontypes.UPDATE_DECIDEUR_PROFIL_LOADING,
  };
};

export const updateDecideurProfilError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));

  return {
    type: Actiontypes.UPDATE_DECIDEUR_PROFIL_ERROR,
    payload: err,
  };
};

export const updateDecideurProfilSuccess = (content, dispatch) => {
  dispatch(setSnackBarContent("Update profile avec succées ! ", "success"));
  return {
    type: Actiontypes.UPDATE_DECIDEUR_PROFIL_SUCCESS,
    payload: content,
  };
};

export const fetchupdateDecideurProfil = (id, newData) => (dispatch) => {
  dispatch(updateDecideurProfilLoading());
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
    },
  };
  return new Promise((resolve, reject) => {
    axios
      // .put(Endpoints.ENDPOINT_PUT_DECIDEUR_PROFIL + id, newData, options)
      .put(
        Endpoints.ENDPOINT_PUT_DECIDEUR_PROFIL + id,
        { email: newData.email },
        options
      )
      .then((res) => {
        console.log("RESPONSE SUCCESS =", res);
        dispatch(updateDecideurProfilSuccess(newData, dispatch));
        resolve("success");
      })
      .catch((err) => {
        if (err?.response?.data) {
          console.log("RESPONSE=", err.response.data.errors[0].msg);
          dispatch(
            updateDecideurProfilError(err.response.data.errors[0].msg, dispatch)
          );
          reject(err.response.data);
        } else {
          console.log(err.message);
          dispatch(updateDecideurProfilError(err, dispatch));
          reject(err.message);
        }
      });
  });
};

export const getReportsListsLoading = () => {
  console.log("LOADING LOCATAIRES !");
  return {
    type: Actiontypes.GET_REPORTS_LISTS_LOADING,
  };
};

export const getReportsListsError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));

  return {
    type: Actiontypes.GET_REPORTS_LISTS_ERROR,
    payload: err,
  };
};

export const getReportsListsSuccess = (content) => {
  return {
    type: Actiontypes.GET_REPORTS_LISTS_SUCCESS,
    payload: content,
  };
};

// TODO : use this method in the statistics page
export const fetchgetReportsLists = () => (dispatch) => {
  dispatch(getReportsListsLoading());
  const headers = {
    // Pour athentification
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
    // pour specifier le format de reponse
    "Content-Type": "application/json",
  };
  // const headers = {
  //     'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
  // };
  axios
    .get(Endpoints.ENDPOINT_GET_REPORTS_LISTS, { headers: headers })
    .then((res) => {
      console.log("response =", res);
      let newResponse = res.data.map((locataire) => {
        return { ...locataire, ...locataire.locataire };
      });
      console.log("NEW response =", newResponse);
      dispatch(getReportsListsSuccess(newResponse, dispatch));
    })
    .catch((err) => {
      console.log("err =", err.response.data);
      dispatch(getReportsListsSuccess(err.response.data, dispatch));
    });
};

// GET ALL VEHICULES PROFILES

export const getAllVehiculesLoading = () => {
  return {
    type: Actiontypes.GET_ALL_VEHICULES_LOADING,
  };
};

export const getAllVehiculesError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));

  return {
    type: Actiontypes.GET_ALL_VEHICULES_ERROR,
    payload: err,
  };
};

export const getAllVehiculesSuccess = (content) => {
  return {
    type: Actiontypes.GET_ALL_VEHICULES_SUCCESS,
    payload: content,
  };
};

export const fetchgetAllVehicules = () => (dispatch) => {
  dispatch(getAllVehiculesLoading());
  const headers = {
    // Pour athentification
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
    // pour specifier le format de reponse
    "Content-Type": "application/json",
  };

  axios
    .get(Endpoints.ENDPOINT_GET_ALL_VEHICULES, { headers: headers })
    .then((res) => {
      console.log("response =", res);
      dispatch(getAllVehiculesSuccess(res.data, dispatch));
    })
    .catch((err) => {
      console.log("err =", err.response.data);
      dispatch(getAllVehiculesError(err.response.data, dispatch));
    });
};

//ADD VEHICULES

const addVehiculeLoading = () => {
  return {
    type: Actiontypes.POST_ADD_VEHICULE_LOADING,
  };
};

const addVehiculeSuccess = (data, dispatch) => {
  dispatch(
    setSnackBarContent("Le véhicule a été ajouté avec succées", "success")
  );
  return {
    type: Actiontypes.POST_ADD_VEHICULE_SUCCESS,
    payload: data,
  };
};

const addVehiculeError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));
  return {
    type: Actiontypes.POST_ADD_VEHICULE_ERROR,
    paylaod: err,
  };
};

export const fetchAddVehicule = (newVehicule, respo) => (dispatch) => {
  dispatch(addVehiculeLoading());
  const options = {
    headers: { "Content-Type": "application/json" },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(Endpoints.ENDPOINT_POST_ADD_VEHICULE, newVehicule, options)
      .then((res) => {
        new Promise((resolv, rejec) => {
          axios
            .post(
              Endpoints.ENDPOINT_POST_ASSIGN_VEHICULE,
              {
                matricule: newVehicule["matricule"],
                email: respo,
              },
              options
            )
            .then((res) => {
              dispatch(addVehiculeSuccess(res.response, dispatch));
              resolv();
            })
            .catch((err) => {
              if (err?.response?.data) {
                console.log("RESPONSE=", err.response.data.errors[0].msg);
                dispatch(
                  addVehiculeError(err.response.data.errors[0].msg, dispatch)
                );
                rejec(err.response.data);
              } else {
                console.log(err.message);
                dispatch(addVehiculeError(err), dispatch);
                rejec(err.message);
              }
            });
        }).then((r) => {
          resolve();
        });
      })
      .catch((err) => {
        if (err?.response?.data) {
          console.log("RESPONSE=", err.response.data.errors[0].msg);
          dispatch(addVehiculeError(err.response.data.errors[0].msg, dispatch));
          reject(err.response.data);
        } else {
          console.log(err.message);
          dispatch(addVehiculeError(err), dispatch);
          reject(err.message);
        }
      });
  });
};

// GET ALL REGIONS PROFILES

export const getAllRegionsLoading = () => {
  return {
    type: Actiontypes.GET_ALL_REGIONS_LOADING,
  };
};

export const getAllRegionsError = (err, dispatch) => {
  dispatch(setSnackBarContent(err, "error"));

  return {
    type: Actiontypes.GET_ALL_REGIONS_ERROR,
    payload: err,
  };
};

export const getAllRegionsSuccess = (content) => {
  return {
    type: Actiontypes.GET_ALL_REGIONS_SUCCESS,
    payload: content,
  };
};

export const fetchgetAllRegions = () => (dispatch) => {
  dispatch(getAllRegionsLoading());
  const headers = {
    // Pour athentification
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
    // pour specifier le format de reponse
    "Content-Type": "application/json",
  };

  axios
    .get(Endpoints.ENDPOINT_GET_ALL_REGIONS, { headers: headers })
    .then((res) => {
      console.log("response =", res);
      dispatch(getAllRegionsSuccess(res.data, dispatch));
    })
    .catch((err) => {
      console.log("err =", err.response.data);
      dispatch(getAllRegionsError(err.response.data, dispatch));
    });
};
