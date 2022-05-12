import { useState, useEffect } from "react";

import isBrowser from "../isBrowser";

function getWindowDimensions() {
  let width = null;

  let height = null;

  if (isBrowser) {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;
