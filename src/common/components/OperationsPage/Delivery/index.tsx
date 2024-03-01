import React, { FC } from "react";

import TableFactory from "@/common/factories/TableFactory/Delivery";

const OperationsPage: FC = () => {
  const data: Utility.OperationTableData[] = [
    {
      key: "1",
      id: "1",
      authorizationCode: "123",
      cardNumber: "3238304100622392",
      date: "2024-02-22T11:17:10.689+0000",
      merchantId: 1,
      operationBrand: "VISA",
      operationType: "SALE",
      quantity: -30,
      terminalId: 1,
    },
    {
      key: "2",
      id: "2",
      authorizationCode: "123",
      cardNumber: "3238304100622945",
      date: "2024-02-22T14:17:10.689+0000",
      merchantId: 1,
      operationBrand: "MASTERCARD",
      operationType: "SALE",
      quantity: 14,
      terminalId: 4,
    },
    {
      key: "3",
      id: "3",
      authorizationCode: "123",
      cardNumber: "3238304100624732",
      date: "2024-02-21T11:17:10.689+0000",
      merchantId: 2,
      operationBrand: "MASTERCARD",
      operationType: "SALE",
      quantity: 20,
      terminalId: 1,
    },
    {
      key: "4",
      id: "4",
      authorizationCode: "123",
      cardNumber: "3238304100627551",
      date: "2024-02-22T10:13:10.689+0000",
      merchantId: 3,
      operationBrand: "VISA",
      operationType: "SALE",
      quantity: 12,
      terminalId: 3,
    },
  ];

  const OperationsTableComponent = TableFactory.create("Operations", data, {});

  return <div className="column">{OperationsTableComponent}</div>;
};

export default OperationsPage;
