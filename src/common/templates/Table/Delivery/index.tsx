import { Input, Table, TableProps } from "antd";
import React, { FC, useMemo, useState } from "react";

import { TableTemplateProps } from "./interface";

const TableTemplate: FC<TableTemplateProps> = ({
  columns,
  columnsData,
  options,
}) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const tableData = useMemo(() => {
    if (columnsData && columnsData.length > 0) {
      return columnsData.filter((record) =>
        Object.values(record).some(
          (value) =>
            value &&
            value.toString().toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
    return [];
  }, [columnsData, searchText]);

  const footer = () => {
    if (columnsData && columnsData.length > 0) {
      return columnsData.length + " registros totales";
    }
    return "0 registros totales";
  };

  const defaultOptions: TableProps = {
    title: () => "Tabla por defecto",
    pagination: {
      position: ["bottomRight"],
      defaultPageSize: 10,
      hideOnSinglePage: true,
    },
    footer: footer,

    ...options,
  };

  return (
    <div>
      <div>
        <Input
          placeholder="Buscar..."
          value={searchText}
          onChange={handleSearch}
          allowClear={true}
        />
      </div>
      <Table dataSource={tableData} columns={columns} {...defaultOptions} />
    </div>
  );
};

export default TableTemplate;
