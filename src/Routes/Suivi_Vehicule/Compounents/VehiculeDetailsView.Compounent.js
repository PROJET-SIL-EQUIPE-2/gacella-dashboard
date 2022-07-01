import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { styled } from '@mui/material/styles';
import * as React from "react";
import List from "@mui/material/List";
import {CardActionArea, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import NumbersRoundedIcon from '@mui/icons-material/NumbersRounded';
import DriveEtaRoundedIcon from '@mui/icons-material/DriveEtaRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import SettingsIcon from '@mui/icons-material/Settings';
export default function CarteVehicule(props){

    const flexContainer = {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
    };

    //vehicule_id,matricule,car_photo,type_vehicule,kilometrage,etat,disponible,price_per_hour
    return(
        <Card variant="outlined" className="noir" sx={{ width: 'fit-content',maxWidth:"50%"}}>
                <CardContent>
                    <List style={flexContainer}>
                        <div className="d-flex justify-content-around">
                            <ListItem key="car_photo">
                                <ListItemAvatar>
                                    <Avatar variant="square" alt="Remy Sharp" src="/static/images/avatar/1.jpg"
                                            sx={{ width: 100, height: 100, borderRadius: 7 }}/>
                                </ListItemAvatar>
                            </ListItem>
                            <div className="d-flex flex-column" >
                                <ListItem key="id" >
                                <ListItemAvatar>
                                    <Avatar className="gacela-orange-bg">
                                        <NumbersRoundedIcon className="--gacela-orangeFA"/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={[<span className="roboto-700">ID</span>]}
                                    secondary={ [<span className="lora-400">{props.Vehicule?.vehicule_id}</span>]}
                                />
                            </ListItem>
                                <ListItem key="matricule" >
                                <ListItemAvatar>
                                    <Avatar className="gacela-orange-bg">
                                        <BadgeRoundedIcon className="--gacela-orangeFA"/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={[<span className="roboto-700">Matricule</span>]}
                                    secondary={ [<span className="lora-400">{props.Vehicule?.matricule}</span>]}
                                />
                            </ListItem>
                            </div>
                        </div>
                        <ListItem key="type" >
                            <ListItemAvatar>
                                <Avatar className="gacela-orange-bg">
                                    <CategoryRoundedIcon className="--gacela-orangeFA"/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={[<span className="roboto-700">Type</span>]}
                                secondary={ [<span className="lora-400">{props.Vehicule?.type_vehicule}</span>]}
                            />
                        </ListItem>
                        <div className="d-flex justify-content-between">
                            <ListItem key="kilometrage" >
                            <ListItemAvatar>
                                <Avatar className="gacela-orange-bg">
                                    <SpeedRoundedIcon className="--gacela-orangeFA"/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={[<span className="roboto-700">Kilometrage</span>]}
                                secondary={ [<span className="lora-400">{props.Vehicule?.kilometrage}</span>]}
                            />
                        </ListItem>
                            <ListItem key="price_per_hour" >
                                <ListItemAvatar>
                                    <Avatar className="gacela-orange-bg">
                                        <LocalOfferRoundedIcon className="--gacela-orangeFA"/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={[<span className="roboto-700">Prix</span>]}
                                    secondary={ [<span className="lora-400">{props.Vehicule?.price_per_hour} DZ/1 Heure</span>]}
                                />
                            </ListItem>
                        </div>
                        <div className="d-flex justify-content-between">
                            <ListItem key="etat" >
                            <ListItemAvatar>
                                <Avatar className="gacela-orange-bg">
                                    <SettingsIcon className="--gacela-orangeFA"/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={[<span className="roboto-700">Etat</span>]}
                                secondary={ [<span className="lora-400">{props.Vehicule?.etat}</span>]}
                            />
                        </ListItem>
                            <ListItem key="disponible" >
                            <ListItemAvatar>
                                <Avatar className="gacela-orange-bg">
                                    <InfoRoundedIcon className="--gacela-orangeFA"/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={[<span className="roboto-700">Disponible ?</span>]}
                                secondary={ [<span className="lora-400">{props.Vehicule?.disponible?"disponible":"réservé"}</span>]}
                            />
                        </ListItem>
                        </div>
                    </List>
                </CardContent>
        </Card>
    );
}
