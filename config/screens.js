module.exports = {
  xs: { min: "480px", max: "639px" }, //MOBILE
  // => @media ( max-width: 414px) { ... }

  sm: { min: "640px", max: "769px" }, //MOBILE
  // => @media (min-width: 415px and max-width: 800px) { ... }

  md: { min: "768px", max: "1023px" }, //TABLET
  // => @media (min-width: 800px and max-width: 990px) { ... }

  lg: { min: "1024px", max: "1279px" }, //DESKTOP HD
  // => @media (min-width: 991px and max-width: 1439px) { ... }

  xl: { min: "1280px", max: "1535px" }, //DESKTOP HD
  // => @media (min-width: 991px and max-width: 1439px) { ... }

  "2xl": { min: "1536px", max: "1919px" }, //DESKTOP HD
  // => @media (min-width: 991px and max-width: 1439px) { ... }

  "3xl": { min: "1920px", max: "2559px" }, //DESKTOP HD
  // => @media (min-width: 991px and max-width: 1439px) { ... }

  "4xl": { min: "2560px" }, //DESKTOP HD
  // => @media (min-width: 1440px) { ... }
  // // => @media (min-width: 1439px and max-width: 1536px) { ... }
};
