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

export type OperationTableData = {
  key: string
  id: string
  quantity: number
  cardNumber: string
  date: Date
  operationType: string
  authorizationCode: string
  operationBran: string
  merchantId: number
  terminalId: number
}
