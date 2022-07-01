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


const  GestionDecideurCompounent=()=>{
    const profile=null
    const [isTheDataChanged, setDataChangeStatus] = useState(false);
    const [changedInputs, setChangedInputs] = useState({});
    const [mdpFields, setMdpFields] = useState({});
    const auth=null;
    const history = useHistory()
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()




    const submitModifyProfil=()=>{
            submitChangeInputs()
                .then(()=>{
                    return swal({
                        title: "Done !",
                        text: "la mise à jour est faite  avec succées !",
                        icon: "success",
                    })
                })
                .then(()=>{
                    history.go(0);
                })
                .catch(err=>{
                    swal({
                        title: "ERROR !",
                        text: err.message,
                        icon: "error",
                    })
                })
        }


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
                        <div className="mt-lg-1 roboto-400" id="afterRebonjour">Type de compte : Dècidieur </div>
                    </div>
                </div>
                <div style={{borderBottom : "1px solid rgba(0, 0, 0, 0.09)"}} className="d-flex flex-column pt-lg-4 pb-lg-4">
                    <div className="d-flex mt-lg-2 mb-lg-2">
                        <div className="col-lg-12 pl-lg-2 roboto-500" style={{fontSize : "2.5rem"}}>Les informations de compte</div>
                    </div>
                    <div className="d-flex mt-lg-2 mb-lg-2 align-items-center">
                        <div className="col-lg-3 parametresLabel lora-400">Numéro de téléphone</div>
                        <div className="col-lg-9 lora-400 ">  <Input className="lora-400" onChange={(event)=>setChangedInputs(oldState=>{ return{...oldState , [event.target.name] : event.target.value} })} type="tel" name="phone_number"  defaultValue={user.data.accountData.phone_number}/></div>
                    </div>
                    <div className="d-flex mt-lg-2 mb-lg-2 align-items-center">
                        <div className="col-lg-3 parametresLabel lora-400">Email</div>
                        <div className="col-lg-9 lora-400">  <Input  onChange={(event)=>setChangedInputs(oldState=>{ return{...oldState , [event.target.name] : event.target.value} })} type="email" name="email"  defaultValue={user.data.accountData.email}/></div>
                    </div>

                </div>


                {/*{Object.getOwnPropertyNames(changedInputs).length || Object.getOwnPropertyNames(mdpFields).length===2 ? (*/}
                    <div style={{borderBottom : "1px solid rgba(0, 0, 0, 0.09)"}} className="d-flex flex-column pt-lg-4 pb-lg-4">
                        <Button  disabled={isSubmitButtonDisabled()} onClick={()=>submitModifyProfil()} startIcon={<Send className={clsx({'gacela-orange' : !isSubmitButtonDisabled()})}/>} style={{borderColor : "var(--main-beige)"}} className={ clsx("offset-lg-4 col-lg-4 lora-600" , {'gacela-orange' : !isSubmitButtonDisabled()}) } variant="outlined">Confirmer le changement du profile</Button>
                    </div>
                {/*):null}*/}
            </div>


        </React.Fragment>
    )
}


export default GestionDecideurCompounent;
