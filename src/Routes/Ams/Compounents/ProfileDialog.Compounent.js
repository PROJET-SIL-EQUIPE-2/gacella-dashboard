import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormGroup, Input, Label } from "reactstrap";
import "./styles.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRejectLocataire } from "../../../redux/actions/actions";
import ProfileView from "./ProfileView.Compoument";
import CustomizedTables from "./DifferentsVehicules.Compounent";
import TotalePannes from "./TotalPannes.Compounent";
import Tasks from "./Tasksalt.Compounent";
import { makeStyles } from "@material-ui/core/styles";

export default function ProfileDialog({ isOpen, setOpen, amId }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // replace with reel data
  const Userinfos = {
    nom: "nom",
    prenom: "prenom",
    mail: "mail@gmail.com",
    tel: "0721548631",
    mdp: "Mot de passe",
    libre: true,
  };

  // replace with reel data
  const CarsData = [
    {
      id: "V-12D54",
      etat: "réservé",
    },
    {
      id: "V-1FF54",
      etat: "diponible",
    },
    {
      id: "V-1R454",
      etat: "réservé",
    },
    {
      id: "V-1S024",
      etat: "diponible",
    },
    {
      id: "V-12D54",
      etat: "réservé",
    },
    {
      id: "V-1FF54",
      etat: "diponible",
    },
    {
      id: "V-1R454",
      etat: "réservé",
    },
    {
      id: "V-1S024",
      etat: "diponible",
    },
    {
      id: "V-12D54",
      etat: "réservé",
    },
    {
      id: "V-1FF54",
      etat: "diponible",
    },
    {
      id: "V-1R454",
      etat: "réservé",
    },
    {
      id: "V-1S024",
      etat: "diponible",
    },
  ];

  // replace with reel data
  const tachesData = [
    {
      tache: "V-12D54V-12D54V-12D54",
      progres: "25%",
    },
    {
      tache: "V-12D54",
      progres: "25%",
    },
    {
      tache: "V-12D54",
      progres: "25%",
    },
    {
      tache: "V-12D54",
      progres: "25%",
    },
    {
      tache: "V-12D54",
      progres: "25%",
    },
    {
      tache: "V-12D54",
      progres: "25%",
    },
    {
      tache: "V-12D54",
      progres: "25%",
    },
    {
      tache: "V-12D54",
      progres: "25%",
    },
    {
      tache: "V-12D54",
      progres: "25%",
    },
    {
      tache: "V-12D54",
      progres: "25%",
    },
    {
      tache: "V-12D54",
      progres: "25%",
    },
  ];

  const useStyles = makeStyles({
    diagstyle: {
      position: "absolute",
      right: 50,
      width: 1200,
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Dialog
        classes={{
          paper: classes.diagstyle,
        }}
        /*  style={{ width: 400 }} */
        className="p-2 "
        open={isOpen}
        onClose={handleClose}
        fullWidth
        maxWidth="false"
      >
        <DialogContent>
          <div className="profilDialogue" /* style={{ width: 100 }} */>
            <div>
              <ProfileView Userinfos={Userinfos} />
              <TotalePannes nbpannes="250" />
            </div>
            <div className="tables">
              <CustomizedTables CarsData={CarsData} />
              <Tasks tachesData={tachesData} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
