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

import {tableLang , tableIcons} from '../../ui-component/ReactTablesWidget/Widget'
import './styles.css';
import {useState , useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchgetDemandesSupports,fetchgetValidatedLocataires} from "../../redux/actions/actions";
import { makeStyles } from '@material-ui/core/styles';
import {useLocation} from "react-router-dom";
import {history} from "../../index";
import CircularProgress from "@mui/material/CircularProgress";
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}
/*
*  for this to work there needs to be :
*  an  admin with id=1
*  locataire assigned to demande support
*  reply/1 brings replies to locataire 1 not replies to support 1
* */
export default function DemandesSupportRoute() {

    let query = useQuery();
var i=0;
    const location = useLocation();
    const pathName= location.pathname;
    const filterType=query.get("filter");
    const dispatch = useDispatch();
    const demandeSupport = useSelector(state => state.demandesSupports);
    const validateslocataires= useSelector(state => state.validatedLocataires);
    const [loaded,setLoaded]=useState(0);
    const bMap = validateslocataires.data.reduce((map, item) => map.set(item.id, [item.name, item.family_name, item.email]), new Map);
    const  baseUrlTest = "http://localhost:3000";
    const data=[];

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    let [result ,setResult] =useState(data);
    const [loc, setLoc] = useState(0);
    const [sup, setSup] = useState(0);
    useEffect( async () => {
        await dispatch(fetchgetDemandesSupports());
        await dispatch(fetchgetValidatedLocataires());
      //  await sleep(50);
        setLoc(1);

    },[] );



    useEffect(   async () => {

//       await sleep(0);
        // waits for 1000ms

        const b = validateslocataires.data;

        const aa = demandeSupport.data.supports;


        // setResult(demandeSupport.data.supports.map((item) => (Object.assign({
        //     Locataires: validateslocataires.data.reduce((map, item) => map.set(item.id, { name: item.name, family_name: item.family_name,email: item.email}), new Map).get(item.locataire_id),
        //
        // }, item))));
        const locatairesNames=validateslocataires.data.reduce((map, item) => map.set(item.id, item.name), new Map);
        const locatairesFamilyNames= validateslocataires.data.reduce((map, item) => map.set(item.id, item.family_name), new Map)
        setResult(demandeSupport.data.supports.map((item) => (Object.assign({
            locataireName: locatairesNames.get(item.locataire_id),
            locataireFamilyName: locatairesFamilyNames.get(item.locataire_id),

        }, item))));

    }, [loc]);


    useEffect(async () => {
        await sleep(100);
        const locatairesNames=validateslocataires.data.reduce((map, item) => map.set(item.id, item.name), new Map);
        const locatairesFamilyNames= validateslocataires.data.reduce((map, item) => map.set(item.id, item.family_name), new Map)

        switch (filterType) {
            case 'pending':
                setResult(demandeSupport.data.supports.map((item) => (Object.assign({
                    locataireName: locatairesNames.get(item.locataire_id),
                    locataireFamilyName: locatairesFamilyNames.get(item.locataire_id),

                }, item))).filter(supp => supp.read === false));
                break;
            default:
                break;
        }
    }, [filterType] );
const columns=[
        {  field: 'infos',
           render: rowData =>(
            <div className="d-flex align-items-center">
                <Avatar style={{width : "50px" , height : "50px" , borderRadius : "25px"}} src={'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'}   />
                <div className="pl-2 flex-column">
                    <div className="roboto-500 gacela-black21"> {rowData.locataireFamilyName} {rowData.locataireName}  </div>
                    <div className="roboto-500 gacela-gray9E pt-2 line-clamp"> {rowData.message}</div>
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


                    <Grid spacing={2} container>

                        <Grid item xs={12}>
                            <>{ (!demandeSupport.loading && !demandeSupport.error && result!=null)   ?

                            <MaterialTable
                            Title="Demandes de Support"
                            className={classes.table}
                            style={{borderRadius : '25px', margin : '12px 15px 15px 15px', boxShadow: '0px 10px 27px 1px rgba(0, 0, 0, 0.05)'}}
                            icons={tableIcons}
                            localization={tableLang}
                            columns={columns}
                            data={result}
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
                                    history.push('/DemandeSupport/'+rowData.demande_id);

                                }}

                            /> : <Box sx={{ display: 'flex' ,justifyContent: "center"}}>
                                    <CircularProgress />
                                </Box> }</>
                        </Grid>
                    </Grid>
                </div>

    );
}
