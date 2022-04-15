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


export default function LocataireDemandesSupport() {

    const dispatch = useDispatch();
    const demandesSupports = useSelector(state => state.demandesSupports);
    const [demandeId, setDemandeId] = useState(null);

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
        { message: 'Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran', Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran', Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran', Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran', Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
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
                    <Grid spacing={2} container>
                        <Grid item xs={3}>
                            <Box style={{borderRadius : '25px', margin : '0px 15px 15px 15px'}}  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',boxShadow: 1  }}>
                                <nav aria-label="main mailbox folders">
                                    <List>
                                        <ListItem >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <img src={allIcon} />
                                                </ListItemIcon>
                                                <ListItemText primary="Toutes les demandes" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <img src={waitingIcon} />
                                                </ListItemIcon>
                                                <ListItemText primary="En attente" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <img src={spamIcon} />
                                                </ListItemIcon>
                                                <ListItemText primary="Spam" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <img src={archivedIcon} />
                                                </ListItemIcon>
                                                <ListItemText primary="Archivé" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </nav>
                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <MaterialTable
                            Title="Demandes de déverrouillage"
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
                                headerStyle: {
                                    color: "#9E9E9E",
                                    fontFamily: "var(--roboto-font)",
                                    fontWeight: 300,
                                    fontSize: "1.2rem",
                                },
                                
                            }}
                        />
                        </Grid>
                    </Grid>

                </div>


    );
}
