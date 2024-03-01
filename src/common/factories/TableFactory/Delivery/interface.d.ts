import { TableProps } from "antd";

export type TableFactoryType = {
  [index: string]: ({
    tableData,
    config,
    name,
  }: {
    tableData: Utility.OperationTableData[] | [];
    config: TableProps;
    name: string;
  }) => JSX.Element;
};

export type TableTypes = "Operations";
