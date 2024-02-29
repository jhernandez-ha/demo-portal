import { TableProps } from "antd";

export type TableFactoryType = {
  [index: string]: ({
    tableData,
    config,
  }: {
    tableData: Utility.OperationTableData[] | [];
    config: TableProps;
  }) => JSX.Element;
};

export type TableTypes = "Operations";
