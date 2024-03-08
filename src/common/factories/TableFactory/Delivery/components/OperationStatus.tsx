import { Badge } from "antd";
import { FC } from "react";

type OperationStatusProps = {
  status: string;
};

const OperationStatus: FC<OperationStatusProps> = ({ status }) => {
  const statusColor: Utility.JSONValue = {
    aprovado: "green",
    cancelado: "red",
    pendiente: "gold",
  };
  return (
    <Badge
      color={statusColor[status]}
      text={status}
      className={`operation-${status}`}
    />
  );
};

export default OperationStatus;
