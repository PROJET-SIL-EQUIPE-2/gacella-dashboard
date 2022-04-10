import * as React from "react";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function TotalePannes(props) {
  return (
    <div className="pannesR">
      <div className="linepannesR">
        <h3>{props.nbpannes}</h3>
        <TrendingUpIcon
          fontSize="large"
          style={{
            color: "#569FD2",
          }}
        />
      </div>

      <p>Le nombre totale de pannes réparées</p>
    </div>
  );
}
