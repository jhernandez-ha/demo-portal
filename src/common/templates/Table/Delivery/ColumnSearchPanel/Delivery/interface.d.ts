interface ColumnSearchProps {
  dataIndex: string;
  searchInput: React.MutableRefObject<InputRef | null>;
  searchColumnText: string;
  searchedColumn: string;
  setSearchColumnText: React.Dispatch<React.SetStateAction<string>>;
  setSearchedColumn: React.Dispatch<React.SetStateAction<string>>;
}
