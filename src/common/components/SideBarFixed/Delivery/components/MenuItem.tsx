import { FC } from "react";
import { MenuItemProps } from "../interface";

const MenuItem: FC<MenuItemProps> = ({
  menu,
  isExpanded,
  setExpanded,
  menuItems,
  setMenuItems,
}) => {
  const Icon = menu.icon;

  const isActive = menuItems === menu;

  function handleClick() {
    setMenuItems(menu);
    if (!isExpanded) {
      setExpanded(true);
    }
  }

  return (
    <li onClick={handleClick} className="group menu-item ">
      <span
        className={`menu-item-icon-container ${isActive && `sidebar-fixed-active`}`}
      >
        <Icon className="menu-item-icon" />
      </span>
      <span className="menu-item-text">{menu.name}</span>
    </li>
  );
};

export default MenuItem;
