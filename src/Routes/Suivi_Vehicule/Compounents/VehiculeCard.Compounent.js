import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { styled } from '@mui/material/styles';

import * as React from "react";
import List from "@mui/material/List";
import {CardActionArea, ListItem} from "@mui/material";
import LocationIcon from "../assets/LocationIcon.png";
import SpeedIcon from "../assets/SpeedIcon.png";
import TemperatureIcon from "../assets/TemperatureIcon.png";
import ProfileIcon from "../assets/ProfileIcon.png";
import TimeIcon from "../assets/TimeIcon.png";
export default function CarteVehicule(props){

    const flexContainer = {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
    };

    //vehicule_id,matricule,car_photo,type_vehicule,kilometrage,etat,disponible,price_per_hour
    return(
        <Card variant="outlined" className="noir" sx={{ width: '100%',height: '100%', maxWidth: 270}}>
            <CardActionArea onClick={props.onCardClick}>
                <CardContent>
                    <List style={flexContainer}>
                        <ListItem key="vec_id">
                            <Typography variant="h5" component="div">{props.vehicule_id}</Typography>
                        </ListItem>
                        <ListItem key="mat">
                            <Typography variant="h5" component="div">{props.matricule}</Typography>
                        </ListItem>
                        <ListItem key="type_vec">
                            <Typography  color="text.secondary">{props.type_vehicule}</Typography>
                        </ListItem>
                        <ListItem key="etat_vec">
                            <Typography  color="text.secondary">{props.etat}</Typography>
                        </ListItem>
                        <ListItem key="vec_dispo">
                            <Typography  color="text.secondary">{props.disponible?"disponible":"réservé"}</Typography>
                        </ListItem>
                    </List>
                </CardContent>
            </CardActionArea>
        </Card>
    );
    /*
    <!---
                <Avatar variant="square" alt="Remy Sharp" src="car_photo"
                            sx={{ width: 100, height: 100, borderRadius: 2 }}/>
                        <ListItem style={{wordBreak : "keep-all" }} >
                            <Typography style={{wordBreak : "keep-all" }} >{props.kilometrage} Km</Typography>
                        </ListItem>
                        <ListItem style={{wordBreak : "keep-all" }} >
                            <Typography style={{wordBreak : "keep-all" }} >{props.price_per_hour} DZ</Typography>
                        </ListItem>
                        -->
                        <ListItem style={{width: 10}}>
                            <img src={LocationIcon} alt="LocationIcon"/>
                        </ListItem>
                        <ListItem>
                            <Typography component="div">{props.location.lat} , {props.location.lng}</Typography>
                        </ListItem>
                        <ListItem style={{width: 10}}>
                            <img src={SpeedIcon} alt="SpeedIcon"/>
                        </ListItem>
                        <ListItem style={{wordBreak : "keep-all" }} >
                            <Typography style={{wordBreak : "keep-all" }} >{props.kilometres} Km/h</Typography>
                        </ListItem>
                        <ListItem style={{width: 10}}>
                            <img src={TemperatureIcon} alt="temperatureIcon"/>
                        </ListItem>
                        <ListItem>
                            <Typography style={{wordBreak : "keep-all" }} >{props.temperature}°C</Typography>
                        </ListItem>
                        <ListItem style={{width: 10}}>
                            <img src={ProfileIcon} alt="profieleicone"/>
                        </ListItem>
                        <ListItem>
                            <Typography component="div">{props.nomComplet}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography  color="text.secondary"> {props.email}</Typography>
                        </ListItem>
                        */
}
