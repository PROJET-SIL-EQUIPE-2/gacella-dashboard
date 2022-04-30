import * as React from 'react';
import './styles.css'
import List from "@mui/material/List";
import {ListItem} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Coordonnees(props) {


    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };

    return (
        <div><List style={flexContainer}>

            <ListItem> <Typography variant="h5" component="div">
                {props.adresse}
            </Typography>
            </ListItem>

        </List>
            <List style={flexContainer}>
                <ListItem>
                    <Typography  color="text.secondary">
                        {props.adresseSecondaire}
                    </Typography>
                </ListItem>

            </List>
            <List style={flexContainer}>
                <ListItem style={{width: 10}}>
                    <Typography  color="text.secondary">
                        {props.coordinates}
                    </Typography>
                </ListItem>

            </List>

        </div>
    );
}
