import { FC } from "react";

type TableFooterType = {
  columnsData: Utility.JSONValue[];
};

const TableFooter: FC<TableFooterType> = ({ columnsData }) => {
  const entitiesLength = columnsData.length ? columnsData.length : 0;

  return (
    <div>
      {entitiesLength
        ? `${entitiesLength} registros encontrados`
        : "No hay registros disponibles"}
    </div>
  );
};

export default TableFooter;
