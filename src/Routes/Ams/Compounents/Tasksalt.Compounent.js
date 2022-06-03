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

export default function Tasks(props) {
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
      <h5>Les Différentes Taches</h5>
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
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "70%" }} />
            <col style={{ width: "20%" }} />
          </colgroup>
          <TableHead>
            <TableRow className={classes.headt}>
              <TableCell className={classes.headt}>#</TableCell>
              <TableCell className={classes.headt} align="center">
                Tache
              </TableCell>
              <TableCell className={classes.headt} align="center">
                Progrés
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tachesData
              ? props.tachesData.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.progress} %</TableCell>
                  </TableRow>
                ))
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
