import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { MenuExpansibleItemProps } from "../interface";

const LinkMenuItem: FC<MenuExpansibleItemProps> = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const Icon = item.icon;
  return (
    <Link
      href={item.href ?? "/"}
      className={`submenu-link 
        ${isActive ? "submenu-link-active" : "submenu-link-inactive"}`}
    >
      <div className="submenu-item-container">
        <span>
          <Icon className="submenu-item-icon" />
        </span>
        <span className="submenu-item-text">{item.name}</span>
      </div>
    </Link>
  );
};

export default LinkMenuItem;
