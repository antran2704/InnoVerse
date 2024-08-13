"use client";

import clsx from "clsx";
import { useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props {
  title: string;
  children: JSX.Element;
}

const Collapse = (prop: Props) => {
  const { title, children } = prop;

  const contentRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState<boolean>(false);

  const handlShowMore = () => {
    if (!contentRef.current) return;

    const el = contentRef.current;
    const currentHeight = el.clientHeight;

    if (currentHeight === 0) {
      el.style.height = el.scrollHeight + "px";
      setIsShow(true);
    } else {
      el.style.height = "0px";
      setIsShow(false);
    }
  };

  return (
    <div className="py-5 border-b">
      <div
        onClick={handlShowMore}
        className="flex items-center justify-between cursor-pointer">
        <p className="sm:text-xl text-lg font-medium">{title}</p>
        <MdOutlineKeyboardArrowDown
          className={clsx("text-2xl transition-all ease-linear duration-100", [
            isShow ? "rotate-180" : "rotate-0",
          ])}
        />
      </div>

      {/* content */}
      <div
        ref={contentRef}
        className={clsx("h-0 transition-all ease-linear duration-100 overflow-hidden", [isShow && "mt-2"])}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
