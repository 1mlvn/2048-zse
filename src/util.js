import { useEffect } from "react";

export const useEvent = (event, handler, passive = false) => {
  useEffect(() => {
    window.addEventListener(event, handler, passive);

    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
};

export const getColors = (num) => {
  switch (num) {
    case 2:
      return "#FF0099";
    case 4:
      return "#FF00FF";
    case 8:
      return "#FF00CC";
    case 16:
      return "#FFFF00";
    case 32:
      return "#9D00FF";
    case 64:
      return "#CC00FF";
    case 128:
      return "#6E0DD0";
    case 256:
      return "#9900FF";
    case 512:
      return "#0033FF";
    case 1024:
      return "#0062FF";
    case 2048:
      return "#099FFF";
    default:
      return "#C2B3A3";
  }
};
