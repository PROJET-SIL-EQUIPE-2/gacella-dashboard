import {Box, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import allIcon from "../assets/allIcon.png";
import waitingIcon from "../assets/waitingIcon.png";
import spamIcon from "../assets/spamIcon.png";
import archivedIcon from "../assets/archivedIcon.png";
import {useLocation} from "react-router-dom";
import {history} from "../../../index";

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}


const SupportSideBarCompounent =({children})=>{
    let query = useQuery();

    const location = useLocation();
    const pathName= location.pathname;
    const filterType=query.get("filter")
    return(
        <div   style={{ height: 400, width: '100%' }}>
            <Grid container spacing={2} >
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12} >
                    <Box  style={{borderRadius : '25px', margin : '15px'}}
                          sx={{
                              height: 100, p: 4 ,
                              backgroundColor: 'white',
                              boxShadow: '0px 10px 27px 1px rgba(0, 0, 0, 0.05)',
                          }}
                    >
                        <Typography variant="h2"  fontFamily={"lora"}>
                            Demandes de support
                        </Typography>
                    </Box>
                </Grid>
                <Grid spacing={4} container>
                    <Grid item xs={3}>
                        <Box style={{borderRadius : '25px', margin : '0px 15px 15px 30px'}}  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',boxShadow: '2px 10px 27px 1px rgba(0, 0, 0, 0.05)'  }}>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListItem  >
                                        <ListItemButton onClick={()=>history.push("/DemandeSupport?filter=all")} selected={filterType==='all'}  >
                                            <ListItemIcon>
                                                <img src={allIcon} />
                                            </ListItemIcon>
                                            <ListItemText primary="Toutes les demandes" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton  onClick={()=>history.push("/DemandeSupport?filter=pending")} selected={filterType==='pending'} >
                                            <ListItemIcon>
                                                <img src={waitingIcon} />
                                            </ListItemIcon>
                                            <ListItemText primary="En attente" />
                                        </ListItemButton>
                                    </ListItem>


                                </List>
                            </nav>
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default SupportSideBarCompounent
