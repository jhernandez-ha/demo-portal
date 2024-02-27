import { IconType } from "react-icons";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import {
  PiBank,
  PiFolderNotch,
  PiHeadset,
  PiHouse,
  PiLightning,
} from "react-icons/pi";

export interface SubMenuItemType {
  name: string;
  description?: string;
  href: string;
  badge?: string;
}

export interface ItemType {
  name: string;
  icon: IconType;
  href?: string;
  description?: string;
  badge?: string;
  subMenuItems?: SubMenuItemType[];
}

export interface MenuItemsType {
  id: string;
  name: string;
  title: string;
  icon: IconType;
  menuItems: ItemType[];
}

export const MenuItems: MenuItemsType[] = [
  {
    id: "1",
    name: "Home",
    title: "Overview",
    icon: PiHouse,
    menuItems: [
      {
        name: "Dashboard",
        href: "/",
        icon: MdOutlineDashboard,
      },
    ],
  },
  {
    id: "2",
    name: "Adquirencia",
    title: "Apps Kit",
    icon: PiBank,
    menuItems: [
      {
        name: "Transacciones",
        description: '"Transacciones"',
        icon: GrTransaction,
        subMenuItems: [
          {
            name: "Operaciones",
            href: "/operations",
          },
          {
            name: "Cargos y abonos",
            href: "/charges",
          },
          {
            name: "Liquidaciones",
            href: "/liquidations",
          },
        ],
      },
    ],
  },
];
