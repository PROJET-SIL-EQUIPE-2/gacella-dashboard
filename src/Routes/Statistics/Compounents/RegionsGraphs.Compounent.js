import React, {useEffect} from "react";
import Chart from "react-apexcharts";
import {useDispatch, useSelector} from "react-redux";
import {fetchgetAllRegions} from "../../redux/actions/actions";

export default function RegionsGraph(){

    const dispatch = useDispatch();
    const regions = useSelector((state) => state.regionsStats);

    useEffect(()=>{
        dispatch(fetchgetAllRegions());
    }, [])


    const graph={
        series:regions?.data?.map((region,index)=>{return(region.rate)}),
        options:{
            chart: {
                type: 'donuts',
                fontFamily:"Roboto , sans-serif",
                redrawOnParentResize:true,
                redrawOnWindowsResize:true,
                width:"100%",
            },

            labels:regions?.data?.map((region,index)=>{return(region.region.region_name)}),
            colors:["#355070","#EAAC8B","#569FD2","#CC9999","#C8C9E8","#D1B48D",],
            plotOptions:{
                pie:{
                    expandOnClick:true,
                    donuts:{
                        size: '65%',
                        labels: {
                            show: false,
                            total:{
                                show:true,
                                showAlways:true,
                                fontsize:"28px",
                                label: 'Total',
                                fontWeight: 600,
                            }
                        }
                    }
                }
            },
            legends:{
                show:true,
                showForSignleSeries:false,

                offsetY:20,
                position:'right',
                horizontalAlign:'center',
            },
            title:{
                text:"Le taux d\'utilisation par région",
                align: 'center',
                margin: 20,
            }
        }
    };


    return (
        <div className="bg-white" style={{margin:"15px" , borderRadius:"25px"}}>
            <Chart options={graph.options}
                   series={graph.series}
                   type="donuts"
            />
        </div>

    );

}