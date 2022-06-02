import * as React from "react";
import "./styles.css";
import ProfileView from "./AgentProfileView.Compoument";
import VehiculeView from "./VehiculeDetailsView.Compounent";
import LocataireProfileView from "./locataireProfileView.Compounent";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop } from "@mui/material";

export default function VehiculeNonDispoDetails({ isOpen, setOpen, vehicule }) {
  const handleClose = () => {
    setOpen({ isOpen: false, vehicule: null });
  };

  const data = {
    name: "locataire",
    family_name: "test",
    phone_number: "3333333",
    email: "loc@mail.com",
  };
  // replace with reel data
  const AMInfos = {
    agent_id: 1,
    email: "agent1@nexcode.dz",
    phone_number: "0721548631",
    family_name: "agent1_nom",
    name: "agent1_prenom",
  };

  const useStyles = makeStyles({
    dialogStyle: {
      position: "absolute",
      margin: "1%",
      width: "fit-content",
      height: "fit-content",
      backgroundColor: "transparent",
    },
    paper: {
      backgroundColor: "transparent",
      height: "fit-content",
      boxShadow: "none",
    },
  });
  const classes = useStyles();

  console.log("vehicule=" + vehicule);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isOpen}
        onClick={handleClose}
      >
        <div
          className="d-flex justify-content-around"
          style={{ minWidth: "fit-content", width: "100%", margin: "1%" }}
        >
          <VehiculeView Vehicule={vehicule} />
          <LocataireProfileView locataire={data} />
          <ProfileView respo={vehicule?.AgentsMaintenance} />

          <ff />
        </div>
      </Backdrop>
    </div>
  );

  /*
  <Dialog classes={{paper: classes.dialogStyle}}
        className="p-2 " open={isOpen} onClose={handleClose}
        maxWidth="false" style={{ backgroundColor: "transparent"}}>
        <DialogContent PaperProps={{paper:classes.paper}}>
            <div  className="d-flex justify-content-around">
                <VehiculeView Vehicule={vehicule}/>
              <ProfileView respo={vehicule?.AgentsMaintenance} />
            </div>
        </DialogContent>
      </Dialog>
  */
}
