// import React from 'react';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
//
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );
//
// export const options = {
//     plugins: {
//         title: {
//             display: true,
//             text: 'Les demande d’inscription',
//         },
//         legend: {
//             display: true,
//             position: "bottom"
//         },
//
//     },
//     responsive: true,
//
//     scales: {
//         x: {
//             stacked: true,
//             grid: {
//                 display: false
//             }
//         },
//         y: {
//             stacked: true,
//         },
//     },
// };
//
// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//
// export const data = {
//     labels,
//     datasets: [
//         {
//             label: 'validés',
//             data: [{x:'January' ,valides:500}, {x:'February' ,valides:300}, {x:'March' ,valides:200}, {x:'April' ,valides:100}, {x:'May' ,valides:200}, {x:'June' ,valides:300}, {x:'July' ,valides:400}],
//             parsing: {
//                 yAxisKey: 'valides'
//             },
//             backgroundColor: 'rgb(75, 192, 192)',
//         },
//         {
//             label: 'rejetés',
//             data:  [{x:'January' ,nombre:500}, {x:'February' ,nombre:300}, {x:'March' ,nombre:200}, {x:'April' ,nombre:100}, {x:'May' ,nombre:200}, {x:'June' ,nombre:300}, {x:'July' ,nombre:400}],
//             parsing: {
//                 yAxisKey: 'nombre'
//             },
//             backgroundColor: 'rgb(255, 99, 132)',
//         },
//     ],
// };
//
// export function App() {
//     return <Bar options={options} data={data} />;
// }
