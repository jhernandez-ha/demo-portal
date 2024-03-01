import { TableOptions } from "@/common/factories/TableFactory/Delivery/interface";
import { InputRef, TableProps } from "antd";

export type TableTemplateProps = {
  columns: TableProps["columns"];
  columnsData: Utility.JSONValue[];
  options?: TableOptions;
  name: string;
};

export interface ColumnSearchProps {
  dataIndex: string;
  searchColumnInput: React.MutableRefObject<InputRef | null>;
  searchColumnText: string;
  searchedColumn: string;
  handleSearch: (
    selectedKeys: string[],
    confirm: () => void,
    dataIndex: string
  ) => void;
  handleReset: (clearFilters: (() => void) | undefined) => void;
  setColumnSearchText: React.Dispatch<React.SetStateAction<string>>;
  setSearchedColumn: React.Dispatch<React.SetStateAction<string>>;
}
