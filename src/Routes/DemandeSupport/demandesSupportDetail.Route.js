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
import Coordonnees from "./Compounents/coordonneesList.Component";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import {useParams} from "react-router";
import MenuFilter from "./Compounents/MenuFilter.Component";
import SupportMessage from "./Compounents/SupportMessage.Component";
export default function DemandesSupportRouteDetail() {
    const data=[
        { message: 'Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran', mid: 2 , Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran', mid: 3  ,Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran', mid: 4 , Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran',  mid: 5 , Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'} },
    ]
    let {supportId} = useParams();
    let [currentSupport , setCurrentSupport]=useState(data.filter(supp=> supp.mid==supportId )); // this should display one row in the table but it's showing nothing.
    console.log("hii",currentSupport);
    const dispatch = useDispatch();
    const demandeSupport = useSelector(state => state.demandeSupport);

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
                        <Grid item xs={12}>

                        </Grid>
                        <Grid item xs={12} >
                            <Box  style={{borderRadius : '25px', margin : '15px'}}
                                sx={{
                                    height: 100, p: 4 ,
                                    backgroundColor: 'white',
                                    '&:hover': {
                                        backgroundColor: 'primary.light',
                                        opacity: [0.9, 0.8, 0.7],
                                    }, boxShadow: 1
                                }}
                            >
                                <Typography variant="h2"  fontFamily={"lora"}>
                                    Demandes de support
                                </Typography>
                            </Box>
                        </Grid>
                    <Grid spacing={2} container>
                        <Grid item xs={3}>
                           <MenuFilter></MenuFilter>
                        </Grid>
                        <Grid item xs={9}>
                            <SupportMessage message={ 'Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran'} date={ 2 } familyName={ 'mecheri'} name ={'hadia'} email={'john@gmial.com'} object={'object of the message'} personal_photo= { 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'}></SupportMessage>
                        </Grid>

                    </Grid>
                    </Grid>

                </div>


    );
}
