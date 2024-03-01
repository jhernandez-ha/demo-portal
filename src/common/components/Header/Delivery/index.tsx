"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import StickyHeader from "./components/StickyHeader";
import HeaderMenuRight from "./components/HeaderMenuRight";
import MobileMenu from "./components/MobileMenu";
import useWindowSize from "@/common/hooks/useWindowSize";

const Header: FC = () => {
  const { mediaBreakpoint } = useWindowSize();

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
          {mediaBreakpoint !== "xl" &&
            mediaBreakpoint !== "2xl" &&
            mediaBreakpoint !== "3xl" &&
            mediaBreakpoint !== "4xl" && (
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
