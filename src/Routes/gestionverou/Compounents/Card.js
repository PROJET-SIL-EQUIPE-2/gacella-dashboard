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
        flexDirection: 'row',
        padding: 0,
    };
    return(
        <Card variant="outlined"   sx={{ minWidth: 275 }} class="noir">
            <CardActionArea onClick={props.onCardClick}>
                <CardContent>
                    <List style={flexContainer}>
                        <ListItem>
                            <Typography variant="h5" component="div">{props.idVehicule}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography  color="text.secondary">({props.type})</Typography>
                        </ListItem>
                    </List>
                    <List style={flexContainer}>
                        <ListItem style={{width: 10}}>
                            <img src={LocationIcon} alt="LocationIcon"/>
                        </ListItem>
                        <ListItem>
                            <Typography component="div">{props.location.lat} , {props.location.lng}</Typography>
                        </ListItem>
                    </List>
                    <List style={flexContainer } >
                        <ListItem style={{width: 10}}>
                            <img src={SpeedIcon} alt="SpeedIcon"/>
                        </ListItem>
                        <ListItem style={{wordBreak : "keep-all" }} >
                            <Typography style={{wordBreak : "keep-all" }} >{props.kilometres} Km/h</Typography>
                        </ListItem>


                        <ListItem>
                            <List style={flexContainer}>
                                <ListItem style={{width: 10}}>
                                    <img src={TemperatureIcon} alt="temperatureIcon"/>
                                </ListItem>
                                <ListItem>
                                    <Typography style={{wordBreak : "keep-all" }} >
                                        {props.temperature}°C
                                    </Typography>
                                </ListItem>
                            </List>
                        </ListItem>



                    </List>
                    <List style={flexContainer}>
                        <ListItem style={{width: 10}}>
                            <img src={ProfileIcon} alt="profieleicone"/>
                        </ListItem>
                        <ListItem>
                            <Typography component="div">
                                {props.nomComplet},
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography  color="text.secondary"> {props.email}
                            </Typography>
                        </ListItem>
                    </List>
                    {/*<List  class={"rightaligned"} style={flexContainer}>*/}
                    {/*    <ListItem style={{width: 10}}>*/}
                    {/*        <img src={TimeIcon} alt="Timeicone"/>*/}
                    {/*    </ListItem>*/}
                    {/*    <ListItem>*/}
                    {/*        <Typography component="div">*/}
                    {/*            {props.heure}*/}
                    {/*        </Typography>*/}
                    {/*    </ListItem>*/}
                    {/*    <ListItem>*/}
                    {/*        <Typography  > {props.date}*/}
                    {/*        </Typography>*/}
                    {/*    </ListItem>*/}
                    {/*</List>*/}

                </CardContent>
            </CardActionArea>
            {/*<CardActions>*/}
            {/*</CardActions>*/}
        </Card>
    );
}
