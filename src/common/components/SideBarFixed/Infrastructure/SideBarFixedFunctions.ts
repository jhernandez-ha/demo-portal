import { MenuItemsType } from "@/app/SideBar/MenuItems";

export const getActiveMainMenuIndex = (
  pathname: string,
  menuItems: MenuItemsType[],
) => {
  let activeIndex = -1;

  menuItems.forEach((menuItem, index) => {
    menuItem.menuItems.forEach((item) => {
      if (
        item.href === pathname ||
        (item.subMenuItems &&
          item.subMenuItems.some((subItem) => subItem.href === pathname))
      ) {
        activeIndex = index;
      }
    });
  });

  return activeIndex;
};
