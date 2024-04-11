import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [moon, setmoon] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true;
    }
    return false;
  });
  useEffect(() => {
    if (moon) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [moon]);
  const handlemoon = () => {
    setmoon(!moon);
  };

  return {
    moon,
    handlemoon,
  };
};

export default useDarkMode;
