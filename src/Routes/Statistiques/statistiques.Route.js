import * as React from 'react';
import './styles.css';
import {App} from "./Components/barre.Component";
import {Box, CardContent, Grid, ListItem, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import deverouillageCard from "./Components/déverouillageCard.Component.js";
import {Card} from "@mui/material";
import {List} from "@mui/material";
import deverouillageIcon from "./assets/deverouillageIcon.png";
import inscriptionIcon from "./assets/inscriptionsIcon.png";
import demandesSupportIcon from "./assets/demandesSupportIcon.png";
import pannesresolusIcon  from "./assets/pannesresolusIcon.png";
import {Button} from "@mui/material";
import numberscard from "./Components/déverouillageCard.Component";
import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts";
import {App2} from "./Components/barreAgents.Component";
class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Inflation',
                data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + "%";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: ["#304758"]
                    }
                },

                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    position: 'top',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: '#D8E3F0',
                                colorTo: '#BED1E6',
                                stops: [0, 100],
                                opacityFrom: 0.4,
                                opacityTo: 0.5,
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }

                },
                title: {
                    text: 'Monthly Inflation in Argentina, 2002',
                    floating: true,
                    offsetY: 330,
                    align: 'center',
                    style: {
                        color: '#444'
                    }
                }
            },


        };
    }



    render() {
        return (



            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>



        );
    }
}


export default function Statistiques() {
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        justifyContent: 'space-between'
    };
    return (
        <Grid spacing={2} container>
            <Grid item xs={12} >
                <Box  style={{borderRadius : '25px', margin : '15px'}}
                      sx={{
                          height: 100, p: 4 ,
                          backgroundColor: 'white',
                          boxShadow: '0px 10px 27px 1px rgba(0, 0, 0, 0.05)',
                      }}
                >
                    <List style={flexContainer}>
                        <ListItem>
                    <Typography variant="h2"  fontFamily={"lora"}>

                        Statistiques
                    </Typography>
                        </ListItem>
                        <ListItem>
                            <Button className="rightaligned" variant="contained">Contained</Button>
                        </ListItem>
                    </List>

                </Box>
            </Grid>
            <Grid item xs={7} style={{borderRadius : '25px', margin : '12px 15px 15px 30px', boxShadow: '0px 10px 27px 1px rgba(0, 0, 0, 0.05)', backgroundColor : '#fafafa',padding:'10px'}}>
                <App2 />
            </Grid>
            <Grid item xs={4}>
                <Stack spacing={2}>

                <Card>
                    <CardContent>
                        <List style={flexContainer} >
                            <ListItem> <img className={"statsicons"} src={deverouillageIcon}/></ListItem>
                            <ListItem> <Typography variant="h5" fontFamily={"lora"} > 100 </Typography></ListItem>
                        </List>
                        <Typography  >
                            pannes résolus
                        </Typography>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <List style={flexContainer} >
                            <ListItem> <img className={"statsicons"} src={inscriptionIcon}/></ListItem>
                            <ListItem> <Typography variant="h5" fontFamily={"lora"} > 100 </Typography></ListItem>
                        </List>
                        <Typography  >
                            pannes résolus
                        </Typography>
                    </CardContent>
                </Card>

                        <Card>
                            <CardContent>
                                <List style={flexContainer} >
                                    <ListItem> <img className={"statsicons"} src={demandesSupportIcon}/></ListItem>
                                    <ListItem> <Typography variant="h5" fontFamily={"lora"}> 100 </Typography></ListItem>
                                </List>
                                <Typography >
                                    pannes résolus
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <List style={flexContainer} >
                                    <ListItem> <img className={"statsicons"} src={pannesresolusIcon}/></ListItem>
                                    <ListItem> <Typography variant="h5" fontFamily={"lora"}> 100 </Typography></ListItem>
                                </List>
                                <Typography   fontFamily={"lora"}>
                                    pannes résolus
                                </Typography>
                            </CardContent>
                        </Card>

                </Stack>
                <Stack>
                    <numberscard Icon={pannesresolusIcon}/>
                    <numberscard Icon={pannesresolusIcon}/>
                    <numberscard Icon={pannesresolusIcon}/></Stack>
            </Grid>

        </Grid>

);
}
