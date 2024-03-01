"use client";

import { FC } from "react";
import HeaderMenuRight from "./components/HeaderMenuRight";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";
import StickyHeader from "./components/StickyHeader";
import useWindowSize from "@/common/hooks/useWindowSize";

const Header: FC = () => {
  const { isMobile } = useWindowSize();

  return (
    <StickyHeader>
      <div className="logo-desktop-container">
        <Link aria-label="Site Logo" href={"/"} className="header-link">
          <Image
            src="/Logotipo_Wipay_transparent.png"
            alt="logo"
            className="logo-desktop"
            width={155}
            height={39}
          />
        </Link>
      </div>

      <div className="header-gadgets-container">
        <div className="header-left-container">
          {isMobile && (
            <>
              <MobileMenu />
              <Link
                aria-label="Site Logo"
                href="/"
                className="me-4 w-12 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden"
              >
                <Image
                  src="/isotipo_wipay_blue.png"
                  alt="logo"
                  width={200}
                  height={39}
                />
              </Link>
            </>
          )}
          {/* <SearchWidget
            icon={<PiMagnifyingGlass className="me-3 h-[20px] w-[20px]" />}
            className="xl:w-[500px]"
          /> */}
        </div>

        <div className="header-right-container">
          <HeaderMenuRight />
        </div>
      </div>
    </StickyHeader>
  );
};

export default Header;
