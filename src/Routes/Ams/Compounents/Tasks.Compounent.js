import * as React from "react";
import MaterialTable from "material-table";
import {
  tableLang,
  tableIcons,
} from "../../../ui-component/ReactTablesWidget/Widget";
import "./styles.css";
import { useSelector } from "react-redux";

export default function Tasks() {
  const am = useSelector((state) => state.amProfile);

  const columns = [
    {
      title: "Date",
      field: "date",
      render: (rowData) => (
        <div className="roboto-500">
          {rowData.familyName} {rowData.date}
        </div>
      ),
    },
    {
      title: "Tâche",
      field: "description",
      render: (rowData) => (
        <div className="roboto-500">{rowData.description}</div>
      ),
    },
    {
      title: "Progrès",
      field: "completed",
      render: (rowData) => (
        <div className="roboto-500">{rowData.completed}</div>
      ),
    },
  ];

  return am.loading || am.error ? null : (
    <div className="bg-white" style={{ height: 400, width: "100%" }}>
      <MaterialTable
        style={{ borderRadius: "25px" }}
        icons={tableIcons}
        localization={tableLang}
        title="Les différentes tâches "
        columns={columns}
        data={am.data.Task}
        options={{
          search: false,
          selection: true,
          sorting: true,
          showSelectAllCheckbox: true,
          showTextRowsSelected: true,
          actionsColumnIndex: -1,
          headerStyle: {
            color: "#9E9E9E",
            fontFamily: "var(--roboto-font)",
            fontWeight: 300,
            fontSize: "1.2rem",
          },
          actionsCellStyle: {
            paddingRight: "3rem",
          },
        }}
      />
    </div>
  );
}
