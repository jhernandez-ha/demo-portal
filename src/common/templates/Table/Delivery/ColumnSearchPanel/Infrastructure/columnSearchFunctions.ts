import { FilterDropdownProps } from "antd/es/table/interface";
import { TableColumnType } from "antd";

export const handleSearch = (
  selectedKeys: string[],
  confirm: FilterDropdownProps["confirm"],
  dataIndex: string,
  setSearchText: React.Dispatch<React.SetStateAction<string>>,
  setSearchedColumn: React.Dispatch<React.SetStateAction<string>>
) => {
  confirm();
  setSearchText(selectedKeys[0]);
  setSearchedColumn(dataIndex);
};

export const handleReset = (
  clearFilters: () => void,
  setSearchText: React.Dispatch<React.SetStateAction<string>>
) => {
  clearFilters();
  setSearchText("");
};
