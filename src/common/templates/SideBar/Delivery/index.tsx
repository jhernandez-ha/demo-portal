import { Dispatch, FC, SetStateAction, useState } from "react";
import LeftSideBarFixed from "../../../components/SideBarFixed/Delivery";
import { MenuItems } from "../../../../app/SideBar/MenuItems";
import LeftSideExpandible from "../../../components/SideBarExpansible/Delivery";
import { SideBarProps } from "./interface";

const SideBar: FC<SideBarProps> = ({ isExpanded, setIsExpanded }) => {
  const [menuItems, setMenuItems] = useState(MenuItems[0]);

  return (
    <>
      <LeftSideBarFixed
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        menuItems={menuItems}
        setMenuItems={setMenuItems}
      />
      <LeftSideExpandible isExpanded={isExpanded} selectedMenu={menuItems} />
    </>
  );
};

export default SideBar;
