"use client";

import { close, logo, menu } from "@/assets";
import { navLinks } from "@/constants";
import { styles } from "@/styles/defaultStyles";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} fixed top-0 w-full items-center bg-primary py-5`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setActive("")}
        >
          <Image src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-lg font-bold text-white">
            Gabriel&nbsp;
            <span className="hidden sm:block"> | Check Mídia</span>
          </p>
        </Link>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } cursor-pointer text-lg font-medium hover:text-white`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            width={28}
            height={28}
            className="cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } cursor-pointer text-base font-medium`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
