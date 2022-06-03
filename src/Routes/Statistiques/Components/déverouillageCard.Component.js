import React from 'react';
import {Avatar, CardActionArea, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {ElectricCar, Thermostat} from "@mui/icons-material";
import {AssignmentInd, MyLocation, Speed} from "@material-ui/icons";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationIcon from "../../gestionverou/assets/LocationIcon.png";
import SpeedIcon from "../../gestionverou/assets/SpeedIcon.png";
import TemperatureIcon from "../../gestionverou/assets/TemperatureIcon.png";
import ProfileIcon from "../../gestionverou/assets/ProfileIcon.png";
import Card from "@mui/material/Card";
import pannesresolusIcon from "../assets/pannesresolusIcon.png";
export default function numberscard({props}) {
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };
    console.log()
    return (
        <Card>
            <CardContent>
                <List style={flexContainer} >
                    <ListItem> <img src={props.Icon}/></ListItem>
                    <ListItem> <Typography variant="h5" fontFamily={"lora"}> 100 </Typography></ListItem>
                </List>
                <Typography   fontFamily={"lora"}>
                    pannes résolus
                </Typography>
            </CardContent>
        </Card>
    );
}