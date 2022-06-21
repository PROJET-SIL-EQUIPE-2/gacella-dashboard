import React, {useEffect} from "react";
import RegionGraph from "./Compounents/RegionsGraphs.Compounent"
import {useDispatch, useSelector} from "react-redux";
import {fetchgetAllRegionss} from "../../redux/actions/actions";

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

const  StatisticsRoute=()=>{

    return(
        <div style={{display:"flex"}}>
            <RegionGraph/>
        </div>
    );
}

export default SuiviVehiculesRoute;