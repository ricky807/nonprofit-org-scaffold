import { useEffect, useState } from "react";

const useScrollPercent = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
   const scroll = window.addEventListener("scroll", () => {
      const newPercentage = getScrollPercent();

      setPercent(newPercentage);
    });

    return window.removeEventListener("scroll", scroll);
  }, []);

  return percent;
};

export default useScrollPercent;

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}
