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
import { ThemeProvider } from '@material-ui/styles';
import {history} from "../../index";
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}
export default function DemandesSupportRoute() {

    let query = useQuery();
var i=0;
    const location = useLocation();
    const pathName= location.pathname;
    const filterType=query.get("filter")
    console.log("FILTER TYPE =", filterType)
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
                    <div className="roboto-500 gacela-gray9E pt-2 line-clamp"> {rowData.message}</div>
                </div>
            </div>
            )
        }
    ]

    const data=[
        { id: 2, message: 'Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran Mehmet Baran', Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { id: 3, message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran this text is made longer to show text clamp where overflow text is clipped out', Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { id: 4, message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran', Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { id: 5, message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran', Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
        { id: 5, message: 'Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran Zerya Betl Baran', Locataires : {personal_photo: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,familyName : 'mecheri',name :'hadia'}},
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


                    <Grid spacing={2} container>

                        <Grid item xs={12}>
                            <MaterialTable
                            Title="Demandes de Support"
                            className={classes.table}
                            style={{borderRadius : '25px', margin : '12px 15px 15px 15px', boxShadow: '0px 10px 27px 1px rgba(0, 0, 0, 0.05)'}}
                            icons={tableIcons}
                            localization={tableLang}
                            columns={columns}
                            data={data}
                            // data={demandesSupports.data}
                            options={{
                                search: false,
                                actionsColumnIndex: -1,
                                detailPanelType: 'single',
                                showTitle: false,
                                showHeader: false,
                                pageSize:6,
                                headerStyle: {
                                    color: "#9E9E9E",
                                    fontFamily: "var(--roboto-font)",
                                    fontWeight: 300,
                                    fontSize: "1.2rem",
                                },

                            }}
                            components={{
                                Header: props => (
                                    <div style={{ backgroundColor: '#e8eaf5'}}>
                                    </div>
                                )
                            }}
                                onRowClick={(event, rowData, togglePanel) =>{
                                    //togglePanel() ;
                                    history.push('/DemandeSupport/'+rowData.id)

                                }}

                            />
                        </Grid>
                    </Grid>
                </div>

    );
}
