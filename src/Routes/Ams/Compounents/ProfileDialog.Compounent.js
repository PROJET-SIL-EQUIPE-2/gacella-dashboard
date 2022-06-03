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
import DiffVehicules from "./DifferentsVehicules.Compounent";
import TotalePannes from "./TotalPannes.Compounent";
import Tasks from "./Tasksalt.Compounent";
import { makeStyles } from "@material-ui/core/styles";
// import { useDispatch, useSelector } from "react-redux";

export default function ProfileDialog({ isOpen, setOpen, amdata }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // replace with reel data

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
  let CarsData = amdata.data.Vehicules;

  const useStyles = makeStyles({
    diagstyle: {
      position: "absolute",
      right: "10%",
      width: 1300,
      backgroundColor: "transparent",
    },
    paper: {
      backgroundColor: "transparent",
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
        style={{ backgroundColor: "transparent" }}
      >
        <DialogContent
          PaperProps={{
            style: {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <div className="profilDialogue" /* style={{ width: 100 }} */>
            <div>
              <ProfileView Userinfos={amdata} />
              <TotalePannes nbpannes="250" />
            </div>
            <div className="tables">
              <DiffVehicules CarsData={CarsData} />
              <Tasks tachesData={tachesData} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
