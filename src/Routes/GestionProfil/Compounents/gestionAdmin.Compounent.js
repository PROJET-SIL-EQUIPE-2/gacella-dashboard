import React, {Fragment, useEffect, useState} from "react";
import {Avatar, Button} from "@mui/material";
import avatarImg from "../../../assets/images/avatar.png";
import {Input} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {Send} from "@mui/icons-material";
import swal from "sweetalert";
import {useHistory} from "react-router";
import clsx from "clsx";
import '../styles.css'
import {fetchupdateDecideurProfil} from "../../../redux/actions/actions";


const  GestionAdminCompounent=()=>{
    const profile=null
    const [isTheDataChanged, setDataChangeStatus] = useState(false);
    const [changedInputs, setChangedInputs] = useState({});
    const [mdpFields, setMdpFields] = useState({});
    const auth=null;
    const history = useHistory()
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()







    const submitChangeInputs=()=>{
        dispatch(fetchupdateDecideurProfil(user.data.accountData.decideur_id , changedInputs))
    }
    const isSubmitButtonDisabled =()=>{
        return !Object.getOwnPropertyNames(changedInputs).length
    }
    return(
        <React.Fragment>
            <div className="p-4">
                <div className="d-flex">
                    <Avatar src={avatarImg} className="profile-avatar-principal"/>
                    <div className="d-flex flex-column pl-lg-4">
                        <div  className="roboto-700" id="rebonjour"> Re-Bonjour, <span style={{fontWeight : "lighter"}}> {user.data.accountData.family_name} {user.data.accountData.name} </span> </div>
                        <div className="mt-lg-1 roboto-400" id="afterRebonjour">Type de compte : {user.data.accountData.isSuperAdmin ? 'Super' : null } Admin </div>
                    </div>
                </div>
                <div style={{borderBottom : "1px solid rgba(0, 0, 0, 0.09)"}} className="d-flex flex-column pt-lg-4 pb-lg-4">
                    <div className="d-flex mt-lg-2 mb-lg-2">
                        <div className="col-lg-12 pl-lg-2 roboto-500" style={{fontSize : "2.5rem"}}>Les informations de compte</div>
                    </div>
                    <div className="d-flex mt-lg-2 mb-lg-2 align-items-center">
                        <div className="col-lg-3 parametresLabel lora-400">Email</div>
                        <div className="col-lg-9 lora-400">  <Input  disabled={true} onChange={(event)=>setChangedInputs(oldState=>{ return{...oldState , [event.target.name] : event.target.value} })} type="email" name="email"  defaultValue={user.data.accountData.email}/></div>
                    </div>

                </div>


                {/*{Object.getOwnPropertyNames(changedInputs).length || Object.getOwnPropertyNames(mdpFields).length===2 ? (*/}

                {/*):null}*/}
            </div>


        </React.Fragment>
    )
}


export default GestionAdminCompounent;
