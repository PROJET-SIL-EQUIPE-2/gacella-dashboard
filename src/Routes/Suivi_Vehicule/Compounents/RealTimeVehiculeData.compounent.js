import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import * as React from "react";
import List from "@mui/material/List";
import {
  CardActionArea,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import NumbersRoundedIcon from "@mui/icons-material/NumbersRounded";
import DriveEtaRoundedIcon from "@mui/icons-material/DriveEtaRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
export default function RealTimeVehiculeData(props) {
  const flexContainer = {
    display: "flex",
    flexDirection: "column",
    padding: 0,
  };
  const data = props.real_time_data;

  //vehicule_id,matricule,car_photo,type_vehicule,kilometrage,etat,disponible,price_per_hour
  return (
    <Card
      variant="outlined"
      className="noir"
      sx={{ width: "fit-content", maxWidth: "50%" }}
    >
      <CardContent>
        <List style={flexContainer}>
          <ListItem key="temperature">
            <ListItemAvatar>
              <Avatar className="gacela-orange-bg">
                <DeviceThermostatIcon className="--gacela-orangeFA" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={[<span className="roboto-700">temperature</span>]}
              secondary={[
                <span className="lora-400">{data?.temperature + "°"}</span>,
              ]}
            />
          </ListItem>
          <div className="d-flex justify-content-between">
            <ListItem key="speed">
              <ListItemAvatar>
                <Avatar className="gacela-orange-bg">
                  <SpeedRoundedIcon className="--gacela-orangeFA" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={[<span className="roboto-700">vitesse</span>]}
                secondary={[
                  <span className="lora-400">{data?.speed + "Km/H"}</span>,
                ]}
              />
            </ListItem>
            <ListItem key="charge">
              <ListItemAvatar>
                <Avatar className="gacela-orange-bg">
                  <LocalOfferRoundedIcon className="--gacela-orangeFA" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={[<span className="roboto-700">charge</span>]}
                secondary={[
                  <span className="lora-400">{data?.charge + "Kg"}</span>,
                ]}
              />
            </ListItem>
          </div>
          <div className="d-flex justify-content-between">
            <ListItem key="longlat">
              <ListItemAvatar>
                <Avatar className="gacela-orange-bg">
                  <TravelExploreIcon className="--gacela-orangeFA" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={[
                  <span className="roboto-700">longitude,Lattitude</span>,
                ]}
                secondary={[
                  <span className="lora-400">
                    {data?.long + "," + data?.lat}
                  </span>,
                ]}
              />
            </ListItem>
          </div>
        </List>
      </CardContent>
    </Card>
  );
}
