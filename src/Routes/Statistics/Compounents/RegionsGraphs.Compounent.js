import React, {useEffect} from "react";
import Chart from "react-apexcharts";
import {useDispatch, useSelector} from "react-redux";
import {fetchgetAllRegions} from "../../../redux/actions/actions";
import {Box, CircularProgress, Grid, Typography} from "@mui/material";


export default function RegionsGraph(){

    const dispatch = useDispatch();
    const regions = useSelector((state) => state.regionsStats);

    useEffect(()=>{
        dispatch(fetchgetAllRegions());
    }, [])

    console.log(regions);
    console.log(regions?.data?.map((region,index)=>{return(region.rate)}));
    console.log(regions?.data?.map((region,index)=>{return(region.region.region_name)}));


    const graph={
        series:regions?.data?.map((region,index)=>{return(region.rate)}),
        options:{
            chart: {
                type: 'donut',
                fontFamily:"Roboto , sans-serif",
                redrawOnParentResize:true,
                redrawOnWindowsResize:true,
                width:"100%",
            },
            labels:regions?.data?.map((region,index)=>{return(region.region.region_name)}),
            colors:["#355070","#EAAC8B","#569FD2","#CC9999","#C8C9E8","#D1B48D"],
            plotOptions:{
                pie:{
                    expandOnClick:true,
                    donut:{
                        size: '65%',
                        labels: {
                            show: true,
                            total:{
                                show:true,
                                showAlways:true,
                                fontSize:  '28px',
                                fontWeight: 600,
                                label: 'Total',
                            }
                        }
                    }
                }
            },
            legend:{
                show:true,
                showForSingleSeries:false,
                offsetY:30,
                position:'right',
                horizontalAlign:'center',
            },
            title:{
                text:"Le taux d\'utilisation par région",
                align: 'center',
                margin: 20,
                style: {
                    fontSize:  '20px',
                    fontWeight:  'bold',
                },
            }
        }
    };


    return (
        ( regions.loading || regions.error )
            ? (
                <div style={{ width: '100%' }} >
                    <Box sx={{ display: 'flex' , justifyContent: "center"}}>
                        <CircularProgress color="primary" />
                    </Box>
                </div>
            )
            : (
                <div className="bg-white" style={{minWidth:"45%" , width:"fit-content" , margin:"15px" , borderRadius:"25px"}}>
                    <Chart options={graph.options}
                           series={graph.series}
                           type="donut"
                           width="100%"
                    />
                </div>
            )
    );

}