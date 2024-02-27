import { Space, TableProps, Tag } from "antd";

import React from "react";
import TableTemplate from "@/common/templates/Table/Delivery";

const OperationTable = () => {
  const columns: TableProps<Utility.JSONValue>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return record.firstName + " " + record.lastName;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
      width: "10%",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => {
        return (
          <>
            {tags.map((tag: string) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
        );
      },
    },
  ];
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

  const options: TableProps = {
    title: () => "Tabla Operaciones",
  };
  return (
    <TableTemplate columns={columns} columnsData={data} options={options} />
  );
};

export default OperationTable;
