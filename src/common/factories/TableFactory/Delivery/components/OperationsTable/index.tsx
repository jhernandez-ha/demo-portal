import "moment/locale/es";

import OperationMethod from "../OperationMethod";
import { TableProps } from "antd";
import TableTemplate from "@/common/templates/Table/Delivery";
import { addStyleToPrice } from "@/utils/formatters";
import moment from "moment";
import { LuListFilter } from "react-icons/lu";

type MerchantFilterType = {
  text: number;
  value: number;
};

const OperationsTable = ({
  tableData,
  config,
  name,
}: {
  tableData: Utility.OperationTableData[] | [];
  config: TableProps;
  name: string;
}) => {
  const uniqueMerchantsIds = new Set<number>();

  const merchantsFilters: MerchantFilterType[] = tableData
    .filter((item) => typeof item.merchantId === "number")
    .map((item) => {
      const merchantId = item.merchantId;
      // Filtrado comercios
      if (!uniqueMerchantsIds.has(merchantId)) {
        uniqueMerchantsIds.add(merchantId);
        return {
          text: merchantId,
          value: merchantId,
        };
      } else {
        return undefined;
      }
    })
    .filter((item) => item !== undefined) as MerchantFilterType[];
  const currency = "€";
  const columns: TableProps<Utility.JSONValue>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Fecha",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
      defaultSortOrder: "ascend",
      render: (date) => {
        const momentDate = moment(date);
        const formattedDate = momentDate
          .format("D [de] MMMM [de] YYYY")
          .split(",");
        const minutes = momentDate.format("hh:mm A");
        return (
          <span className="operationDateContainer">
            <p>{formattedDate}</p>
            <p className="operationDateMinutes">{minutes}</p>
          </span>
        );
      },
    },
    {
      title: "Importe",
      key: "quantity",
      dataIndex: "quantity",
      render: (quantity) => {
        const { colorClass, priceString } = addStyleToPrice(quantity, currency);
        return <span className={colorClass}>{priceString}</span>;
      },
    },
    {
      title: "Método",
      dataIndex: "method",
      key: "method",
      render: (_, record) => {
        return (
          <OperationMethod
            cardNumber={record.cardNumber}
            operationBrand={record.operationBrand}
          />
        );
      },
    },
    {
      title: "Num. Terminal",
      key: "terminalId",
      dataIndex: "terminalId",
      width: "15%",
    },
    {
      title: "Num. Comercio",
      key: "merchantId",
      dataIndex: "merchantId",
      filters: merchantsFilters,
      width: "15%",
      filterIcon: (filtered) => <LuListFilter color="black" />,
      onFilter: (value, record) => {
        return record.merchantId === value;
      },
    },
    {
      title: "Código",
      dataIndex: "operationType",
      key: "operationType",
    },
  ];

  const options: TableProps = {
    title: () => "Tabla de Operaciones",
    ...config,
  };
  return (
    <TableTemplate
      columns={columns}
      columnsData={tableData}
      options={options}
      name={name}
    />
  );
};

export default OperationsTable;
