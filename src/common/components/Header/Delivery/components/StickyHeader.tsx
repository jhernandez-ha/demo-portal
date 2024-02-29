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
      className={`header-container  ${((isMounted && scrollPosition) as number) > offset ? "card-shadow" : ""} `}
    >
      {children}
    </header>
  );
};

export default StickyHeader;
