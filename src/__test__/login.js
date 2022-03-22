import React from 'react';

function Login(username, password){
    if ( (username =='iz_mahdi@esi.dz') & (password == 'test')){
        return true;
    }
    else {
        return false;
    }
}

export default Login;
