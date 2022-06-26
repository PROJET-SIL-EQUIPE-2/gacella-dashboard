import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { fetchgetAllRegions } from "../../../redux/actions/actions";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { fetchgetLocataires } from "../../../redux/actions/actions";

export default function LocatairesGraphs() {
  const dispatch = useDispatch();
  const locs = useSelector((state) => state.alllocataires);

  let accepte = 0;
  let enattente = 0;
  let rejete = 0;
  useEffect(() => {
    dispatch(fetchgetLocataires());
  }, []);
  //   setTimeout(function () {}, 1000);
  //   const datalocs = locs.data.data.data;
  console.log(JSON.stringify(locs) + "AAAAAAAAAAAAAAAA");

  const datalocs = locs.data.data?.data;
  datalocs?.map((x) => {
    if (x.DemandesInscription.etat_demande == "PENDING") enattente++;
    if (x.DemandesInscription.etat_demande == "VALIDATED") accepte++;
    if (x.DemandesInscription.etat_demande == "REJECTED") rejete++;
  });

  const graph = {
    series: [accepte, rejete, enattente],
    options: {
      chart: {
        type: "donut",
        fontFamily: "Roboto , sans-serif",
        redrawOnParentResize: true,
        redrawOnWindowsResize: true,
        width: "100%",
      },
      labels: ["Acceptés", "Rejetés", "En Attente"],
      dataLabels: {
        formatter: function (val, opts) {
          return opts.w.config.series[opts.seriesIndex];
        },
      },
      colors: ["#18D537", "#E83811", "#C7C7C7"],
      plotOptions: {
        pie: {
          expandOnClick: true,
          donut: {
            size: "65%",
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                fontSize: "28px",
                fontWeight: 600,
                label: "Total",
              },
            },
          },
        },
      },
      legend: {
        show: true,
        showForSingleSeries: false,
        offsetY: 30,
        position: "right",
        horizontalAlign: "center",
      },
      title: {
        text: "Demandes Locataires",
        align: "center",
        margin: 20,
        style: {
          fontSize: "20px",
          fontWeight: "bold",
        },
      },
    },
  };

  return locs.loading || locs.error ? (
    <p>test</p>
  ) : (
    <div
      className="bg-white"
      style={{
        minWidth: "45%",
        width: "fit-content",
        margin: "15px",
        borderRadius: "25px",
      }}
    >
      <Chart
        options={graph.options}
        series={graph.series}
        type="donut"
        width="100%"
      />
    </div>
  );
}
