"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { LOGO_IMAGE } from "~/common/imgae";

import navbarItems from "~/common/Navbar/data";

const Navbar = () => {
  const pathname = usePathname();

  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  const onModal = () => {
    setOpenNavbar(!openNavbar);

    if (openNavbar) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <nav className="sticky top-0 z-[999]">
      <div className="w-full py-2 bg-white/50 backdrop-blur-md shadow-md">
        <div className="container__custom flex items-center">
          <div className="lg:w-2/12 flex items-center">
            <Link href="/">
              <img
                src={LOGO_IMAGE}
                alt="InnoVerse Logo"
                title="InnoVerse Logo"
                className="min-w-[100px] w-[100px] h-[60px] object-contain object-center"
                width={100}
                height={100}
                loading="lazy"
              />
            </Link>
          </div>

          {/* Navbar item desktop */}
          <ul className="md:flex hidden w-full items-center justify-center gap-5">
            {navbarItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={clsx(
                    "text-lg capitalize block px-5 py-2 font-semibold hover:text-primary-100 transition-all ease-linear duration-100",
                    [pathname === item.link && "text-primary-200"],
                  )}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button onClick={onModal} className="ml-auto">
            <MdMenu className="md:hidden block text-4xl" />
          </button>
        </div>
      </div>

      {/* Navbar item tablet - mobile */}
      <div
        className={clsx(
          "md:hidden block fixed left-0 top-0 bottom-0 w-full z-[999]",
          [!openNavbar && "pointer-events-none"],
        )}>
        {/* overlay to close navbar */}
        <div
          onClick={onModal}
          className={clsx(
            "absolute top-0 right-0 bottom-0 left-0 bg-black/50 transition-all ease-linear duration-100 z-10",
            [openNavbar ? "opacity-100" : "opacity-0 pointer-events-none"],
          )}></div>

        <div
          className={clsx(
            "relative sm:w-2/4 w-3/4 h-full bg-slate-200 transition-all ease-linear duration-100 z-20",
            [openNavbar ? "translate-x-0" : "-translate-x-full"],
          )}>
          <Link href="/" className="block p-5">
            <img
              src={LOGO_IMAGE}
              alt="InnoVerse Logo"
              title="InnoVerse Logo"
              className="min-w-[100px] w-[100px] h-[80px] object-contain object-center"
              width={100}
              height={100}
              loading="lazy"
            />
          </Link>

          <ul className="items-center justify-center py-10 gap-5">
            {navbarItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={clsx(
                    "text-lg capitalize block px-5 py-2 font-semibold hover:text-primary-100 transition-all ease-linear duration-100",
                    [pathname === item.link && "text-primary-200"],
                  )}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
