import { TableProps } from "antd";

export type TableFactoryType = {
  [index: string]: ({
    tableData,
    config,
    name,
  }: {
    tableData: Utility.OperationTableData[] | [];
    config: TableOptions;
    name: string;
  }) => JSX.Element;
};

export interface TableOptions extends TableProps {
  tableName: string;
}

export type TableTypes = "Operations";
