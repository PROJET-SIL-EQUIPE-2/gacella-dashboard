import * as Actiontypes from "./actionsTypes";
import * as Endpoints from "../endpoints";
import axios from "axios"

// TEMPLATE GET METHOD
export const getAllPostsLoading=()=>{
    return{
        // declancher un signal
        type: Actiontypes.GET_ALL_POSTS_LOADING
    }
}

export const getAllPostsError=(err)=>{
    return{
        type : Actiontypes.GET_ALL_POSTS_ERROR,
        payload: err
    }
}


export const getAllPostsSuccess=(content)=>{
    return{
        type: Actiontypes.GET_ALL_POSTS_SUCCESS,
        payload: content
    }
}


export const fetchAllPosts=()=>(dispatch)=>{
    dispatch(getAllPostsLoading());
    const headers = {
        // Pour athentification
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        // pour specifier le format de reponse
        'Content-Type': 'application/json'
    };
    // const headers = {
    //     'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
    // };
    axios.get( Endpoints.ENDPOINT_GET_POSTS,
        { headers: headers }
    )
    .then(res=>{
        console.log('response =', res);
        dispatch(getAllPostsSuccess(res.data))
    })
    .catch(err=>{
        console.log('err');
        dispatch(getAllPostsError(err.response.data.message))
    });

}


// TEMPLATE POST METHOD



const addPostLoading=()=>{
    return{
        type : Actiontypes.POST_POST_LOADING,
    }
}

const addPostSuccess=(post)=>{
    return{
        type : Actiontypes.POST_POST_SUCCESS,
        payload : post
    }
}

const addPostError=(err)=>{
    return{
        type : Actiontypes.GET_ALL_POSTS_ERROR,
        paylaod : err

    }
}

export const fetchAddPost=(postToAdd)=>(dispatch)=>{
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    dispatch(addPostLoading());
    const options = {
        headers: {...headers, 'Content-Type': 'application/json'}

    };
    // let formattedCouponToPost={...couponToPost , }
    console.log('question To post =', postToAdd);
    return new Promise(((resolve, reject) => {
        axios.post(Endpoints.ENDPOINT_POST_POST , options)
            .then(res=>{
                // dispatch(addPostSuccess(res.data));
                dispatch(addPostSuccess(""));
                resolve();
            })
            .catch(err=>{
                console.log('ERROR OBJECT = ' , err);
                dispatch(addPostError(err.response.data.message));
                reject(err.message);
            });
    }))

}


export const templateOpenMenu=(id)=>{
    return{
        type : Actiontypes.TEMPLATE_MENU_OPEN,
        id: id
    }
}

export const templateSetMenu=(id)=>{
    return{
        type : Actiontypes.TEMPLATE_SET_MENU,
        opened : id
    }
}



// LOGIN

const loginLoading=()=>{
    return{
        type : Actiontypes.POST_LOGIN_LOADING,
    }
}

const loginSuccess=(data , dispatch)=>{
    dispatch(setSnackBarContent("Login avec succées ! ", "success"))
    return{
        type : Actiontypes.POST_LOGIN_SUCCESS,
        payload : data
    }
}

const loginError=(err)=>(dispatch)=>{
    dispatch(setSnackBarContent(err, "error"))

    return{
        type : Actiontypes.POST_LOGIN_ERROR,
        paylaod : err

    }
}

export const fetchLogin=({email , password})=>(dispatch)=>{
    // const headers = {
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`
    // };
    dispatch(loginLoading());
    const options = {
        headers: { 'Content-Type': 'application/json'}

    };
    // let formattedCouponToPost={...couponToPost , }
    return new Promise(((resolve, reject) => {
        axios.post(Endpoints.ENDPOINT_POST_LOGIN , {email  : email, password : password}, options)
            .then(res=>{
                console.log("RESPONSE SUCCESS =", res);
                // dispatch(addPostSuccess(res.data));
                dispatch(loginSuccess(res.data.data , dispatch));
                resolve()

            })
            .catch(err=>{
                if(err?.response?.data?.data?.message){
                    console.log(err.response.data.data.message);
                    dispatch(loginError(err.response.data.data.message , dispatch));
                    reject(err.response.data.data.message);
                }else{
                    console.log(err.message);
                    dispatch(loginError(err.message , dispatch));
                    reject(err.message);
                }

            });
    }))

}


// RESET PASSWORD


const resetPasswordLoading=()=>{
    return{
        type : Actiontypes.POST_RESET_PASSWORD_LOADING,
    }
}

const resetPassswordSuccess=(data , dispatch)=>{
    dispatch(setSnackBarContent(data, "success"))

    return{
        type : Actiontypes.POST_RESET_PASSWORD_SUCCESS,
        payload : data
    }
}

const resetPasswordError=(err , dispatch)=>{
    dispatch(setSnackBarContent(err, "error"))

    return{
        type : Actiontypes.POST_RESET_PASSWORD_ERROR,
        paylaod : err

    }
}

export const fetchResetPassword=({email})=>(dispatch)=>{
    // const headers = {
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`
    // };
    dispatch(resetPasswordLoading());
    const options = {
        headers: { 'Content-Type': 'application/json'}

    };
    // let formattedCouponToPost={...couponToPost , }
    return new Promise(((resolve, reject) => {
        axios.post(Endpoints.ENDPOINT_POST_RESET_PASSWORD , {email  : email}, options)
            .then(res=>{
                // dispatch(addPostSuccess(res.data));
                console.log("RESPONSE SUCCESS =", res);
                dispatch(resetPassswordSuccess(res.data , dispatch));
                resolve();
            })
            .catch(err=>{
                if(err?.response?.data){
                    console.log("RESPONSE=",err.response);
                    dispatch(resetPasswordError(err.response.data , dispatch));
                    reject(err.response.data);
                }else{
                    console.log(err.message);
                    dispatch(resetPasswordError(err.message , dispatch));
                    reject(err.message);
                }

            });
    }))

}


// GET ALL LOCATAIRES REQUESTS

export const getAllLocatairesRequestsLoading=()=>{
    return{
        type: Actiontypes.GET_LOCATAIRES_REQUESTS_LOADING
    }
}

export const getAllLocatairesRequestsError=(err,dispatch)=>{
    dispatch(setSnackBarContent(err, "error"))

    return{
        type : Actiontypes.GET_LOCATAIRES_REQUESTS_ERROR,
        payload: err
    }
}


export const getAllLocatairesRequestsSuccess=(content)=>{

    return{
        type: Actiontypes.GET_LOCATAIRES_REQUESTS_SUCCESS,
        payload: content
    }
}

export const fetchgetLocatairesRequests=()=>(dispatch)=>{
    dispatch(getAllLocatairesRequestsLoading());
    const headers = {
        // Pour athentification
        'Authorization': `Bearer ${localStorage.getItem('gacela-token')}`,
        // pour specifier le format de reponse
        'Content-Type': 'application/json'
    };
    // const headers = {
    //     'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
    // };
    axios.get( Endpoints.ENDPOINT_GET_LOCATAIRES_REQUESTS,
        { headers: headers }
    )
        .then(res=>{
            console.log('response =', res);
            dispatch(getAllLocatairesRequestsSuccess(res.data , dispatch))
        })
        .catch(err=>{
            console.log('err =', err.response.data);
            dispatch(getAllLocatairesRequestsError(err.response.data , dispatch))
        });

}


// ACCEPT LOCATAIRE REQUEST


const acceptLocataireLoading=()=>{
    return{
        type : Actiontypes.POST_ACCEPT_LOCATAIRE_LOADING,
    }
}

const acceptLocataireSuccess=(data)=>{
    return{
        type : Actiontypes.POST_ACCEPT_LOCATAIRE_SUCCESS,
        payload : data
    }
}

const acceptLocataireError=(err)=>{
    return{
        type : Actiontypes.POST_ACCEPT_LOCATAIRE_ERROR,
        paylaod : err

    }
}

export const fetchAcceptLocataire=(locataireId)=>(dispatch)=>{
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('gacela-token')}`
    };
    dispatch(acceptLocataireLoading());
    const options = {
        headers: { 'Content-Type': 'application/json'}

    };
    // let formattedCouponToPost={...couponToPost , }
    return new Promise(((resolve, reject) => {
        axios.post(Endpoints.ENDPOINT_POST_ACCEPT_LOCATAIRE , locataireId, options)
            .then(res=>{
                // dispatch(addPostSuccess(res.data));
                dispatch(acceptLocataireSuccess(res));
                resolve();
            })
            .catch(err=>{
                console.log('ERROR OBJECT = ' , err);
                dispatch(acceptLocataireError(err));
                reject(err.message);
            });
    }))

}


// REJECT LOCATAIRE REQUEST


const rejectLocataireLoading=()=>{
    return{
        type : Actiontypes.POST_REJECT_LOCATAIRE_LOADING,
    }
}

const rejectLocataireSuccess=(data)=>{
    return{
        type : Actiontypes.POST_REJECT_LOCATAIRE_SUCCESS,
        payload : data
    }
}

const rejectlocataireError=(err)=>{
    return{
        type : Actiontypes.POST_REJECT_LOCATAIRE_ERROR,
        paylaod : err

    }
}

export const fetchRejectLocataire=(data)=>(dispatch)=>{
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('gacela-token')}`
    };
    dispatch(rejectLocataireLoading());
    const options = {
        headers: { ...headers , 'Content-Type': 'application/json'}

    };
    // let formattedCouponToPost={...couponToPost , }
    return new Promise(((resolve, reject) => {
        axios.post(Endpoints.ENDPOINT_POST_REJECT_LOCATAIRE , data, options)
            .then(res=>{
                // dispatch(addPostSuccess(res.data));
                dispatch(rejectLocataireSuccess(res));
                resolve();
            })
            .catch(err=>{
                console.log('ERROR OBJECT = ' , err);
                dispatch(rejectlocataireError(err));
                reject(err.message);
            });
    }))

}


// SNACKBAR MANAGEMENT
export const setSnackBarContent=(text , severity)=>{
    return {
        type : Actiontypes.SET_SNACKBAR_CONTENT,
        payload : {
            text : text,
            severity : severity
        }
    }
}

export const closeSnackBar=()=>{
    return {
        type : Actiontypes.CLOSE_SNACKBAR
    }
}
