"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import StickyHeader from "./components/StickyHeader";
import HeaderMenuRight from "./components/HeaderMenuRight";

const Header: FC = () => {
  return (
    <StickyHeader>
      <div className="hidden items-center gap-3 xl:flex">
        <Link
          aria-label="Site Logo"
          href={"/"}
          className="me-4 hidden w-[155px] shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:block"
        >
          <Image
            src="/Logotipo_Wipay_transparent.png"
            alt="logo"
            className="max-w-[155px]"
            width={155}
            height={39}
          />
        </Link>
      </div>

      <div className="flex w-full items-center justify-between gap-5 xl:w-[calc(100%_-_190px)] 2xl:w-[calc(100%_-_310px)] 3xl:gap-6">
        <div className="flex max-w-2xl items-center xl:w-auto">
          {/* <HamburgerButton
            view={<Sidebar className="static w-full 2xl:w-full" />}
          />
          <Link
            aria-label="Site Logo"
            href="/"
            className="me-4 w-9 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden"
          >
            <Logo iconOnly={true} />
          </Link> */}
          {/* <SearchWidget
            icon={<PiMagnifyingGlass className="me-3 h-[20px] w-[20px]" />}
            className="xl:w-[500px]"
          /> */}
        </div>

        <div className="flex items-center justify-between">
          <HeaderMenuRight />
        </div>
      </div>
    </StickyHeader>
  );
};

export default Header;
