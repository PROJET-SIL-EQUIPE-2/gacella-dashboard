import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Box, createTheme, Divider, Grid, List, TextField} from "@mui/material";
import backIcon from '../assets/backIcon.png';
import replyIcon from '../assets/replyIcon.png';
import ReplyIcon from '@mui/icons-material/Reply';
import {ThemeProvider} from "@emotion/react";
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MUIRichTextEditor from "mui-rte";
import TextEditor from "./TextEditor.Component";
import {Button} from "reactstrap";
import {ListItem} from "@mui/material";
import {history} from "../../../index";

const save = (data) => {
    console.log(data);
};

const myTheme = createTheme({
    // Set up your custom MUI theme here
});




const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            ic: {
                main: '#C9805C',
                contrastText: '#fff',
            },

        },
    });

    return (
        <Card sx={{ boxShadow: '0px 10px 27px 1px rgba(0, 0, 0, 0.05)', margin: "25px" ,borderRadius : '25px'}}>
            <CardHeader

                avatar={
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    bgcolor: 'background.paper',
                    color: 'text.secondary',
                    '& svg': {
                        m: 1.5,
                    },
                    '& hr': {
                        mx: 0.5,
                    },
                }}>
                    <IconButton     onClick={()=>history.push("/DemandeSupport")}
                                     sx={{ margin : '0px 20px 0px 0px'}}  aria-label="settings">
                        <img  src={backIcon} />
                    </IconButton>
                <Avatar style={{width : "50px" , height : "50px" , borderRadius : "20px"}}  src={props.personal_photo} />
                </Box>
                    }

                title="user name"
                subheader="email@email.com"
            />
            <Divider />

            <CardContent>
                <Typography variant="h4" gutterBottom component="div" color="text.primary">
                    h4. Heading
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                    {props.message}
                </Typography>
            </CardContent>
            <CardActions disableSpacing >
                <Typography color={'text.secondary'}>
                    September 14, 2016
                </Typography>

                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                    <ThemeProvider theme={theme}>
                        <ReplyIcon color={'ic'}/>
                    </ThemeProvider>
            </ExpandMore>
                <IconButton aria-label="add to favorites">
                    <ThemeProvider  theme={theme}>
                        <ReportGmailerrorredOutlinedIcon color={'ic'}/>
                    </ThemeProvider>
                </IconButton>
                <IconButton aria-label="share">
                    <ThemeProvider theme={theme}>
                        <DeleteOutlineOutlinedIcon color={'ic'}/>
                    </ThemeProvider>
                </IconButton>

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {/*<Typography paragraph>Method:</Typography>*/}
                    {/*<Typography paragraph>*/}
                    {/*    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set*/}
                    {/*    aside for 10 minutes.*/}
                    {/*</Typography>*/}
                    {/*<Typography paragraph>*/}
                    {/*    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over*/}
                    {/*    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring*/}
                    {/*    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a*/}
                    {/*    large plate and set aside, leaving chicken and chorizo in the pan. Add*/}
                    {/*    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,*/}
                    {/*    stirring often until thickened and fragrant, about 10 minutes. Add*/}
                    {/*    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.*/}
                    {/*</Typography>*/}
                    {/*<Typography paragraph>*/}
                    {/*    Add rice and stir very gently to distribute. Top with artichokes and*/}
                    {/*    peppers, and cook without stirring, until most of the liquid is absorbed,*/}
                    {/*    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and*/}
                    {/*    mussels, tucking them down into the rice, and cook again without*/}
                    {/*    stirring, until mussels have opened and rice is just tender, 5 to 7*/}
                    {/*    minutes more. (Discard any mussels that don&apos;t open.)*/}
                    {/*</Typography>*/}

                    <List >
<ListItem>
                        <TextEditor sx={{ margin : '20px'}} />

</ListItem>
                        <Divider light />
                        <ListItem  style={{display:'flex', margin:'25px 0px 0px 0px ', justifyContent:'flex-end'}}>
                            <Button style={{boxShadow:'0 0 0 0.2rem rgba(0,123,255,.5)'
                            }}
                                margin= '20px'
                                variant="outlined"
                                color='transparent'
                                size="medium"
                                >Envoyer</Button>
                        </ListItem>
                    </List>

                </CardContent>
            </Collapse>
        </Card>
    );
}