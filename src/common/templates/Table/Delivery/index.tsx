import { FC, useMemo, useRef, useState } from "react";
import { Input, InputRef, MenuProps, Table, TableProps } from "antd";

import { CheckboxChangeEvent } from "antd/es/checkbox";
import { SearchOutlined } from "@ant-design/icons";
import TableFooter from "./TableFooter/Delivery";
import TableHeader from "./TableHeader/Delivery";
import { TableTemplateProps } from "./interface";
import getColumnSearchProps from "./ColumnSearchPanel/Delivery";
import { handleMainSearch } from "../Infrastructure/tableFunctions";

const TableTemplate: FC<TableTemplateProps> = ({
  columns,
  columnsData,
  options,
  name,
  detailsColumns,
}) => {
  //* Hooks
  const [searchText, setSearchText] = useState<string>("");
  const [searchColumnText, setSearchColumnText] = useState<string>("");
  const [searchedColumn, setSearchedColumn] = useState<string>("");
  const searchInput = useRef<InputRef | null>(null);
  const [visibleColumns, setVisibleColumns] = useState(columns);

  const handleMenuClick = (value: string) => {
    // Actualiza la visibilidad de la columna seleccionada
    setVisibleColumns((prevColumnas) =>
      prevColumnas?.map((columna) =>
        columna.key === value
          ? { ...columna, hidden: !columna.hidden }
          : columna,
      ),
    );
  };

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
      return <TableFooter columnsData={tableData} />;
    };

    const header = () => {
      return (
        <TableHeader
          columnsData={tableData}
          fileName={name}
          tableName={options?.tableName || ""}
          columns={visibleColumns}
          handleMenuClick={handleMenuClick}
        >
          <Input
            prefix={<SearchOutlined />}
            placeholder="Buscar..."
            value={searchText}
            onChange={(e) => handleMainSearch(e, setSearchText)}
            allowClear={true}
          />
        </TableHeader>
      );
    };

    const defaultOptions: TableProps = {
      title: header,
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
        columns={visibleColumns}
        className="table-template"
        {...defaultOptions}
        expandable={{
          expandedRowRender: (record) => (
            <Table
              columns={detailsColumns}
              dataSource={record.statusArray}
              pagination={false}
              bordered={true}
            />
          ),
          rowExpandable: (record) => record.statusArray !== undefined,
        }}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableData, visibleColumns, options]);

  //* Render
  return (
    <div className="tableContainer">
      <div>
        {/* <Input
          prefix={<SearchOutlined />}
          placeholder="Buscar..."
          value={searchText}
          onChange={(e) => handleMainSearch(e, setSearchText)}
          allowClear={true}
        /> */}
      </div>
      {children}
    </div>
  );
};

export default TableTemplate;
