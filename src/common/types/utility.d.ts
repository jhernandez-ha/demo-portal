declare namespace Utility {
  interface TableColumn extends TableProps {
    filterByColumn: boolean;
  }

  type JSONValue = Record<string, any>;

  type OperationTableData = {
    key: string;
    id: string;
    quantity: number;
    cardNumber: string;
    date: string;
    operationType: string;
    authorizationCode: string;
    operationBrand: string;
    merchantId: number;
    terminalId: number;
    statusArray?: StatusArray[];
  };

  type StatusArray = {
    date: string;
    terminalId: number;
    merchantId: number;
    operationType: string;
    status: string;
  };

  type DimensionType = {
    width: number | undefined;
    height: number | undefined;
  };
}
