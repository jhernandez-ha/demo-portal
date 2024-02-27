import React, { FC } from "react";

import TableFactory from "@/common/factories/TableFactory/Delivery";

const OperationsPage: FC = () => {
  const data: Utility.JSONValue[] = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 27,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "4",
      firstName: "Sald",
      lastName: "Poor",
      age: 38,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "nice"],
    },
  ];

  const OperationsTableComponent = TableFactory.create("Operations", data, {});

  return <div className="column">{OperationsTableComponent}</div>;
};

export default OperationsPage;
