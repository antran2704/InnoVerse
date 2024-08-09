"use client";

import clsx from "clsx";
import { memo, useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div
      className={clsx(
        "scroll-top fixed right-2 cursor-pointer py-2 px-2 rounded-md bg-neutral-600 shadow-lg transition-all ease-linear duration-150 z-[999]",
        [
          showScrollTop
            ? "opacity-60 hover:opacity-100 md:bottom-12 bottom-5 "
            : "opacity-0 bottom-0 pointer-events-none",
        ],
      )}
      onClick={scrollToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="text-white w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
        />
      </svg>
    </div>
  );
};

export default memo(ScrollToTop);
