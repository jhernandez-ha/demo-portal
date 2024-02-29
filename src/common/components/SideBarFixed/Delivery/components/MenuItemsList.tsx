import SimpleBar from "simplebar-react";
import { MenuItems } from "../../../../../app/SideBar/MenuItems";
import { FC } from "react";
import MenuItem from "./MenuItem";
import { MenuItemsListProps } from "../interface";

const MenuItemsList: FC<MenuItemsListProps> = ({
  isExpanded,
  setExpanded,
  menuItems,
  setMenuItems,
}) => {
  return (
    <menu className="menu-items-container">
      <SimpleBar className="menu-items-simplebar">
        <ul className="menu-item-list">
          {MenuItems.map((menu) => (
            <MenuItem
              key={menu.id}
              menu={menu}
              isExpanded={isExpanded}
              setExpanded={setExpanded}
              menuItems={menuItems}
              setMenuItems={setMenuItems}
            />
          ))}
        </ul>
      </SimpleBar>
    </menu>
  );
};

export default MenuItemsList;
