import {Avatar,  TextField} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Input} from "reactstrap";
import "./styles.css";
import {useLocation} from "react-router";
import {history} from "../../index";
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import GestionDecideurCompounent from "./Compounents/gestionDecideur.Compounent";
import GestionAdminCompounent from "./Compounents/gestionAdmin.Compounent";


function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const GestionProfilRoute =()=>{
    const historyHooks = useHistory()
    const user=useSelector(state=>state.user);
    const submitModifyAccountInfo=()=>{

    }



    switch (user.data.accountType){
        case "Decideur":
            return <GestionDecideurCompounent/>
        case "Admin":
            return <GestionAdminCompounent/>;
        default:
            return null
    }
}

export default GestionProfilRoute;
