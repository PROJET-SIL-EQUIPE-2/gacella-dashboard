import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import './styles.css';
import {useDispatch} from "react-redux";
import {fetchToggleBlockDecideur} from "../../../redux/actions/actions";
import {useState} from "react";



export default function BlockProfileToggleButton({email,isBlocked}) {

    const [blocked, setBlocked] = useState(isBlocked);

    const dispatch = useDispatch();
    const toggleBlocked = () => {
        dispatch(fetchToggleBlockDecideur(email))
            .then(()=>{
                setBlocked(!blocked);
            })
    }

    return (
        <ToggleButton value="check"
                      sx={{
                          borderRadius:'100%',
                          border: () => `none`,
                      }}
                      selected={blocked}
                      color={(blocked?'error':'primary')}
                      onChange={()=>toggleBlocked()}
        >
            <BlockRoundedIcon sx={{ fontSize: 40 }}/>
        </ToggleButton>
    );
}
