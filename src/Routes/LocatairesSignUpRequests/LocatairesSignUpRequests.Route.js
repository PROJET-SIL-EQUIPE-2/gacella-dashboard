import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MaterialTable, { MTableToolbar } from 'material-table';
import { Avatar } from '@mui/material';
import PermisIcon from "./assets/PermisIcon.png"
import IdentiteIcon from "./assets/IdentiteIcon.png"
import CheckIcon from "./assets/CheckIcon.png"
import {tableLang , tableIcons} from '../../ui-component/ReactTablesWidget/Widget'
import DeleteIcon from "./assets/DeleteIcon.png"
import './styles.css';
import './Compounents/rejectDialog.Compounent';
import RejectDialog from "./Compounents/rejectDialog.Compounent";
import {useState} from "react";



export default function LocatairesSignUpRequestsRoute() {

    const [isRejectDialogopen, setRejectDialogOpenStatus] = useState(false);
    const columns=[
        { title: 'Avatar', field: 'imageUrl', render: rowData =>(
            <div className="d-flex align-items-center">
                <Avatar style={{width : "50px" , height : "50px" , borderRadius : "25px"}}  src={rowData.imageUrl} />
                <div className="pl-2 flex-column">
                    <div className="roboto-500 gacela-black21"> John Michael </div>
                    <div className="roboto-500 gacela-gray9E pt-2"> john.michael@gmail.com</div>
                </div>
            </div>
            )
        },
        {
            title: 'Numéro de téléphone',
            field: 'phoneNumber',
            render: rowData =>(<div className="roboto-500">0546859263</div>)
        },{
            title: 'Permis',
            field: 'permis',
            render: rowData =>(<img style={{ height : "40px" , width : "40px" }} src={PermisIcon}/>)
        },{
            title: 'Identité',
            field: 'permis',
            render: rowData =>(<img style={{ height : "40px" , width : "40px" }} src={IdentiteIcon}/>)
        }
    ]

    const data=[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
    ]

    const actions=[
            rowData=>({
                icon: ()=> (<img style={{ height : "40px" , width : "40px" }}  src={CheckIcon}/>),
                tooltip: "Confirmer l'inscription",
                onClick: (event, rowData) => alert("You saved " + rowData.name)
            }),
            rowData => ({
            icon:  ()=>(<img style={{ height : "40px" , width : "40px" }}  src={DeleteIcon}/>),
            tooltip: 'Delete User',
            onClick: (event, rowData) => setRejectDialogOpenStatus(true),
        })
    ]
    return (
        <div className="bg-white" style={{ height: 400, width: '100%' }}>
            <MaterialTable
                style={{borderRadius : '25px'}}
                icons={tableIcons}
                localization={tableLang}
                title="Render Image Preview"
                columns={columns}
                data={data}
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
                    actionsCellStyle:{
                        paddingRight : "3rem"
                    }
                }}

            />
            <RejectDialog isOpen={isRejectDialogopen} setOpen={setRejectDialogOpenStatus}/>
        </div>
    );
}
