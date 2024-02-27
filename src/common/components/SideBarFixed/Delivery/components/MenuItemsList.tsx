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
    <menu className="flex w-full justify-center">
      <SimpleBar className="h-[calc(100vh_-_105px)] w-full pb-5">
        <ul className="flex flex-col gap-6">
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
