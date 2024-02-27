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
    <li
      onClick={handleClick}
      className="group flex cursor-pointer flex-col items-center gap-1.5 pb-1.5 "
    >
      <span
        className={`rounded-3xl bg-gray-0/0 px-4 py-2  transition-colors duration-200 group-hover:bg-gray-50 group-hover:text-gray-900 dark:group-hover:bg-gray-100 ${isActive ? `sidebar-fixed-active` : "text-white"}`}
      >
        <Icon className="h-auto w-6" />
      </span>
      <span className="text-white">{menu.name}</span>
    </li>
  );
};

export default MenuItem;
