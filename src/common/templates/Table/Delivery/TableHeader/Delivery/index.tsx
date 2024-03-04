import { Button, Checkbox, Dropdown, MenuProps, TableProps } from "antd";
import { exportToExcel, exportToPDF } from "@/utils/exportToDataStructures";

import { CSVLink } from "react-csv";
import { FC } from "react";
import { FaAngleDown } from "react-icons/fa";

type TableHeaderType = {
  columnsData: Utility.JSONValue[];
  fileName: string;
  tableName: string;
  columns: TableProps["columns"];
  handleMenuClick: (value: string) => void;
};

const TableHeader: FC<TableHeaderType> = ({
  columnsData,
  tableName,
  fileName,
  columns,
  handleMenuClick,
}) => {
  const dropdownList: MenuProps["items"] = columns
    ? columns.map((item: Utility.JSONValue) => {
        return {
          key: item.key,
          label: (
            <Checkbox
              onChange={() => handleMenuClick(item.key)}
              checked={!item.hidden}
            >
              {item.title}
            </Checkbox>
          ),
        };
      })
    : undefined;

  return (
    <>
      <div className="table-header-title">{tableName}</div>
      <div className="table-footer-container">
        <Dropdown
          menu={{ items: dropdownList }}
          trigger={["click"]}
          placement="bottomLeft"
        >
          <Button className="table-button">
            <span className="table-button-columns-container">
              <p className="button-text">Columnas</p>
              <FaAngleDown />
            </span>
          </Button>
        </Dropdown>
        <Button
          className="table-button"
          onClick={() => exportToPDF(columnsData, fileName)}
        >
          <p className="button-text">PDF</p>
        </Button>
        <Button className="table-button">
          <CSVLink data={columnsData} filename={`${fileName}_data`}>
            <p className="button-text">CSV</p>
          </CSVLink>
        </Button>
        <Button
          className="table-button"
          onClick={() => exportToExcel(columnsData, fileName)}
        >
          <p className="button-text">EXCEL</p>
        </Button>
      </div>
    </>
  );
};

export default TableHeader;
