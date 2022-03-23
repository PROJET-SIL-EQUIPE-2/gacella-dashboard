import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import {useDispatch, useSelector} from "react-redux";
import {closeSnackBar} from "../../redux/actions/actions";
import {Alert} from "@mui/lab";


export default function SnackBarCompounent() {
    const dispatch = useDispatch() ;
    // const [state, setState] = React.useState({
    //     open: false,
    //     vertical: 'bottom',
    //     horizontal: 'right',
    //     number : '0000'
    // });
    const snackBarInfo= useSelector( state => state.snackBarInfo) ;

    const { open , text , severity,  vertical , horizontal  } = snackBarInfo;

    // export const handleClickSnackBar = (number) => () => {
    //     setState({ ...state , open: true , number : number });
    // };



    // const buttons = (
    //     <React.Fragment>
    //         <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>Top-Center</Button>
    //         <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>Top-Right</Button>
    //         <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
    //             Bottom-Right
    //         </Button>
    //         <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
    //             Bottom-Center
    //         </Button>
    //         <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>Bottom-Left</Button>
    //         <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>Top-Left</Button>
    //     </React.Fragment>
    // );

    return (
        <div>
            {/*{buttons}*/}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={()=>dispatch(closeSnackBar())}
                key={vertical + horizontal}
                autoHideDuration={3000}
            >
                <Alert onClose={()=>dispatch(closeSnackBar())} severity={severity} sx={{ width: '100%' }}>
                    {text}
                </Alert>
            </Snackbar>
        </div>
    );
}




