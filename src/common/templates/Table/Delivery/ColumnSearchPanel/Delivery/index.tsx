import { Button, Input, InputRef, Space, TableColumnType } from "antd";
import {
  handleReset,
  handleSearch,
} from "../Infrastructure/columnSearchFunctions";

import Highlighter from "react-highlight-words";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const getColumnSearchProps = ({
  dataIndex,
  searchInput,
  searchColumnText,
  searchedColumn,
  setSearchColumnText,
  setSearchedColumn,
}: ColumnSearchProps): TableColumnType<Utility.JSONValue> => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
    close,
  }) => (
    <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
      <Input
        ref={searchInput}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() =>
          handleSearch(
            selectedKeys as string[],
            confirm,
            dataIndex,
            setSearchColumnText,
            setSearchedColumn
          )
        }
        style={{ marginBottom: 8, display: "block" }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => {
            handleSearch(
              selectedKeys as string[],
              confirm,
              dataIndex,
              setSearchColumnText,
              setSearchedColumn
            );
            confirm({ closeDropdown: true });
          }}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Buscar
        </Button>
        <Button
          onClick={() => {
            clearFilters && handleReset(clearFilters, setSearchColumnText);
            confirm({ closeDropdown: true });
          }}
          size="small"
          style={{ width: 90 }}
        >
          Limpiar
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            close();
          }}
        >
          Cerrar
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered: boolean) => (
    <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
  ),
  onFilter: (value, record) =>
    record[dataIndex].toLowerCase().includes((value as string).toLowerCase()),
  onFilterDropdownOpenChange: (visible) => {
    if (visible) {
      setTimeout(() => searchInput.current?.select(), 100);
    }
  },
  render: (text) => (
    <Highlighter
      highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
      searchWords={[searchColumnText]}
      autoEscape
      textToHighlight={text ? text.toString() : ""}
    />
  ),
});

export default getColumnSearchProps;
