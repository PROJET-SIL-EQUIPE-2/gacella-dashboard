import Tasks from "./Tasks.Compounent";

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

export default function ProfileDialog({ isOpen, setOpen, amId }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // replace with request
  const Userinfos = {
    nom: "nom",
    prenom: "prenom",
    mail: "mail@gmail.com",
    tel: "0721548631",
    mdp: "Mot de passe",
    libre: true,
  };

  // replace with request
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

  return (
    <div>
      <Dialog className="p-2" open={isOpen} onClose={handleClose}>
        <ProfileView Userinfos={Userinfos} />

        <CustomizedTables CarsData={CarsData} />
        {/*  <Tasks /> */}
      </Dialog>
    </div>
  );
}
