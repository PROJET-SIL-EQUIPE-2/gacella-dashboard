import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
export default function DiffVehicules(props) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      height: 300,
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflow: "auto",
    },
    headt: {
      color: "#AAAAAA",
    },
  }));
  const classes = useStyles();

  return (
    <div className="TableDialog">
      <h5>Les Différents Véhicules</h5>
      <TableContainer
        className={classes.paper}
        component={Paper}
        sx={{
          "&::-webkit-scrollbar": {
            width: 4,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#FFF",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#C1C1C1",
            borderRadius: 5,
          },
        }}
      >
        <Table stickyHeader sx={{ maxHeight: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.headt}>
              <TableCell className={classes.headt}>#</TableCell>
              <TableCell className={classes.headt} align="right">
                id-véhicule
              </TableCell>
              <TableCell className={classes.headt} align="right">
                état-véhicule
              </TableCell>
              <TableCell className={classes.headt} align="right">
                Plus
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.CarsData
              ? props.CarsData.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">{row.vehicule_id}</TableCell>
                    <TableCell align="center">{row.etat}</TableCell>
                    <TableCell align="center">
                      <InsertLinkIcon
                        style={{
                          transform: "rotate(-45deg)",
                          color: "#C9805C",
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
