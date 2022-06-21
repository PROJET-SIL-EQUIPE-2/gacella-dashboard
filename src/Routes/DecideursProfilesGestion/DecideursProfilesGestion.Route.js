import * as React from 'react';
import MaterialTable from 'material-table';
import { Avatar } from '@mui/material';
import {tableLang , tableIcons} from '../../ui-component/ReactTablesWidget/Widget'
import LinkIcon from "./assets/LinkIcon.png"
import RemoveIcon from "./assets/RemoveIcon.png";
import AddIcon from "./assets/AddUserIcon.png";
import "./styles.css";
import ProfileDialog from "./Compounents/ProfileDialog.Compounent";
import ConfirmDialog from "./Compounents/ConfirmDialog.Compounent";
import SignUpDialog from "./Compounents/SignUpDialog.Compounent";
import {useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchgetDecideursProfiles} from "../../redux/actions/actions";
import BlockProfileToggleButton from "./Compounents/BlockProfileToggleButton.Compounent";





export default function DecideursProfilesGestionRoute() {

    const [isProfileDialogopen, setProfileDialogOpenStatus] = useState(false);
    const [isConfirmDialogopen, setConfirmDialogOpenStatus] = useState(false);
    const [isSignUpDialogopen, setSignUpDialogOpenStatus] = useState(false);
    const dispatch = useDispatch();
    const decideursProfiles = useSelector(state => state.decideursProfiles);
    const [selectedProfile, setSelectedProfile] = useState({});
    const [decideurEmail, setDecideurEmail] = useState(null);

    const  baseUrlTest = "http://localhost:3000";

    useEffect(()=>{
        dispatch(fetchgetDecideursProfiles());
    }, [])

    const columns=[
        {
            title: 'Nom Complet',
            field: 'imageUrl',
            render: rowData =>(
            <div className="d-flex align-items-center">
                <Avatar style={{width : "50px" , height : "50px" , borderRadius : "25px"}}  src={null} />
                <div className="pl-2 flex-column">
                    <div className="roboto-500 gacela-black21"> {rowData.familyName} {rowData.name} </div>
                </div>
            </div>
            )
        },
        {
            title: 'Email',
            field: 'email',
            render: rowData =>(<div className="roboto-500">{rowData.email}</div>)
        },
        {
            title: 'Numéro de téléphone',
            field: 'phoneNumber',
            render: rowData =>(<div className="roboto-500">{rowData.phone_number}</div>)
        },
        {
            title: 'Bloqué ?',
            field: 'blocked',
            render: rowData=>(<BlockProfileToggleButton email={rowData.email} isBlocked={rowData.blocked}/>
            )
        }
    ]

    /*const data=[
        { name: 'Mehmet', familyName: 'Baran', email: "email@email", phone_number:"0123456789", imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
        { name: 'Zerya Betül', familyName: 'Baran', email: "email@email", phone_number:'0123456789', imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
        { name: 'Zerya Betül', familyName: 'Baran', email: "email@email", phone_number:'0123456789', imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
    ]*/

    const actions=[
       {
            icon:  ()=>(<img style={{ height : "40px" , width : "40px" }}  src={AddIcon}/>),
            tooltip: 'Ajouter un décideur',
            position:'toolbar',
            isFreeAction: true,
           onClick: (event) => {setSignUpDialogOpenStatus(true); },
       }
        ,{
            icon:  ()=>(<img style={{ height : "40px" , width : "40px" }}  src={LinkIcon}/>),
            tooltip: 'Voir les détails du décideur',
            onClick: (event, rowData) => {setSelectedProfile({
                    decideur_id: rowData.decideur_id,
                    name: rowData.name,
                    family_name: rowData.family_name,
                    phone_number: rowData.phone_number,
                    email: rowData.email,
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                });
                setProfileDialogOpenStatus(true); },
        }
        , {
            icon:  ()=>(<img style={{ height : "40px" , width : "40px" }}  src={RemoveIcon}/>),
            tooltip: 'supprimer décideur',
            onClick: (event, rowData) => { setDecideurEmail(rowData.email); setConfirmDialogOpenStatus(true); },
        }
    ]

    //console.log(selectedProfile) ;

    return (
        ( decideursProfiles.loading || decideursProfiles.error) ? null : (
                <div className="bg-white" style={{ height: 400, width: '100%' }}>
                    <MaterialTable
                        style={{borderRadius : '25px'}}
                        icons={tableIcons}
                        localization={tableLang}
                        title="Gestions des comptes des décideurs"
                        columns={columns}
                        actions={actions}
                        data={decideursProfiles.data}//{data}//{decideursProfiles.data}
                        options={{

                            search:false,
                            sorting:true,
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
                    <ProfileDialog isOpen={isProfileDialogopen} setOpen={setProfileDialogOpenStatus} profileForm={selectedProfile} setProfileForm={setSelectedProfile}/>
                    <ConfirmDialog isOpen={isConfirmDialogopen} setOpen={setConfirmDialogOpenStatus} decideurEmail={decideurEmail}/>
                    <SignUpDialog isOpen={isSignUpDialogopen} setOpen={setSignUpDialogOpenStatus} />
                </div>
        )
    );
}
