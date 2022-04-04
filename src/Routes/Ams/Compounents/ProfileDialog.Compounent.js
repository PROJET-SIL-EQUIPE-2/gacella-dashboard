import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FormGroup, Input, Label} from "reactstrap";
import './styles.css'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {fetchRejectLocataire} from "../../../redux/actions/actions";

export default function RejectDialog({isOpen , setOpen , locataireEmail}) {


    const [rejectMessage, setRejectMessage] = useState("");
    const dispatch = useDispatch();
    const submitReject = ()=>{
        dispatch(fetchRejectLocataire({locataireEmail : locataireEmail , rejectMessage : rejectMessage}))
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
                <DialogTitle style={{fontSize : "2rem"}} className="lora-700 gacela-orange">Argument du rejet</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{fontSize : "1.4rem"}} className="lora-400 gacela-black21 mb-lg-3">
                        Entrez votre justificatif du rejet pour continuer
                    </DialogContentText>
                    <FormGroup>
                        <Input onChange={(e)=>setRejectMessage(e.target.value)} style={{minHeight : "8rem" }} type="textarea" name="password"  id="rejectDialogTextArea" placeholder="Justificatif du rejet ..."/>
                    </FormGroup>
                    <div className="w-100 mt-lg-3 mt-lg-3">
                        <Button onClick={()=>submitReject()} style={{color : "white"}} id="connectButton" className="w-100" variant="contained">Envoyer </Button>
                    </div>
                </DialogContent>

            </Dialog>
        </div>
    );
}
