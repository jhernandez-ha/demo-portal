import { FC, useState } from "react";

import { Drawer } from "antd";
import MobileMenuContent from "./MobileMenuContent";
import { RiMenu2Fill } from "react-icons/ri";

const MobileMenu: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <RiMenu2Fill
        size={32}
        className="custom-button mobile-menu-button"
        onClick={() => setOpen(true)}
      />

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="left"
        closeIcon={null}
        className="mobile-menu-drawer"
      >
        <MobileMenuContent />
      </Drawer>
    </>
  );
};

export default MobileMenu;
