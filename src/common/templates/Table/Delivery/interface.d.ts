import { TableProps } from "antd";

export type TableTemplateProps = {
  columns: TableProps["columns"];
  columnsData: Utility.JSONValue[];
  options?: TableProps;
};
