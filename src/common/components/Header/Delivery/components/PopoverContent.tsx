import { Button } from "antd";
import Link from "next/link";
import { FC } from "react";

const menuItems = [
  {
    name: "My Profile",
    href: "/profile",
  },
  {
    name: "Account Settings",
    href: "Settings",
  },
];

const PopoverContent: FC = () => {
  return (
    <div className="w-64 text-left rtl:text-right">
      <div className="grid px-3.5 py-3.5 font-medium text-gray-700">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group my-0.5 flex items-center rounded-md px-2.5 py-2 hover:bg-gray-100 focus:outline-none hover:dark:bg-gray-50/50"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="border-t border-gray-300 px-6 pb-6 pt-5">
        <Button
          className="h-auto w-full justify-start p-0 font-medium text-gray-700 outline-none focus-within:text-gray-600 hover:text-gray-900 focus-visible:ring-0"
          onClick={() => console.log("exit")}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default PopoverContent;
