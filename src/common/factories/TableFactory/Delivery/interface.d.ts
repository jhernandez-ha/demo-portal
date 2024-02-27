import { TableProps } from "antd";

export type TableFactoryType = {
  [index: string]: ({
    tableData,
    config,
  }: {
    tableData: Utility.JSONValue[] | [];
    config: TableProps;
  }) => JSX.Element;
};

export type TableTypes = "Operations";
