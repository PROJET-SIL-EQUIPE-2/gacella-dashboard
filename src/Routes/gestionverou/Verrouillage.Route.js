import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MaterialTable, { MTableToolbar } from 'material-table';
import {Avatar, ListItem} from '@mui/material';
import PermisIcon from "./assets/PermisIcon.png"
import IdentiteIcon from "./assets/IdentiteIcon.png"
import CheckIcon from "./assets/CheckIcon.png"
import {tableLang , tableIcons} from '../../ui-component/ReactTablesWidget/Widget'
import DeleteIcon from "./assets/DeleteIcon.png"
import './styles.css';
import react, {useState, useEffect, Component} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAcceptLocataire, fetchgetLocatairesRequests} from "../../redux/actions/actions";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


import List from '@mui/material/List';
import CarteVehicule from './Compounents/Card';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);



const containerStyle = {
    width: '100%',
    height: '100%'
};
const center = {
    lat: -3.745,
    lng: -38.523
};

function Verrouillage(props){


    navigator.geolocation.getCurrentPosition(function(position) {

        center.lat = position.coords.latitude;
        center.lng = position.coords.longitude;
        console.log("Latitude is :", position.coords.latitude);

        console.log("Longitude is :", position.coords.longitude);
    });

    return (
            <React.Fragment class={"parent"}>


                {/*<h1>Contact Page</h1>*/}
                {/*/!*<div ref={ref} />*!/*/}
                {/*<div className="main-beige"> Text with the main color </div>*/}

                <LoadScript
                    googleMapsApiKey="AIzaSyDSczHk3AbLJchlReWS9yL8nfORzIACrfc"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}
                    >
                        <Paper class={"contenaire"} style={{maxHeight: '100%', overflow: 'auto'}}>
                            <List
                            >
                                <CarteVehicule idVehicule="1542568" temperature={40} kilometres={400} location={"oued smar, beaulieu"}  email={"fouzi@gmail.com"} nomComplet={"Mon Nom"} heure={"14:30"} date={"16/04/2022"} type={"comfortable"}></CarteVehicule>
                                <CarteVehicule idVehicule="0000000" temperature={20} kilometres={1200} location={"beni messous, alger"}  email={"fouzi@gmail.com"} nomComplet={"Mon Nom"} heure={"14:30"} date={"16/04/2022"} type={"comfortable"}></CarteVehicule>
                                <CarteVehicule idVehicule="5555555" temperature={17.9} kilometres={100} location={"Cheraga, daly brahim"}  email={"fouzi@gmail.com"} nomComplet={"Mon Nom"} heure={"14:30"} date={"16/04/2022"} type={"comfortable"}></CarteVehicule>
                                <CarteVehicule idVehicule="1010100" temperature={50} kilometres={700} location={" EL Harrach, Alger"}  email={"fouzi@gmail.com"} nomComplet={"Mon Nom"} heure={"14:30"} date={"16/04/2022"} type={"comfortable"}></CarteVehicule>
                                <CarteVehicule idVehicule="1212212" temperature={10} kilometres={1000} location={"oued smar, beaulieu"}  email={"fouzi@gmail.com"} nomComplet={"Mon Nom"} heure={"14:30"} date={"16/04/2022"} type={"comfortable"}></CarteVehicule>


                            </List>
                        </Paper>
                        { /* Child components, such as markers, info windows, etc. */ }
                        <></>
                    </GoogleMap>
                </LoadScript>

            </React.Fragment>
        )

    }
export default Verrouillage;