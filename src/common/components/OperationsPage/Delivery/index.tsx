"use client";

import React, { FC } from "react";

import TableFactory from "@/common/factories/TableFactory/Delivery";
import { Breadcrumb } from "antd";
import { title } from "process";

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
      statusArray: [
        {
          date: "2024-02-21T11:17:10.689+0000",
          terminalId: 1,
          merchantId: 1,
          operationType: "SALE",
          status: "pendiente",
        },
        {
          date: "2024-02-22T11:17:10.689+0000",
          terminalId: 1,
          merchantId: 1,
          operationType: "SALE",
          status: "aprovado",
        },
      ],
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

  const items = [
    { title: "Adquirencia" },
    { title: "Transacciones" },
    { title: "Operaciones" },
  ];

  const OperationsTableComponent = TableFactory.create("Operations", data, {
    tableName: "",
  });

  return (
    <>
      <div className="page-title">
        <h1>Operaciones</h1>
        <Breadcrumb items={items} />
      </div>
      <div className="column">{OperationsTableComponent}</div>
    </>
  );
};

export default OperationsPage;
