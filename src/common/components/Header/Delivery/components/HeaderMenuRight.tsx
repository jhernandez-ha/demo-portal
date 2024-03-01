import { Avatar, Popover } from "antd";
import { FC } from "react";
import PopoverContent from "./PopoverContent";

const HeaderMenuRight: FC = () => {
  const user = "Antonio";
  return (
    <Popover content={<PopoverContent />} trigger={"click"}>
      <Avatar size="large" shape="circle" className="settings-avatar">
        {user.slice(0, 1)}
      </Avatar>
    </Popover>
  );
};

export default HeaderMenuRight;
