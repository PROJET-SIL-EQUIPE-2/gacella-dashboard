import React from "react";
import "./styles.css";
import Avatar from "@mui/material/Avatar";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import PersonIcon from "@mui/icons-material/Person";

export default function AgentProfileView(props) {
  const flexContainer = {
    display: "flex",
    flexDirection: "column",
    padding: 0,
  };

  return (
    <Card
      variant="outlined"
      className="noir"
      sx={{ width: "fit-content", maxWidth: "45%" }}
    >
      <CardContent>
        <List style={flexContainer}>
          <div className="d-flex justify-content-start">
            <ListItem key="photo">
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 100, height: 100, borderRadius: 7 }}
                />
              </ListItemAvatar>
            </ListItem>
            <ListItem key="name">
              <ListItemAvatar>
                <Avatar className="gacela-orange-bg">
                  <PersonIcon className="--gacela-orangeFA" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={[<span className="roboto-700">Nom</span>]}
                secondary={[
                  <span className="lora-400">
                    {props.respo?.family_name} {props.respo?.name}
                  </span>,
                ]}
              />
            </ListItem>
          </div>
          <ListItem key="email">
            <ListItemAvatar>
              <Avatar className="gacela-orange-bg">
                <AlternateEmailIcon className="--gacela-orangeFA" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={[<span className="roboto-700">Email</span>]}
              secondary={[
                <span className="lora-400">{props.respo?.email}</span>,
              ]}
            />
          </ListItem>
          <ListItem key="telephone">
            <ListItemAvatar>
              <Avatar className="gacela-orange-bg">
                <PhoneRoundedIcon className="--gacela-orangeFA" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={[<span className="roboto-700">Téléphone</span>]}
              secondary={[
                <span className="lora-400">{props.respo?.phone_number}</span>,
              ]}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
