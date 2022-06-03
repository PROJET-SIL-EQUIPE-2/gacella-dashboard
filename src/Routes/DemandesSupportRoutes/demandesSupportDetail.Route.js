import * as React from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import {
    Avatar,
    Box,
    CardActions,
    CardContent,
    Chip,
    Divider,
    Grid,
    IconButton,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    Paper
} from '@mui/material';

import allIcon from "./assets/allIcon.png";
import spamIcon from "./assets/spamIcon.png";
import archivedIcon from "./assets/archivedIcon.png";

import {tableLang , tableIcons} from '../../ui-component/ReactTablesWidget/Widget'
import waitingIcon from "./assets/waitingIcon.png"
import './styles.css';
import {useState , useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchgetDemandesSupports} from "../../redux/actions/actions";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Card} from "reactstrap";
import {createTheme} from "@mui/material/styles";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import {useParams} from "react-router";
import {useLocation} from "react-router-dom";

import MenuFilter from "./Compounents/MenuFilter.Component";
import SupportMessage from "./Compounents/SupportMessage.Component";
export default function DemandesSupportRouteDetail() {


    const data=[
        { message: 'Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran',object:" h ", date: 2,mid: 2 , Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran',object:" h ",date: 2, mid: 3  ,Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran',object:" h ",date: 2, mid: 4 , Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran',date: 2, object:" h ", mid: 5 , Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'} },
    ]
    let {supportId} = useParams();

    const demandeSupport = useSelector(state => state.demandeSupport);
    const demandeSupport1 = useSelector(state => state.demandesSupports);
    const locataires = useSelector(state => state.validatedLocataires);
    console.log(" saaaaaa ",locataires);
    let [currentSupport , setCurrentSupport]=useState(data.filter(supp=> supp.mid==supportId )[0]); // this should display one row in the table but it's showing nothing.
    const found = locataires.data.find(element => element.id===currentSupport.locataire_id);

    let [currentLocataire , setCurrentLocataire]=useState(found); // this should display one row in the table but it's showing nothing.

    useEffect(()=>{
        setCurrentSupport(demandeSupport1.data.supports.filter(supp=> supp.demande_id==supportId )[0]);
        // setCurrentLocataire(locataires.data.reduce((map, item) => map.set(item.id, [item.name, item.family_name, item.email]), new Map).get(currentSupport.locataire_id))
        setCurrentLocataire(found);
        },[]);
    console.log(demandeSupport1);

    console.log("hii",currentSupport.demande_id);
    console.log("hii",currentSupport.demande_id);

    const dispatch = useDispatch();

    const  baseUrlTest = "http://localhost:3000";

const columns=[
        {  field: 'infos',
           render: rowData =>(
            <div className="d-flex align-items-center">
                <Avatar style={{width : "50px" , height : "50px" , borderRadius : "25px"}}  src={rowData.Locataires.personal_photo} />
                <div className="pl-2 flex-column">
                    <div className="roboto-500 gacela-black21"> {rowData.Locataires.familyName} {rowData.Locataires.name} </div>
                    <div className="roboto-500 gacela-gray9E pt-2"> {rowData.message}</div>
                </div>
            </div>
            )
        }
    ]

    const useStyles = makeStyles({
        table: {
            width: 400,
            margin: "auto"
        }
    });

    const classes = useStyles();
    return (

                <div   style={{ height: 400, width: '100%' }}>
                    <Grid container spacing={2} >
                        {/*<Grid item xs={12}>*/}

                        {/*</Grid>*/}

                    <Grid spacing={2} container>

                        <Grid item xs={12}>
                            <SupportMessage message={ 'Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran'} date={ 2 } familyName={ currentLocataire.family_name} name ={currentLocataire.name} email={currentLocataire.email} object={currentSupport.type_support} personal_photo= { 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'}></SupportMessage>
                        </Grid>

                    </Grid>
                    </Grid>
                </div>



    );
}
