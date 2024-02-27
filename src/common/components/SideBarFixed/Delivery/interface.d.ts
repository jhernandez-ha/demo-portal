export type LeftSideBarFixedProps = {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  menuItems: MenuItemsType;
  setMenuItems: Dispatch<SetStateAction<MenuItemsType>>;
};

export type MenuItemsListProps = {
  isExpanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  menuItems: MenuItemsType;
  setMenuItems: Dispatch<SetStateAction<MenuItemsType>>;
};

export type MenuItemProps = {
  menu: MenuItemsType;
  isExpanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  menuItems: MenuItemsType;
  setMenuItems: Dispatch<SetStateAction<MenuItemsType>>;
};
