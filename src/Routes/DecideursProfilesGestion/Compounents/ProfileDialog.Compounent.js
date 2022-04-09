import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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

export default function ProfileDialog({isOpen , setOpen , decideurId}) {


    /*
    const [rejectMessage, setRejectMessage] = useState("");
    const dispatch = useDispatch();
    const submitReject = ()=>{
        dispatch(fetchRejectLocataire({locataireEmail : decideurId , rejectMessage : rejectMessage}))
            .then(()=>{
                    setTimeout(()=>{
                        window.location.reload(false);
                    },1500)
            })
    }
     */

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog className="p-2" open={isOpen} onClose={handleClose}>
                <DialogTitle style={{fontSize : "2rem"}} className="lora-700 gacela-orange">Détails</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{fontSize : "1.4rem"}} className="lora-400 gacela-black21 mb-lg-3">
                        datails {decideurId}
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </div>
    );
}
