import { MenuItemsType } from "@/app/SideBar/MenuItems";

export type LeftSideExpandibleProps = {
  isExpanded: boolean;
  selectedMenu: MenuItemsType;
};

export type MenuExpansibleItemProps = {
  item: ItemType;
};

export type AccordeonListProps = {
  subMenuItems: SubMenuItemType[] | undefined;
};
