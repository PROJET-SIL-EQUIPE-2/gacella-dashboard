import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MaterialTable, { MTableToolbar } from 'material-table';
import {Avatar, Chip, IconButton, ListItem, Paper} from '@mui/material';
import PermisIcon from "../DemandeDeverouillage/assets/PermisIcon.png"
import IdentiteIcon from "../DemandeDeverouillage/assets/IdentiteIcon.png"
import CheckIcon from "../DemandeDeverouillage/assets/CheckIcon.png"
import {tableLang , tableIcons} from '../../ui-component/ReactTablesWidget/Widget'
import DeleteIcon from "../DemandeDeverouillage/assets/DeleteIcon.png"
import './styles.css';
import {useState, useEffect, createRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAcceptLocataire, fetchgetLocatairesRequests, fetchgetDeverouillageRequests} from "../../redux/actions/actions";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import Coordonnees from "../DemandeDeverouillage/Compounents/coordonneesList.Component";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import LocationIcon from "../gestionverou/assets/LocationIcon.png";
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Download} from "@mui/icons-material";
import moment from "moment";
import WebViewer from '@pdftron/pdfjs-express';
import PDFViewer from 'pdf-viewer-reactjs'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';

import { Worker } from '@react-pdf-viewer/core';

// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';



export default function ReportsLists() {
    moment.locale('fr');
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    const [pdfViewersRefs, setPdfViewersRefs] = React.useState([]);
    const reportsLists = useSelector(state => state.reportsLists);
    // setting an array of pdf viewers
    useEffect(()=>{
        // setPdfViewersRefs((elRefs) =>
        //     Array(reportsLists.data.length)
        //         .fill()
        //         .map((_, i) => elRefs[i] || createRef()),
        // );
        // pdfViewersRefs.forEach( (pdfViewerRef  , index)=>{
        //     console.log("LINK =",reportsLists.data[index].link )
        //     WebViewer(
        //         {
        //             initialDoc: reportsLists.data[index].link,
        //         },
        //         pdfViewerRef.current,
        //     ).then((instance) => {
        //
        //     });
        //
        // })

    },[reportsLists.data])

    const [isRejectDialogopen, setRejectDialogOpenStatus] = useState(false);
    const dispatch = useDispatch();


    const [permisDialog, setPermisDialog] = useState(null);
    const [photoDialog, setPhotoDialog] = useState(null);
    const [locataireEmail, setLocataireEmail] = useState(null);

    const  baseUrlTest = "http://localhost:3000";
    //associate new row to each row in locatairesrequests.data



    const columns=[
        { title: 'La date de creation', field: 'imageUrl', render: rowData =>(
                        <div className="roboto-500 gacela-black21"> {rowData.createdAt}  </div>
            )
        },
        {
            title: 'Le nom de rapport',
            field: 'vegicule',
            render: rowData =>(<div className="roboto-500">{rowData.name}</div>)
        }
    ]

    const downloadClicked =()=>{
        const link = document.createElement("a");
        link.download = `http://www.africau.edu/images/default/sample.pdf`;
        link.href = "http://www.africau.edu/images/default/sample.pdf";
        link.click();
    }

    const actions=[
        rowData=>({
            icon: ()=><React.Fragment><Download/> <div>Télécharger</div> </React.Fragment> ,
            tooltip: "Télécharger le rapport",
            onClick: (event, rowData) =>{
                const link = document.createElement("a");
                link.download =  rowData.downloadLink;
                link.href = rowData.downloadLink;
                link.click();

            }
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
                    title="Les rapports"
                    columns={columns}
                    data={reportsLists.data}
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
                                // console.log("ROW DATA =", rowData);
                                // console.log("The ref =",pdfViewersRefs[0] )
                                return (
                                    <div>
                                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                                            <Viewer fileUrl="http://www.africau.edu/images/default/sample.pdf"/>
                                        </Worker>
                                    </div>
                                )

                                    // .then(()=>{
                                    //     console.log("LINK AFTER THEN  =",reportsLists.data[rowData.tableData.id].link )
                                    //     // WebViewer(
                                    //     //     {
                                    //     //         initialDoc: reportsLists.data[rowData.tableData.id].link,
                                    //     //     },
                                    //     //     pdfViewersRefs[rowData.tableData.id].current,
                                    //     // )
                                    // })

                            }
                        },

                    ]}
                    // parentChildData={(row, rows) =>
                    //     rows.find(a => a.id === row.parentId)
                    // }


                />

            </div>
        </PerfectScrollbar>
    );
}
