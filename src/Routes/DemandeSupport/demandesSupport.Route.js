import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
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
import allIcon from "./assets/allIcon.png"
import spamIcon from "./assets/spamIcon.png"
import trashIcon from "./assets/trashIcon.png"
import {tableLang , tableIcons} from '../../ui-component/ReactTablesWidget/Widget'
import waitingIcon from "./assets/waitingIcon.png"
import './styles.css';
import './Compounents/rejectDialog.Compounent';
import RejectDialog from "./Compounents/rejectDialog.Compounent";
import {useState , useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAcceptLocataire, fetchgetLocatairesRequests, fetchgetDeverouillageRequests} from "../../redux/actions/actions";
import PermisDialog from "./Compounents/permisDialog.Compounent";
import PhotosDialog from "./Compounents/photosDialog.Compounent";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Card} from "reactstrap";
import {createTheme} from "@mui/material/styles";
import Coordonnees from "./Compounents/coordonneesList.Component";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import archivedIcon from "./assets/archivedIcon.png"
import LocationIcon from "../gestionverou/assets/LocationIcon.png";
function addTestData(locatairesrequests) {
    setTimeout(() => {  console.log("World!");}, 0);

    locatairesrequests.data.push({
        id: 5,
        name: 'Doe',
        familyName: 'John',
        email: 'JohnDoe@gmail.com',
        parentId: 2,


    })
    locatairesrequests.data.push({
        id: 50,
        name: 'Doe2',
        familyName: 'John1',
        email: 'JohnDoeSecond@gmail.com',
        parentId: 2,


    })
}
export default function LocataireDemandesSupport() {
    const [isRejectDialogopen, setRejectDialogOpenStatus] = useState(false);
    const dispatch = useDispatch();
    const locatairesrequests = useSelector(state => state.locatairesRequests);
    const [permisDialog, setPermisDialog] = useState(null);
    const [photoDialog, setPhotoDialog] = useState(null);
    const [locataireEmail, setLocataireEmail] = useState(null);

    const  baseUrlTest = "http://localhost:3000";
    //associate new row to each row in locatairesrequests.data





    useEffect(()=>{
        dispatch(fetchgetDeverouillageRequests());
    }, [])
addTestData(locatairesrequests); // this is not updating the state of the table ( random data added to the locataires in db )
    const columns=[
        {  field: 'imageUrl', render: rowData =>(
            <div className="d-flex align-items-center">
                <Avatar style={{width : "50px" , height : "50px" , borderRadius : "25px"}}  src={rowData.personal_photo} />
                <div className="pl-2 flex-column">
                    <div className="roboto-500 gacela-black21"> {rowData.familyName} {rowData.name} </div>
                    <div className="roboto-500 gacela-gray9E pt-2"> {rowData.email}</div>
                </div>
            </div>
            )
        }
    ]

    const data=[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
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
                                        <ListItem >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <img src={trashIcon} />
                                                </ListItemIcon>
                                                <ListItemText primary="Poubelle" />
                                            </ListItemButton>
                                        </ListItem>


                                    </List>
                                </nav>

                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <MaterialTable
                                Title={"Demandes de déverrouillage"}
                            className={classes.table}
                            style={{borderRadius : '25px', margin : '12px 15px 15px 15px'}}
                            icons={tableIcons}
                            localization={tableLang}
                            columns={columns}
                            data={locatairesrequests.data}
                            options={{
                                search: false,
                                actionsColumnIndex: -1,
                                detailPanelType: 'single'
                            }}
                                onRowClick={(event, rowData, togglePanel) => togglePanel()}
                                detailPanel={(rowData )=> {

                                    return (

                                        <div style={{ position:'absolute', top:'0',left:'0' ,height:'100%',width:'100%',backgroundColor: "black",zIndex:'100' }} ><button onClick={
                                            () => {
                                               // setOpen(false)
                                            } }>hii</button></div>
                                    )

                                }}
                        />
                        </Grid>
                    </Grid>

                    {/*<RejectDialog isOpen={isRejectDialogopen} setOpen={setRejectDialogOpenStatus} locataireEmail={locataireEmail}/>*/}
                    {/*<PermisDialog setOpen={setPermisDialog} imageSource={permisDialog} />*/}
                    {/*<PhotosDialog setOpen={setPhotoDialog} imageSource={photoDialog} />*/}
                </div>


    );
}
