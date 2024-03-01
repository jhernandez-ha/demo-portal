import { FC, useMemo, useRef, useState } from "react";
import { Input, InputRef, Table, TableProps } from "antd";

import { SearchOutlined } from "@ant-design/icons";
import TableFooter from "./TableFooter/Delivery";
import { TableTemplateProps } from "./interface";
import getColumnSearchProps from "./ColumnSearchPanel/Delivery";
import { handleMainSearch } from "../Infrastructure/tableFunctions";

const TableTemplate: FC<TableTemplateProps> = ({
  columns,
  columnsData,
  options,
  name,
}) => {
  //* Hooks
  const [searchText, setSearchText] = useState<string>("");
  const [searchColumnText, setSearchColumnText] = useState<string>("");
  const [searchedColumn, setSearchedColumn] = useState<string>("");
  const searchInput = useRef<InputRef | null>(null);

  //? Renderizado de datos con filtrado
  const tableData = useMemo(() => {
    if (columnsData && columnsData.length > 0) {
      return columnsData.filter((record) =>
        Object.values(record).some(
          (value) =>
            value &&
            value.toString().toLowerCase().includes(searchText.toLowerCase()),
        ),
      );
    }
    return [];
  }, [columnsData, searchText]);

  const children = useMemo(() => {
    if (columns) {
      columns[2] = {
        ...getColumnSearchProps({
          dataIndex: columns[2].key?.toString() ?? "",
          searchedColumn,
          searchInput,
          searchColumnText,
          setSearchedColumn,
          setSearchColumnText,
        }),
        ...columns[2],
      };
    }

    const footer = () => {
      return <TableFooter columnsData={tableData} fileName={name} />;
    };

    const defaultOptions: TableProps = {
      title: () => name,
      pagination: {
        position: ["bottomRight"],
        defaultPageSize: 10,
        hideOnSinglePage: true,
      },
      rowSelection: {},
      footer: footer,
      ...options,
    };

    return (
      <Table
        dataSource={tableData}
        columns={columns}
        className="table-template"
        {...defaultOptions}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableData, columns, options]);

  //* Render
  return (
    <div className="tableContainer">
      <div>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Buscar..."
          value={searchText}
          onChange={(e) => handleMainSearch(e, setSearchText)}
          allowClear={true}
        />
      </div>
      {children}
    </div>
  );
};

export default TableTemplate;
