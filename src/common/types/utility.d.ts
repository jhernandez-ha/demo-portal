declare namespace Utility {
  interface TableColumn extends TableProps {
    filterByColumn: boolean;
  }

  type JSONValue = Record<string, any>;
}
