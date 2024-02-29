import { FC, useMemo } from "react";
import Link from "next/link";
import { AccordeonListProps } from "../interface";

const AccordeonList: FC<AccordeonListProps> = ({ subMenuItems }) => {
  const List = useMemo(() => {
    return subMenuItems?.map((item, index) => {
      return (
        <Link
          href={item?.href}
          key={item?.name + index}
          className="submenu-accordeon-link"
        >
          <div className="submenu-accordeon-container">
            <span className="submenu-accordeon-list-point" />
            <span className="submenu-item-text">{item?.name}</span>
          </div>
        </Link>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return List;
};

export default AccordeonList;
