import { Button } from "antd";
import Link from "next/link";
import { FC } from "react";

const menuItems = [
  {
    name: "Mi Perfil",
    href: "/profile",
  },
  {
    name: "Ajustes",
    href: "Settings",
  },
];

const PopoverContent: FC = () => {
  return (
    <div className="settings-container">
      <div className="settings-list">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group settings-link"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="logout-container">
        <Button
          className="logout-button custom-button"
          onClick={() => console.log("exit")}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default PopoverContent;
