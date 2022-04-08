import * as React from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import {tableLang , tableIcons} from '../../ui-component/ReactTablesWidget/Widget'
import profileIcon from "./assets/ProfileIcon.png"
import './styles.css';
import ProfileDialog from "./Compounents/ProfileDialog.Compounent";
import {useState , useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchgetAMS} from "../../redux/actions/actions";



export default function AmsRoute() {
    const [isAmProfileDialogopen, setAmProfileDialogOpenStatus] = useState(false);
    const [amId, setAmId] = useState(null);
    const dispatch = useDispatch();
    const am = useSelector(state => state.amsProfiles);

    const  baseUrlTest = "http://localhost:3000";

    useEffect(()=>{
        dispatch(fetchgetAMS());
    }, [])
    
    const columns=[
        { 
            title: 'Nom Complet',
            field: 'name_familyName',
            render: rowData =>(<div className="roboto-500">{rowData.familyName} {rowData.name}</div>)
        },
        {
            title: 'Adresse Email',
            field: 'email',
            render: rowData =>(<div className="roboto-500">{rowData.email}</div>)
        },
        {
            title: 'Numéro de téléphone',
            field: 'phoneNumber',
            render: rowData =>(<div className="roboto-500">{rowData.phone_number}</div>)
        },
        {
            title: 'Profile',
            field: 'profile',
            render: rowData =>(<img className="hoverable"
                                    onClick={() =>{
                                            /**/
                                            setAmProfileDialogOpenStatus(true); setAmId(rowData.agent_id);
                                        }}
                                    style={{ height : "40px" , width : "40px" }}
                                    src={profileIcon}
                                />)
        },
    ] 
    
    return (
        (am.loading || am.error) ? null : (
                <div className="bg-white" style={{ height: 400, width: '100%' }}>
                    <MaterialTable
                        style={{borderRadius : '25px'}}
                        icons={tableIcons}
                        localization={tableLang}
                        title="Gestions des comptes des agents de maintenance"
                        columns={columns}
                        data={am.data.data.allAgents}
                        options={{
                            search:false,
                            selection:true,
                            sorting:true,
                            //filtering:true,
                            showSelectAllCheckbox:true,
                            showTextRowsSelected:true,
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
                    <ProfileDialog isOpen={isAmProfileDialogopen} setOpen={setAmProfileDialogOpenStatus} amId={amId}/>
                </div>
            )

    );
}