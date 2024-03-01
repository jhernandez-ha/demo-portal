import { useEffect, useMemo, useState } from "react";

import screens from "../../../config/screens";

const screensSize = screens as Utility.JSONValue;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Utility.DimensionType>({
    width: 0,
    height: 0,
  });
  const [isMediaBreakPointLoading, setIsMediaBreakPointLoading] =
    useState(true);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  const mediaBreakpoint = useMemo(() => {
    let device = "xs";
    if (windowSize.width !== 0) {
      for (let i = 0; i < breakpoints.length; i++) {
        const breakpoint = breakpoints[i][1];
        if (windowSize.width <= breakpoint) {
          device = breakpoints[i][0];
          i = breakpoints.length;
        }

        if (i === breakpoints.length - 1) device = breakpoints[i][0];
      }
      setIsMediaBreakPointLoading(false);
    }

    return device;
  }, [windowSize.width]);

  return {
    width: windowSize.width,
    height: windowSize.height,
    mediaBreakpoint,
    isMediaBreakPointLoading,
  };
};

const getPixels = (value: string) => {
  return parseInt(value.replace("px", ""));
};

const breakpoints: Utility.JSONValue[] = [
  ["xs", getPixels(screensSize.xs.max)],
  ["sm", getPixels(screensSize.sm.max)],
  ["md", getPixels(screensSize.md.max)],
  ["lg", getPixels(screensSize.lg.max)],
  ["xl", getPixels(screensSize.xl.max)],
  ["2xl", getPixels(screensSize.xl.max)],
  ["3xl", getPixels(screensSize.xl.max)],
  ["4xl", getPixels(screensSize.xl.min)],
];

export default useWindowSize;
