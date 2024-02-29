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
  };
}
