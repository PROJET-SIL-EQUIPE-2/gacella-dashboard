import React from "react";
import RegionGraph from "./Compounents/RegionsGraphs.Compounent";
import LocatairesGraphs from "./Compounents/LocatairesGraphs.Compounent";

const Statistics = () => {
  return (
    <div style={{ display: "flex" }}>
      <RegionGraph />
      <LocatairesGraphs />
    </div>
  );
};

export default Statistics;
