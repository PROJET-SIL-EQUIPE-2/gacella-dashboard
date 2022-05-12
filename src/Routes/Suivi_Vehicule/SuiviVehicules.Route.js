import React, {useEffect, useState} from "react";
import './styles.css';
import CarteVehicule from "./Compounents/VehiculeCard.Compounent";
import PerfectScrollbar from "react-perfect-scrollbar";
import {Box, CircularProgress, Grid, IconButton, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import VehiculeDispoDetails from "./Compounents/VehiculeDispoDetails.Compounent"
import AjouterVehicule from "./Compounents/AjouterVehiculeDialog.Compounent"
import {useDispatch, useSelector} from "react-redux";
import {fetchgetAllVehicules} from "../../redux/actions/actions";

/*const vehicules=[
    {
        vehicule_id:1,
        matricule:"1234456789392",
        car_photo:null,
        responsable:1,
        type_vehicule:"comfortable",
        kilometrage:1258,
        etat:"WORKING",
        disponible:true,
        price_per_hour:100.00,
        locked:true
    },
    {
        vehicule_id:2,
        matricule:"1234456789392",
        car_photo:null,
        responsable:1,
        type_vehicule:"comfortable",
        kilometrage:1258,
        etat:"WORKING",
        disponible:true,
        price_per_hour:100.00,
        locked:true
    },
    {
        vehicule_id:3,
        matricule:"1234456789392",
        car_photo:null,
        responsable:1,
        type_vehicule:"comfortable",
        kilometrage:1258,
        etat:"WORKING",
        disponible:true,
        price_per_hour:100.00,
        locked:true
    },
    {
        vehicule_id:4,
        matricule:"1234456789392",
        car_photo:null,
        responsable:1,
        type_vehicule:"comfortable",
        kilometrage:1258,
        etat:"WORKING",
        disponible:true,
        price_per_hour:100.00,
        locked:true
    },
    {
        vehicule_id:5,
        matricule:"1234456789392",
        car_photo:null,
        responsable:1,
        type_vehicule:"comfortable",
        kilometrage:1258,
        etat:"WORKING",
        disponible:true,
        price_per_hour:100.00,
        locked:true
    },
    {
        vehicule_id:6,
        matricule:"1234456789392",
        car_photo:null,
        responsable:1,
        type_vehicule:"comfortable",
        kilometrage:1258,
        etat:"WORKING",
        disponible:false,
        price_per_hour:100.00,
        locked:true
    },
    {
        vehicule_id:7,
        matricule:"1234456789392",
        car_photo:null,
        responsable:1,
        type_vehicule:"comfortable",
        kilometrage:1258,
        etat:"WORKING",
        disponible:false,
        price_per_hour:100.00,
        locked:true
    }
 ]
 */

const  SuiviVehiculesRoute=()=>{

    const dispatch = useDispatch();
    const baseUrlTest = "http://localhost:3000";
    const vehicules = useSelector((state) => state.vehiculesInfos);

    const [VehiculeDetails, setVehiculeDetails] = useState({
        isOpen : false,
        vehicule: null
    });

    const setVehiculeDetailsData=(open=true,v)=>{
        console.log("vehicule befor set ="+v);
        setVehiculeDetails( oldState=>{
            return {...oldState , isOpen : open, vehicule: v}
        })
    }

    const [toggle, setToggle] = React.useState('disponible');
    const [isAjouterVehiculeDialogOpen, setAjouterVehiculeDialogOpen] = React.useState(false);

    const handleChange = (event, newToggle) => {if (newToggle !== null) {setToggle(newToggle);}};

    useEffect(()=>{
        dispatch(fetchgetAllVehicules());
        /*if(!( vehicules.loading || vehicules.error)){
            setfiltredVehicules(vehicules?.data?.allVehicles?.filter(vehicule => vehicule.disponible === (toggle === 'disponible')));
        }
         */
    }, [])


    return(
        ( vehicules.loading || vehicules.error)
            ?(<div   style={{ width: '100%' }}>
                <Grid container spacing={1}  direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid item xs={12} >
                        <Box style={{borderRadius : '25px', margin : '15px'}}
                             sx={{height: 100, p: 4 , backgroundColor: 'white', boxShadow: 3}}>
                            <div  className="d-flex justify-content-around align-items-center">
                                <Typography variant="h2" fontFamily={"lora"}>Suivi de véhicules</Typography>
                            </div>
                        </Box>
                    </Grid>
                        <Grid item xs={12} >
                            <Box sx={{ display: 'flex' , justifyContent: "center"}}>
                                <CircularProgress color="primary" />
                            </Box>
                        </Grid>
                </Grid>
            </div>)
            : (<div   style={{ width: '100%' }}>
            <Grid container spacing={1} >
                <Grid item xs={12} >
                    <Box style={{borderRadius : '25px', margin : '15px'}}
                          sx={{height: 100, p: 4 , backgroundColor: 'white', boxShadow: 3}}>
                        <div  className="d-flex justify-content-around align-items-center">
                            <Typography variant="h2" fontFamily={"lora"}>Suivi de véhicules</Typography>

                            <ToggleButtonGroup color="primary" value={toggle} exclusive onChange={handleChange}>
                                <ToggleButton value="disponible">Disponibles</ToggleButton>
                                <ToggleButton value="reserves">Réservés</ToggleButton>
                            </ToggleButtonGroup>

                            <IconButton size="large" aria-label="Ajouter un vehicule"
                                        color="primary" onClick={(event)=> {setAjouterVehiculeDialogOpen(true);}}>
                                <AddRoundedIcon size="large" />
                            </IconButton>

                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} >
                <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 1px)', overflowX: 'hidden' }}>
                    <Grid  container direction="row" justifyContent="flex-start" alignItems="flex-start"
                           rowSpacing={0.5} spacing={2} p={3}>
                            {
                                vehicules?.data?.allVehicles?.filter(
                                    vehicule => vehicule.disponible === (toggle === 'disponible')
                                ).map((vehicule,index)=>{
                                return(
                                <Grid key={index} item xs={3} style={{height: '100%'}} zeroMinWidth>
                                    <CarteVehicule onCardClick={()=>setVehiculeDetailsData(true,vehicule)}
                                           vehicule_id={vehicule.vehicule_id}
                                           matricule={vehicule.matricule}
                                           etat={vehicule.etat}
                                           disponible={vehicule.disponible}
                                           type={vehicule.type_vehicule}
                                    >
                                    </CarteVehicule>
                                </Grid>
                                )
                            })}
                    </Grid>
                </PerfectScrollbar>
                </Grid>
            </Grid>
            <VehiculeDispoDetails
                isOpen={VehiculeDetails.isOpen}
                setOpen={setVehiculeDetails}
                vehicule={VehiculeDetails.vehicule}
            />
            <AjouterVehicule
                isOpen={isAjouterVehiculeDialogOpen}
                setOpen={setAjouterVehiculeDialogOpen}
            />
        </div>)
    );
}

export default SuiviVehiculesRoute;
