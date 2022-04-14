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

export default function PhotosDialog({imageSource , setOpen}) {


    const handleClose = () => {
        setOpen(null);
    };

    return (
        <div>
            <Dialog className="p-2" open={imageSource} onClose={handleClose}>
                <DialogContent>
                    <img style={{width: '-webkit-fill-available'}} src={imageSource} alt=""/>
                </DialogContent>

            </Dialog>
        </div>
    );
}
