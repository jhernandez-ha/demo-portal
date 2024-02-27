import { Space, TableProps, Tag } from "antd";

import React from "react";
import TableTemplate from "@/common/templates/Table/Delivery";

const OperationsTable = ({
  tableData,
  config,
}: {
  tableData: Utility.JSONValue[] | [];
  config: TableProps;
}) => {
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
      defaultSortOrder: "ascend",
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
            <a>Invite {record.firstName}</a>
            <a>Delete</a>
          </Space>
        );
      },
    },
  ];

  const options: TableProps = {
    title: () => "Tabla de Operaciones",
    ...config,
  };
  return (
    <TableTemplate
      columns={columns}
      columnsData={tableData}
      options={options}
    />
  );
};

export default OperationsTable;
