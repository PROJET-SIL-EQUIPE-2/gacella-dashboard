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


// TEMPLATE GET ALL METHOD



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

