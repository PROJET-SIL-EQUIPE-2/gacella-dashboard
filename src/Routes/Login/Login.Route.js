import {Paper, useMediaQuery} from "@mui/material";
import {  FormGroup, Label, Input } from 'reactstrap'
import {Button} from "@mui/material";
import './styles.css'
import GacelaCar from "../../assets/images/Login/Gacella car.svg"
import GacelaTextBlue from "../../assets/images/Login/Gacella Text Blue.svg"
import React from "react";
import Navbar from "../../ui-component/navbar/Navbar" ; 
const  Login=()=>{

    const sm = useMediaQuery('(min-width:576px)');
    const md = useMediaQuery('(min-width:768px)');
    const lg = useMediaQuery('(min-width:992px)');
    const xl= useMediaQuery('(min-width:1200px)');

    return(
       
        <React.Fragment>
            
            <Navbar className="">  </Navbar>

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
                    <Paper style={{backgroundColor: 'rgba(234, 239, 245, 0.4)' , minHeight : "100%"}} className="loginPaper" elevation={4}>
                        <div className="d-flex flex-column ml-md-4">
                            <div style={{fontSize :"2rem"}} className="gacela-orange lora-700" >
                                Bienvenue à nouveau
                            </div>
                            <div style={{fontSize: "1.3rem"}} className="gacela-black21 lora-400">
                                Entrez vos informations d'identification pour continuer :
                            </div>
                            <div style={{marginTop : "1rem"}} className="h-100 d-flex flex-column">
                                <FormGroup>
                                    <Label className="roboto-700" for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" className="loginInput" placeholder="email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="roboto-700" for="examplePassword">Mot de passe</Label>
                                    <Input type="password" name="password" className="loginInput" id="examplePassword" placeholder="Mot de passe ..." />
                                </FormGroup>
                                <div className="d-flex justify-content-end">
                                    <div id="forgetPassword" className="roboto-500 gacela-blue-link mt-md-1 mb-md-3"> Mot de passe oublié ? </div>
                                </div>
                                <div className="w-100 mt-lg-3">
                                    <Button id="connectButton" className="w-100" variant="contained">Contained</Button>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Login;