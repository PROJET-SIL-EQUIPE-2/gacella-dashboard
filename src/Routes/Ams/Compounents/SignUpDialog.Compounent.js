import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './styles.css';
import {useDispatch} from "react-redux";
import {fetchAddAm, fetchRemoveAm} from "../../../redux/actions/actions";
import {FormGroup, Input, Label} from "reactstrap";
import {useState} from "react";
import {useTssEmotionCache} from "tss-react/cache";

export default function ConfrimDialog({isOpen , setOpen}) {

    const dispatch = useDispatch();
    const [signUpForm, setSignUpForm] = useState({});
    const submitUser = ()=>{
        delete signUpForm.confirmPassword ;
        dispatch(fetchAddAm(signUpForm))
            .then(()=>{
                    setTimeout(()=>{
                        window.location.reload(false);
                    },1500)
            })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog className="p-2" open={isOpen} onClose={handleClose}>
                <DialogTitle style={{fontSize : "2rem"}} className="lora-700 gacela-orange">Nouveau compte d'un agent de maintenance</DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        <div style={{marginTop : "1rem"}} className="h-100 d-flex flex-column">
                            <FormGroup>
                                <Label className="roboto-700" for="name">Prénom</Label>
                                <Input onChange={(e)=>{setSignUpForm(oldState=>{ return{...oldState , [e.target.name] : e.target.value} })}} type="text" name="name" className="signUpInput" id="name" placeholder="prénom" />
                            </FormGroup>

                            <FormGroup>
                                <Label className="roboto-700" for="family_name">Nom</Label>
                                <Input onChange={(e)=>{setSignUpForm(oldState=>{ return{...oldState , [e.target.name] : e.target.value} })}} type="text" name="family_name" className="signUpInput" id="family_name" placeholder="nom" />
                            </FormGroup>

                            <FormGroup>
                                <Label className="roboto-700" for="phone_number">Téléphone</Label>
                                <Input onChange={(e)=>{setSignUpForm(oldState=>{ return{...oldState , [e.target.name] : e.target.value} })}} type="phone" name="phone_number" className="signUpInput" id="phone_number" placeholder="téléphone" />
                            </FormGroup>

                            <FormGroup>
                                <Label className="roboto-700" for="email">Email</Label>
                                <Input onChange={(e)=>{setSignUpForm(oldState=>{ return{...oldState , [e.target.name] : e.target.value} })}}  type="email" name="email" className="signUpInput" placeholder="email" />
                            </FormGroup>

                            <FormGroup>
                                <Label className="roboto-700" for="password">Mot de passe</Label>
                                <Input onChange={(e)=>{setSignUpForm(oldState=>{ return{...oldState , [e.target.name] : e.target.value} })}} type="password" name="password" className="signUpInput" id="password" placeholder="Mot de passe ..." />
                            </FormGroup>

                            <FormGroup>
                                <Label className="roboto-700" for="confirmPassword">Confirmer le mot de passe</Label>
                                <Input onChange={(e)=>{setSignUpForm(oldState=>{ return{...oldState , [e.target.name] : e.target.value} })}} type="password" name="confirmPassword" className="signUpInput" id="confirmPassword" placeholder="confirmer le mot de passe ..." />
                            </FormGroup>
                        </div>
                        <div className="w-100 mt-lg-3 mt-lg-3">
                            <Button onClick={()=>submitUser()} style={{color : "white"}} disabled={!(signUpForm.name?.length && signUpForm.family_name?.length && signUpForm.phone_number?.length && signUpForm.email?.length && signUpForm.password?.length && signUpForm.confirmPassword == signUpForm.password ) } id="signUpButton" className="w-100" variant="contained">Ajouter</Button>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}