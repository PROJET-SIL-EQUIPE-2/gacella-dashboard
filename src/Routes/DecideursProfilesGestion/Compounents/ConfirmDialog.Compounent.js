import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './styles.css';
import {useDispatch} from "react-redux";
import {fetchRemoveDecideur} from "../../../redux/actions/actions";

export default function ConfrimDialog({isOpen , setOpen , decideurEmail}) {

    const dispatch = useDispatch();
    const submitRemove = ()=>{
        dispatch(fetchRemoveDecideur(decideurEmail))
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
                <DialogTitle style={{fontSize : "2rem"}} className="lora-700 gacela-orange">Confirmer la suppression</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{fontSize : "1.4rem"}} className="lora-400 gacela-black21 mb-lg-3">
                        Voulez-vous vraiment supprimer ce Compte : {decideurEmail} ?
                    </DialogContentText>
                    <div className="w-100 mt-lg-3 mt-lg-3">
                        <Button onClick={()=>submitRemove()} style={{color : "white"}} id="confirmButton" className="w-100" variant="contained">Confirmer</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
