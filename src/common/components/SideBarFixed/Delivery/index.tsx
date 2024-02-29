import { FC, useEffect, useState } from "react";

import { LeftSideBarFixedProps } from "./interface";
import { MenuItems } from "../../../../app/SideBar/MenuItems";
import MenuItemsList from "./components/MenuItemsList";
import { PiTextIndent } from "react-icons/pi";
import { getActiveMainMenuIndex } from "../Infrastructure/SideBarFixedFunctions";
import { usePathname } from "next/navigation";

const LeftSideBarFixed: FC<LeftSideBarFixedProps> = ({
  isExpanded,
  setIsExpanded,
  menuItems,
  setMenuItems,
}) => {
  const pathname = usePathname();
  const [width, setWidth] = useState(0);

  const handleWidth = () => {
    const position = window.innerWidth;
    setWidth(position);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  useEffect(() => {
    const activeMenuIndex = getActiveMainMenuIndex(pathname, MenuItems);
    setMenuItems(MenuItems[activeMenuIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (width < 1536) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, pathname]);

  return (
    <aside className="fixed-menu-container">
      <div
        className="fixed-menu-expand-button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="open sidebar"
      >
        <PiTextIndent className="expand-button " />
      </div>
      <MenuItemsList
        isExpanded={isExpanded}
        setExpanded={setIsExpanded}
        menuItems={menuItems}
        setMenuItems={setMenuItems}
      />
    </aside>
  );
};

export default LeftSideBarFixed;
