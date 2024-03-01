import { exportToExcel, exportToPDF } from "@/utils/exportToDataStructures";

import { Button } from "antd";
import { CSVLink } from "react-csv";
import { FC } from "react";

type TableFooterType = {
  columnsData: Utility.JSONValue[];
  fileName: string;
};

const TableFooter: FC<TableFooterType> = ({ columnsData, fileName }) => {
  return (
    <div className="table-footer-container">
      <Button
        className="default-button"
        onClick={() => exportToPDF(columnsData, fileName)}
        type="default"
      >
        <p className="button-text">PDF</p>
      </Button>
      <Button className="default-button" type="default">
        <CSVLink data={columnsData} filename={`${fileName}_data`}>
          <p className="button-text">CSV</p>
        </CSVLink>
      </Button>
      <Button
        className="default-button"
        onClick={() => exportToExcel(columnsData, fileName)}
        type="default"
      >
        <p className="button-text">EXCEL</p>
      </Button>
    </div>
  );
};

export default TableFooter;
