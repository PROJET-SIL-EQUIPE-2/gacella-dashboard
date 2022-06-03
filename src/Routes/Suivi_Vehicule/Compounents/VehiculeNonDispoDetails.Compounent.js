import * as React from "react";
import "./styles.css";
import ProfileView from "./AgentProfileView.Compoument";
import VehiculeView from "./VehiculeDetailsView.Compounent";
import RealTimeVehiculeData from "./RealTimeVehiculeData.compounent";
import LocataireProfileView from "./locataireProfileView.Compounent";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop } from "@mui/material";

export default function VehiculeNonDispoDetails({ isOpen, setOpen, vehicule }) {
  const handleClose = () => {
    setOpen({ isOpen: false, vehicule: null });
  };
  // replace with reel data

  const data = {
    name: "loc_",
    family_name: "test",
    phone_number: "3333333",
    email: "loc@mail.com",
  };
  const real_time_data = {
    temperature: 50,
    speed: 30,
    charge: 200,
    lat: 35,
    long: 60,
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
        <div className="contnondispo">
          <div
            className="d-flex justify-content-around"
            style={{ minWidth: "fit-content", width: "100%", margin: "1%" }}
          >
            <VehiculeView Vehicule={vehicule} />
            <LocataireProfileView locataire={data} />

            <ff />
          </div>
          <div
            className="d-flex justify-content-around"
            style={{ minWidth: "fit-content", width: "100%", margin: "1%" }}
          >
            <ProfileView respo={vehicule?.AgentsMaintenance} />
            <RealTimeVehiculeData real_time_data={real_time_data} />

            <ff />
          </div>
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
