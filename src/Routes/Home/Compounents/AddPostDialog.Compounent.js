import {AppBar, Button, Dialog, IconButton, Slide, TextField, Toolbar, Typography} from "@mui/material";
import React, {useState} from "react";
import {Close} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {fetchAddPost} from "../../../redux/actions/actions";
import swal from "sweetalert";
import PropTypes from "prop-types";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddPostDialogCompounent=({isOpen , handleClose  })=>{
    const [addPostForm, setAddPostForm] = useState({userId : 1 , id :101});

    const dispatch = useDispatch();
    const submitAddPost=()=>{
        dispatch(fetchAddPost(addPostForm))
            .then(()=>{
                handleClose();
                return swal({
                    title: "Done !",
                    text: "La création de post  est faite avec succés !",
                    icon: "success",
                })
            })
            .catch(err=>{
                return swal({
                    title: "ERROR !",
                    text: err.message,
                    icon: "error",
                })
            })
    }
    return(
        <Dialog
            fullScreen
            open={isOpen}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <Close/>
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Create a post
                    </Typography>
                    <Button autoFocus color="inherit" onClick={()=>submitAddPost()}>
                        save
                    </Button>
                </Toolbar>
            </AppBar>
            <div className="d-flex flex-column">
                <div className="pl-2 pr-2">
                    <TextField
                        fullWidth
                        margin="dense"
                        id="name"
                        name="title"
                        defaultValue={""}
                        onChange={(e)=>{ setAddPostForm(oldState=>{return {...oldState , [e.target.name] : e.target.value} })}}
                        label="Titre de post"
                        variant="standard"
                    />
                </div>
                <div className="pl-2 pr-2">
                    <TextField
                        multiline
                        rows={4}
                        fullWidth
                        margin="dense"
                        id="description"
                        onChange={(e)=>{ setAddPostForm(oldState=>{return {...oldState , [e.target.name] : e.target.value} })}}
                        defaultValue={""}
                        name="body"
                        label="Body de post"
                        variant="standard"
                    />
                </div>
            </div>

        </Dialog>
    )
}

AddPostDialogCompounent.propTypes={
    isOpen : PropTypes.bool.isRequired,
    handleClose : PropTypes.func.isRequired
}

export default AddPostDialogCompounent;
