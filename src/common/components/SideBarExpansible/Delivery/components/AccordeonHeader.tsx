import { FC } from "react";
import { MenuExpansibleItemProps } from "../interface";

const AccordeonHeader: FC<MenuExpansibleItemProps> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div>
      <span className="submenu-accordeon-header">
        <Icon className="h-5 w-5" />
        {item.name}
      </span>
    </div>
  );
};

export default AccordeonHeader;
