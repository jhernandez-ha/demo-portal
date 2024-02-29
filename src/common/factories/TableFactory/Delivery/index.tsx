import { TableFactoryType, TableTypes } from "./interface";

import OperationsTable from "./components/OperationsTable";
import { TableProps } from "antd";

export default class TableFactory {
  static componentsMap: TableFactoryType = {
    Operations: OperationsTable,
  };

  static create(
    type: TableTypes,
    tableData: Utility.OperationTableData[] | [],
    config: TableProps
  ) {
    const Component = TableFactory.componentsMap[type];

    if (Component) {
      return <Component tableData={tableData} config={config}></Component>;
    } else {
      console.error("[TableFactory] No components found");
      return null;
    }
  }
}
