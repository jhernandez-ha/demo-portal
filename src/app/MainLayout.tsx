"use client";

import { FC, useState } from "react";
import Header from "./HeaderComponent";
import SideBar from "@/common/templates/SideBar/Delivery";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="flex min-h-screen flex-grow">
      <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className="flex w-full flex-col ">
        <Header />
        <div
          className={`flex flex-grow flex-col gap-4 px-4 pb-6 duration-200 md:px-5 lg:pb-8  xl:pe-8  ${isExpanded ? "xl:ps-[365px]" : "xl:ps-[122px]"}`}
        >
          <div className="grow xl:mt-4">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
