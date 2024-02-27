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
      className={`flex items-center justify-between gap-3 rounded-2xl  px-4 py-2 font-medium duration-200 
        ${
          isActive
            ? "bg-gray-100 text-primary dark:bg-gray-100 dark:text-primary"
            : "hover:bg-gray-100 hover:text-gray-900"
        }`}
    >
      <div className="flex items-center gap-2 truncate">
        <span>
          <Icon className="h-5 w-5" />
        </span>
        <span className="truncate">{item.name}</span>
      </div>
    </Link>
  );
};

export default LinkMenuItem;
