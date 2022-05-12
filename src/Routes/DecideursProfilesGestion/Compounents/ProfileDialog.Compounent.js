import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormGroup, Input, Label } from "reactstrap";
import "./styles.css";
import { useDispatch } from "react-redux";
import {
  fetchUpdateDecideur,
  setSnackBarContent,
} from "../../../redux/actions/actions";
import { Grid, IconButton, InputAdornment, useMediaQuery } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
//import SaveRoundedIcon from '@mui/icons-material/EditOffRounded';
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

import PerfectScrollbar from "react-perfect-scrollbar";
import { useTheme } from "@mui/material/styles";

export default function ProfileDialog({
  isOpen,
  setOpen,
  profileForm,
  setProfileForm,
}) {
  const dispatch = useDispatch();
  //const [profileForm, setProfileForm] = React.useState(data);
  //console.log(profileForm);

  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const [editable, setEditable] = React.useState({
    name: false,
    family_name: false,
    phone_number: false,
    email: false,
    oldPassword: false,
  });

  const handleEditClick = (field) => {
    //let field = event.target.id;
    console.log("before field", field, "editable=", editable[field]);
    setEditable({
      ...editable,
      [field]: !editable[field],
    });
    console.log("field", field, "editable=", editable[field]);
  };

  const handleSaveSettings = (field, newdata) => {
    if (
      (!field.includes("password") && profileForm[field]?.length) ||
      (profileForm?.oldPassword.length &&
        profileForm.confirmPassword == profileForm.newPassword)
    ) {
      dispatch(fetchUpdateDecideur(newdata, profileForm.decideur_id)).then(
        () => {
          setTimeout(() => {
            window.location.reload(false);
          }, 1500);
        }
      );
      setEditable({
        ...editable,
        [field]: !editable[field],
      });
    } else {
      dispatch(
        setSnackBarContent(
          "ERROR : veuillez vérifier les informations saisis",
          "error"
        )
      );
    }
  };

  const handleMouseDownEdit = (event) => {
    event.preventDefault();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      className="p-2"
      fullwidth
      open={isOpen}
      onClose={handleClose}
      maxWidth="sx"
      height="fit-content"
    >
      <DialogTitle
        style={{ fontSize: "2rem" }}
        className="lora-700 gacela-orange"
      >
        Profile
      </DialogTitle>
      <DialogContent
        style={{ marginTop: "1rem" }}
        className="h-100 d-flex flex-column"
      >
        <PerfectScrollbar
          component="div"
          style={{
            placeContent: "space-between",
            height: "calc(100vh - 450px)",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <FormGroup>
                <Label className="roboto-700" for="name">
                  Prénom
                </Label>
                <Input
                  defaultValue={profileForm?.name}
                  //onChange={(e)=>{setProfileForm(oldState=>{ return{...oldState , [e.target.name] : e.target.value} })}}
                  type="text"
                  name="name"
                  className="signUpInput"
                  id="name"
                  placeholder="prénom"
                  readOnly={!editable["name"]}
                />
              </FormGroup>

              <FormGroup>
                <Label className="roboto-700" for="family_name">
                  Nom
                </Label>
                <Input
                  defaultValue={profileForm?.family_name}
                  //onChange={(e)=>{setProfileForm(oldState=>{ return{...oldState , [e.target.name] : e.target.value} })}}
                  type="text"
                  name="family_name"
                  className="signUpInput"
                  id="family_name"
                  placeholder="nom"
                  readOnly={!editable["family_name"]}
                />
              </FormGroup>

              <FormGroup>
                <Label className="roboto-700" for="phone_number">
                  Téléphone
                </Label>
                <Input
                  defaultValue={profileForm?.phone_number}
                  //onChange={(e)=>{setProfileForm(oldState=>{ return{...oldState , [e.target.name] : e.target.value} })}}
                  type="number"
                  name="phone_number"
                  className="signUpInput"
                  id="phone_number"
                  placeholder="téléphone"
                  readOnly={!editable["phone_number"]}
                />
              </FormGroup>

              <FormGroup>
                <Label className="roboto-700" for="email">
                  Email
                </Label>
                <div
                  style={{ marginRight: "1rem" }}
                  className="h-100 d-flex flex-row"
                >
                  <Input
                    defaultValue={profileForm?.email}
                    onChange={(e) => {
                      setProfileForm((oldState) => {
                        return { ...oldState, [e.target.name]: e.target.value };
                      });
                    }}
                    type="email"
                    id="email"
                    name="email"
                    className="signUpInput"
                    placeholder="email"
                    readOnly={!editable["email"]}
                  />
                  <IconButton
                    id="email"
                    aria-label="toggle value editing"
                    onClick={
                      !editable["email"]
                        ? (event) => handleEditClick("email")
                        : (event) =>
                            handleSaveSettings("email", {
                              email: profileForm?.email,
                            })
                    }
                    onMouseDown={handleMouseDownEdit}
                    onBlur={(event) => {
                      handleSaveSettings("email", {
                        email: profileForm?.email,
                      });
                      console.log("blur");
                    }}
                    edge="end"
                  >
                    {editable.email ? <SaveRoundedIcon /> : <EditRoundedIcon />}
                  </IconButton>
                </div>
              </FormGroup>

              <FormGroup>
                <Label className="roboto-700" for="oldPassword">
                  Mot de passe
                </Label>
                <div
                  style={{ marginRight: "1rem" }}
                  className="h-100 d-flex flex-row"
                >
                  <Input
                    onChange={(e) => {
                      setProfileForm((oldState) => {
                        return { ...oldState, [e.target.name]: e.target.value };
                      });
                    }}
                    type="password"
                    name="oldPassword"
                    className="signUpInput"
                    id="oldPassword"
                    placeholder="Mot de passe ..."
                    readOnly={!editable["oldPassword"]}
                  />
                  <IconButton
                    id="oldPassword"
                    aria-label="toggle value editing"
                    onClick={
                      !editable["oldPassword"]
                        ? (event) => handleEditClick("oldPassword")
                        : (event) =>
                            handleSaveSettings("oldPassword", {
                              oldPassword: profileForm?.oldPassword,
                              newPassword: profileForm?.newPassword,
                            })
                    }
                    onMouseDown={handleMouseDownEdit}
                    edge="end"
                  >
                    {editable.oldPassword ? (
                      <SaveRoundedIcon />
                    ) : (
                      <EditRoundedIcon />
                    )}
                  </IconButton>
                </div>
              </FormGroup>

              <FormGroup
                style={{ display: editable["oldPassword"] ? "block" : "none" }}
              >
                <Label className="roboto-700" for="newPassword">
                  Nouveau mot de passe
                </Label>
                <Input
                  onChange={(e) => {
                    setProfileForm((oldState) => {
                      return { ...oldState, [e.target.name]: e.target.value };
                    });
                  }}
                  type="password"
                  name="newPassword"
                  className="signUpInput"
                  id="newPassword"
                  placeholder="nouveau mot de passe ..."
                />
              </FormGroup>

              <FormGroup
                style={{ display: editable["oldPassword"] ? "block" : "none" }}
              >
                <Label className="roboto-700" for="confirmPassword">
                  Confirmer le mot de passe
                </Label>
                <Input
                  onChange={(e) => {
                    setProfileForm((oldState) => {
                      return { ...oldState, [e.target.name]: e.target.value };
                    });
                  }}
                  type="password"
                  name="confirmPassword"
                  className="signUpInput"
                  id="confirmPassword"
                  placeholder="confirmer le mot de passe ..." //readOnly={!editable['password']}
                />
              </FormGroup>
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </DialogContent>
    </Dialog>
  );
}
