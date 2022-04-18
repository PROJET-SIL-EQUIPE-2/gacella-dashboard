import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MaterialTable, { MTableToolbar } from 'material-table';
import {Avatar, Chip, IconButton, ListItem, Paper} from '@mui/material';
import PermisIcon from "./assets/PermisIcon.png"
import IdentiteIcon from "./assets/IdentiteIcon.png"
import CheckIcon from "./assets/CheckIcon.png"
import {tableLang , tableIcons} from '../../ui-component/ReactTablesWidget/Widget'
import DeleteIcon from "./assets/DeleteIcon.png"
import './styles.css';
import './Compounents/rejectDialog.Compounent';
import RejectDialog from "./Compounents/rejectDialog.Compounent";
import {useState , useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAcceptLocataire, fetchgetLocatairesRequests, fetchgetDeverouillageRequests} from "../../redux/actions/actions";
import PermisDialog from "./Compounents/permisDialog.Compounent";
import PhotosDialog from "./Compounents/photosDialog.Compounent";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "reactstrap";
import {createTheme} from "@mui/material/styles";
import Coordonnees from "./Compounents/coordonneesList.Component";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import LocationIcon from "../gestionverou/assets/LocationIcon.png";
import PerfectScrollbar from 'react-perfect-scrollbar';

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
export default function LocataireDemandesDeverouillage() {
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
        { title: 'Locataire', field: 'imageUrl', render: rowData =>(
            <div className="d-flex align-items-center">
                <Avatar style={{width : "50px" , height : "50px" , borderRadius : "25px"}}  src={rowData.personal_photo} />
                <div className="pl-2 flex-column">
                    <div className="roboto-500 gacela-black21"> {rowData.familyName} {rowData.name} </div>
                    <div className="roboto-500 gacela-gray9E pt-2"> {rowData.email}</div>
                </div>
            </div>
            )
        },
        {
            title: 'vehicule',
            field: 'vegicule',
            render: rowData =>(<div className="roboto-500">{rowData.id}</div>)
        }
    ]

    const data=[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
    ]

    const actions=[
            rowData=>({
                icon: ()=> (<img   src={CheckIcon}/>),
                tooltip: "Accepter La demande",
                onClick: (event, rowData) =>{
                    dispatch(fetchAcceptLocataire(rowData.email))
                        .then(()=>{
                            setTimeout(()=>{
                                window.location.reload(false);
                            },1500)
                        })

                }
            }),
            rowData => ({
            icon:  ()=>(<img src={DeleteIcon}/>),
            tooltip: 'Refuser La demandez',
            onClick: (event, rowData) => {setRejectDialogOpenStatus(true); setLocataireEmail(rowData.email); },
        })
    ]
    const useStyles = makeStyles({
        table: {
            width: 400,
            margin: "auto"
        }
    });

    const classes = useStyles();
    return (
        <PerfectScrollbar
            component="div"
            style={{
                placeContent:"space-between",
                height: 'calc(100vh - 100px)',
                paddingLeft: '16px',
                paddingRight: '16px'
            }}
        >
                <div   style={{ height: 400, width: '100%' }}>
                    <MaterialTable
                        className={classes.table}
                        style={{borderRadius : '25px', margin : '25px'}}
                        icons={tableIcons}
                        localization={tableLang}
                        title="Demandes de déverrouillage"
                        columns={columns}
                        data={locatairesrequests.data}
                        actions={actions}
                        options={{
                            search: false,
                            actionsColumnIndex: -1,
                            headerStyle: {
                                color: '#9E9E9E',
                                fontFamily : 'var(--roboto-font)',
                                fontWeight: 300,
                                fontSize: '1.2rem'
                            },
                            detailPanelType: "single",

                            // actionsCellStyle:{
                            //     paddingRight : "3rem"
                            // },
                            // rowStyle: ({parentId}) => {
                            //     if(parentId) {
                            //         return { backgroundColor: '#ffaaaa' };
                            //     }
                            // }

                        }}
                        detailPanel={[
                            {
                                tooltip: 'Voir plus',
                                render: rowData => {
                                    return (
                                        <MaterialTable style={{margin : '0 10%  5% 10% '  }}
                                            columns={[
                                                { title: 'Identité', field: 'identité',
                                                    render: (rowData) => {
                                                        const button = (
                                                            <IconButton
                                                                color="inherit"
                                                                onClick={()=>setPhotoDialog(`${/*baseUrlTest + "/" + */rowData.personal_photo}`)}

                                                            >
                                                                <img src={PermisIcon} style={{width: 40, borderRadius: '50%' }}/>
                                                            </IconButton>
                                                        );
                                                        return button;
                                                    }

                                                   // render: rowData => <img src={PermisIcon} style={{width: 40, borderRadius: '50%' }}/>
                                                },
                                                { title: 'Les coordonnées du client', field: 'name', render: (rowData)=>{

                                                    return (
                                                        Coordonnees(rowData)
                                                    )
                                                    } },
                                                { title: 'Les coordonnées du véhicule', field: 'surname', render: (rowData)=>{

                                                        return (
                                                            Coordonnees(rowData)
                                                        )
                                                    } },


                                            ]}
                                            data={[
                                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63, personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' , adresse: 'Rue de la paix, Paris' , coordinates: 33, adresseSecondaire: 'Rue de la paix, Paris'},

                                            ]}

                                                       components={{
                                                           Container: props => <Paper {...props} elevation={0}/>
                                                       }}
                                            options={{
                                                search: false,
                                                headerStyle: {
                                                    color: '#9E9E9E',
                                                    fontFamily : 'var(--roboto-font)',
                                                    fontWeight: 300,
                                                    fontSize: '1.2rem'
                                                },
                                                paging: false,
                                                showTitle: false,
                                                actionsColumnIndex: -1,
                                                toolbarButtonAlignment:"left",
                                                sorting: true
                                            }}
                                                       actions={[rowData => ({
                                            icon:  ()=>(<Button  color="primary" style={{ borderRadius: 50 }} variant="contained">confirmer</Button>),
                                            tooltip: 'Delete User',
                                           // onClick: (event, rowData) => {setRejectDialogOpenStatus(true); setLocataireEmail(rowData.email); },
                                        })]}
                                                       localization={{
                                                           header: {
                                                           actions: ''
                                                       }
                                        }}
                                        />
                                    )
                                },
                            },

                        ]}
                        // parentChildData={(row, rows) =>
                        //     rows.find(a => a.id === row.parentId)
                        // }


                    />
                    <RejectDialog isOpen={isRejectDialogopen} setOpen={setRejectDialogOpenStatus} locataireEmail={locataireEmail}/>
                    <PermisDialog setOpen={setPermisDialog} imageSource={permisDialog} />
                    <PhotosDialog setOpen={setPhotoDialog} imageSource={photoDialog} />
                </div>
            </PerfectScrollbar>
    );
}
