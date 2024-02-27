"use client";

import { FC, useEffect, useState } from "react";

type StickyHeaderProps = {
  offset?: number;
  children: React.ReactNode;
};

export function useIsMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

const StickyHeader: FC<StickyHeaderProps> = ({ offset = 2, children }) => {
  const isMounted = useIsMounted();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-[990] flex items-center bg-gray-0/80 p-4 backdrop-blur-xl dark:bg-gray-50/50 md:px-5 lg:px-6 xl:ms-[100px]  justify-between bg-white xl:pe-8   ${((isMounted && scrollPosition) as number) > offset ? "card-shadow" : ""} `}
    >
      {children}
    </header>
  );
};

export default StickyHeader;
