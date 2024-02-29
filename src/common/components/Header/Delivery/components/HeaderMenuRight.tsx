import { Popover } from "antd";
import { FC } from "react";
import PopoverContent from "./PopoverContent";

const HeaderMenuRight: FC = () => {
  return (
    <Popover content={<PopoverContent />} trigger={"click"}>
      <p className="settings-avatar">Antonio</p>
    </Popover>
  );
};

export default HeaderMenuRight;
