import "moment/locale/es";

import { addStyleToPrice, formatNumberToDecimal } from "@/utils/formatters";

import OperationMethod from "../OperationMethod";
import { TableProps } from "antd";
import TableTemplate from "@/common/templates/Table/Delivery";
import moment from "moment";

type MerchantFilterType = {
  text: number;
  value: number;
};

const OperationsTable = ({
  tableData,
  config,
}: {
  tableData: Utility.OperationTableData[] | [];
  config: TableProps;
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
        const formattedDate = momentDate.format("D [de] MMMM,YYYY").split(",");
        const minutes = momentDate.format("hh:mm A");
        return (
          <span>
            <p>{formattedDate[0]},</p>
            <p>{formattedDate[1]}</p>
            <p>{minutes},</p>
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
    },
    {
      title: "Num. Comercio",
      key: "merchantId",
      dataIndex: "merchantId",
      filters: merchantsFilters,
      onFilter: (value, record) => {
        console.log(record);
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
    />
  );
};

export default OperationsTable;
