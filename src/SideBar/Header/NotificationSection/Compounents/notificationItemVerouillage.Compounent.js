import {
    Avatar,
    Chip,
    Grid,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from "@mui/material";
import User1 from "../userAvatar.png";
import {styled, useTheme} from "@mui/material/styles";
import UnlockIcon from '../../../../assets/icons/unlockIcon.svg'
const ListItemWrapper = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    padding: 16,
    '&:hover': {
        background: theme.palette.primary.light
    },
    '& .MuiListItem-root': {
        padding: 0
    }
}));

const NotificationItemVerouillageCompounent =()=>{
    const theme = useTheme();

    const chipSX = {
        height: 24,
        padding: '0 6px'
    };
    const chipErrorSX = {
        ...chipSX,
        color: theme.palette.orange.dark,
        backgroundColor: theme.palette.orange.light,
        marginRight: '5px'
    };

    const chipWarningSX = {
        ...chipSX,
        color: theme.palette.warning.dark,
        backgroundColor: theme.palette.warning.light
    };

    const chipSuccessSX = {
        ...chipSX,
        color: theme.palette.success.dark,
        backgroundColor: theme.palette.success.light,
        height: 28
    };

    return(
        <ListItemWrapper className="gacela-orangeFA-bg">
            <div className="d-flex align-items-center">
                <div className="pl-2 pr-2">
                    <img style={{width : '40px' , height : '40px'}} src={UnlockIcon} alt=""/>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center">

                        <div className="col-8 pl-0 roboto-400 gacela-black17" style={{fontSize : '1.1rem'}}>Demande de  support </div>
                        <div className="col-4 pr-0">
                            <Typography variant="caption" display="block" gutterBottom>
                                2 min ago
                            </Typography>
                        </div>


                    </div>
                    <div className="col-12 pl-0 roboto-400" >
                            <Typography variant="subtitle2" className="gacela-gray9E roboto-400"> John Michel vous a envoyé une demande de support </Typography>
                    </div>
                </div>
            </div>


        </ListItemWrapper>
    )
}

export default NotificationItemVerouillageCompounent;
