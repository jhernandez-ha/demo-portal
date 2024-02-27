import { FC, useMemo } from "react";
import { Collapse } from "antd";
import AccordeonHeader from "./AccordeonHeader";
import AccordeonList from "./AccordeonList";
import { MenuExpansibleItemProps } from "../interface";

const CollapsibleMenuItem: FC<MenuExpansibleItemProps> = ({ item }) => {
  const accordeonItem = useMemo(() => {
    return [
      {
        key: "1",
        label: <AccordeonHeader item={item} />,
        children: <AccordeonList subMenuItems={item?.subMenuItems} />,
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Collapse
      items={accordeonItem}
      bordered={false}
      expandIconPosition="end"
      defaultActiveKey={-1}
    />
  );
};

export default CollapsibleMenuItem;
