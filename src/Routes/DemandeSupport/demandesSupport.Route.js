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

export default function DemandesSupportRoute() {
    // let {supportId} = useParams();
    // let supports = [];
    // let [currentSupport , setCurrentSupport]=useState(supports.filter(supp=>supp.id===supportId)[0])
    const dispatch = useDispatch();
    const demandeSupport = useSelector(state => state.demandeSupport);

    const  baseUrlTest = "http://localhost:3000";

    useEffect(()=>{
        dispatch(fetchgetDemandesSupports());
    }, [])



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

    const data=[
        { id: 2, message: 'Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran', Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { id: 3, message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran', Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { id: 4, message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran', Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { id: 5, message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran', Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
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
                            <MaterialTable

                            Title="Demandes de Support"
                            className={classes.table}
                            style={{borderRadius : '25px', margin : '12px 15px 15px 15px'}}
                            icons={tableIcons}
                            localization={tableLang}
                            columns={columns}
                            data={data}
                            // data={demandesSupports.data}
                            options={{
                                search: false,
                                actionsColumnIndex: -1,
                                detailPanelType: 'single',

                                headerStyle: {
                                    color: "#9E9E9E",
                                    fontFamily: "var(--roboto-font)",
                                    fontWeight: 300,
                                    fontSize: "1.2rem",
                                },
                                
                            }}
                                onRowClick={(event, rowData, togglePanel) =>{
                                    //togglePanel() ;
                                    window.location.href='http://localhost:5000/DemandeSupport/'+rowData.id}}
                                detailPanel={(rowData )=> {
                                    return (

                                        <div style={{ position:'absolute', top:'0',left:'0' ,height:'100%',width:'100%',backgroundColor: "black",zIndex:'100' }} ><button onClick={
                                            () => {
                                                //toggle current panel

                                               // setOpen(false)
                                               // this.tableRef.current.onToggleDetailPanel([0])
                                            } }>hii</button></div>
                                    )

                                }}
                        />
                        </Grid>
                    </Grid>
                    </Grid>

                </div>


    );
}
