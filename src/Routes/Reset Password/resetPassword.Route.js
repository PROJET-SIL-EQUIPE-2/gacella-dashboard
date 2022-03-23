import {Paper, useMediaQuery} from "@mui/material";
import {  FormGroup, Label, Input } from 'reactstrap'
import {Button} from "@mui/material";
import './styles.css'
import GacelaCar from "../../assets/images/Login/Gacella car.svg"
import GacelaTextBlue from "../../assets/images/Login/Gacella Text Blue.svg"
import React, {useState} from "react";
import {fetchResetPassword} from "../../redux/actions/actions";
import {useDispatch} from "react-redux";
const  ResetPassword=()=>{

    const sm = useMediaQuery('(min-width:576px)');
    const md = useMediaQuery('(min-width:768px)');
    const lg = useMediaQuery('(min-width:992px)');
    const xl= useMediaQuery('(min-width:1200px)');
    const [resetPasswordForm, setResetPasswordForm] = useState({});
    const dispatch = useDispatch();

    const submitResetPassword =()=>{
        dispatch(fetchResetPassword(resetPasswordForm));
    }
    return(
        <React.Fragment>
            <div className="d-none d-md-block" style={{height : "10vh"}}/>
            <div style={ md ?{height : "70vh"} : {height : "100vh"}} className="d-flex flex-md-row flex-column">
                <div className="col-md-6 d-none d-none d-md-flex  flex-column justify-content-center align-items-center" >
                    <img id="gacelaCarImg" src={GacelaCar} alt=""/>
                    <img className="mt-lg-3 mb-lg-3" src={GacelaTextBlue} alt=""/>
                    <div id="premierService" className="lora-600 gacela-orange">
                        Le premier service de véhicule autonome sans conducteur an Algerie
                    </div>
                </div>
                <div style={!md ? {padding : "0"}:{}} className="col-12 col-md-6">
                    <Paper style={{backgroundColor: 'rgba(234, 239, 245, 0.4)' , minHeight : "100%"}} className="loginPaper d-flex align-items-center justify-content-center" elevation={4}>
                        <div className="d-flex flex-column ml-md-4 w-100">
                            <div style={{fontSize :"2rem"}} className="gacela-orange lora-700" >
                                Mot de passe oublié
                            </div>
                            <div style={{fontSize: "1.3rem"}} className="gacela-black21 lora-400">
                                Saissez votre adresse e-mail ci-dessous
                            </div>
                            <div style={{marginTop : "1rem"}} className="h-100 d-flex flex-column">
                                <FormGroup>
                                    <Label className="roboto-700" for="exampleEmail">Email</Label>
                                    <Input onChange={(e)=>{setResetPasswordForm(oldState=>{ return{...oldState , [e.target.name] : e.target.value} })}} type="email" name="email" className="loginInput" placeholder="email" />
                                </FormGroup>
                                <div className="w-100 mt-lg-3">
                                    <Button onClick={submitResetPassword} disabled={!(resetPasswordForm.email?.length)} id="connectButton" className="w-100" variant="contained">Envoyer</Button>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        </React.Fragment>

    )
}

export default ResetPassword;
