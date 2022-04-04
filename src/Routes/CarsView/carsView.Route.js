import React, {useRef, useState} from "react";
import {GoogleMap, useJsApiLoader , Marker , Autocomplete , DirectionsRenderer , InfoWindow } from "@react-google-maps/api";
import {Backdrop, Button, CircularProgress, TextField} from "@mui/material";
import {ElectricCar} from "@mui/icons-material";
import MarkerIcon from "./car_icon.png";
import './styles.css';

const centerPos = {lat : 48.8584  , lng: 2.2945}
const Marker2Pos = {lat : 48.8570  , lng: 2.2930}
const  CarsViewRoute=()=>{
    const [WindowInfoStatus, setWindowInfoStatus] = useState({
        isOpen : false ,
        position : null ,
        content : <h5>Car 1</h5>
    });
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const markerIcon = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()
    const {isLoaded}= useJsApiLoader({
        googleMapsApiKey : "AIzaSyDwCTYOj2SWL6bt2rz_k8_bcXirZtJNB3g",
        libraries: ['places']
    })
    console.log(process.env);
    if(!isLoaded){
        return(
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open
                // onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            )

    }

    const calculateRoute=()=> {
        if (originRef.current.value === '' || destiantionRef.current.value === '') {
            return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        directionsService.route({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        }).then(results=>{
            setDirectionsResponse(results)
            setDistance(results.routes[0].legs[0].distance.text)
            setDuration(results.routes[0].legs[0].duration.text)
        })

    }

    const setInfoWindowData=( {position} )=>{
        setWindowInfoStatus( oldState=>{  return {...oldState , isOpen : true , position: position} })

    }
    return (
        <React.Fragment>
            <h1>CARS VIEW</h1>
            <div className="d-flex align-items-center">
                <div className="col-4">
                    <Autocomplete>
                        <TextField className="mt-3 mb-3" id="standard-basic" label="From" variant="standard" ref={originRef} />
                    </Autocomplete>
                </div>
                <div className="col-4">
                    <Autocomplete>
                        <TextField className="mt-3 mb-3" id="standard-basic" label="To" variant="standard" ref={destiantionRef} />
                    </Autocomplete>
                </div>
                <div className="col-4">
                    <Button onClick={()=>calculateRoute()} className="w-100" variant="contained">Calculate Route</Button>

                </div>
            </div>


            <GoogleMap
                center={centerPos}
                zoom={15}
                mapContainerStyle={{width : '100%' , height : '100vh'}}
                options={{
                    zoomControl: false,
                    streetViewControl : false,
                    mapTypeControl: false,
                    fullscreenControl: false
                }}
            >
                <Marker position={centerPos} label={{
                    text: "Car 1",
                    // fontFamily: "Material Icons",
                    color: "#ffffff",
                    fontSize: "10px",
                }}  icon={markerIcon}
                    onClick={()=>setInfoWindowData({position : centerPos})}
                />
                <Marker position={Marker2Pos} label={{
                    text: "Car 2",
                    // fontFamily: "Material Icons",
                    color: "#ffffff",
                    fontSize: "10px",
                }}  icon={markerIcon}
                        onClick={()=>setInfoWindowData({position : Marker2Pos})}
                />


                {WindowInfoStatus.isOpen ?  (
                    <InfoWindow onCloseClick={()=>setWindowInfoStatus(oldState=>{ return {...oldState , isOpen : false }})}  position={WindowInfoStatus.position}  >
                        {WindowInfoStatus.content}
                    </InfoWindow>
                ): null}

                {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
            </GoogleMap>
        </React.Fragment>
    )

}

export default CarsViewRoute;
