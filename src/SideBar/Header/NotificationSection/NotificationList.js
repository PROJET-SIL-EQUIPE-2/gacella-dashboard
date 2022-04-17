// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
    Avatar,
    Button,
    Card,
    CardContent,
    Chip,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Stack,
    Typography
} from '@mui/material';

// assets
import { IconBrandTelegram, IconBuildingStore, IconMailbox, IconPhoto } from '@tabler/icons';
import User1 from './userAvatar.png';
import NotificationItemVerouillageCompounent from "./Compounents/notificationItemVerouillage.Compounent";
import NotificationItemSupportCompounent from "./Compounents/notificationItemSupport.Compounent";
import NotificationItemInscriptionCompounent from "./Compounents/notificationItemInscription.Compounent";

// styles


// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = () => {

    const theme = useTheme();

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 330,
                py: 0,
                borderRadius: '10px',
                [theme.breakpoints.down('md')]: {
                    maxWidth: 300
                },
                '& .MuiListItemSecondaryAction-root': {
                    top: 22
                },
                '& .MuiDivider-root': {
                    my: 0
                },
                '& .list-container': {
                    pl: 7
                }
            }}
        >
           <NotificationItemVerouillageCompounent/>
            <Divider />
            <NotificationItemSupportCompounent/>
            <Divider />
            <NotificationItemInscriptionCompounent/>
            <Divider />
            <NotificationItemVerouillageCompounent/>
            <Divider />
            <NotificationItemVerouillageCompounent/>
        </List>
    );
};

export default NotificationList;
