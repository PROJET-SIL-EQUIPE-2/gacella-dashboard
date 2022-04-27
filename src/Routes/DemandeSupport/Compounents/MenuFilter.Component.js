import * as React from 'react';
import './styles.css'
import List from "@mui/material/List";
import {Box, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import allIcon from "../assets/allIcon.png";
import waitingIcon from "../assets/waitingIcon.png";
import spamIcon from "../assets/spamIcon.png";
import archivedIcon from "../assets/archivedIcon.png";

export default function MenuFilter(props) {


    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };

    return (
        <Box style={{borderRadius : '25px', margin : '0px 15px 15px 25px'}}  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',boxShadow: 1  }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem >
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={allIcon} />
                            </ListItemIcon>
                            <ListItemText primary="Toutes les demandes" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={waitingIcon} />
                            </ListItemIcon>
                            <ListItemText primary="En attente" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={spamIcon} />
                            </ListItemIcon>
                            <ListItemText primary="Spam" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={archivedIcon} />
                            </ListItemIcon>
                            <ListItemText primary="Archivé" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
}
