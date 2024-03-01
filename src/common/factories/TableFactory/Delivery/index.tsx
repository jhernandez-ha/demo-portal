import { TableFactoryType, TableOptions, TableTypes } from "./interface";

import OperationsTable from "./components/OperationsTable";

export default class TableFactory {
  static componentsMap: TableFactoryType = {
    Operations: OperationsTable,
  };

  static create(
    type: TableTypes,
    tableData: Utility.OperationTableData[] | [],
    config: TableOptions
  ) {
    const Component = TableFactory.componentsMap[type];

    if (Component) {
      return (
        <Component
          tableData={tableData}
          config={config}
          name={type}
        ></Component>
      );
    } else {
      console.error("[TableFactory] No components found");
      return null;
    }
  }
}
