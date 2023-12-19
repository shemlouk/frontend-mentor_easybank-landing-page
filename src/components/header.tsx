import CloseIcon from "@/assets/icon-close.svg?react";
import MenuIcon from "@/assets/icon-hamburger.svg?react";

import clsx from "clsx";
import { useEffect, useState } from "react";

import { Logo } from "./logo";

const pages = ["Home", "About", "Contact", "Blog", "Careers"];

export function Header() {
  const [closeNav, setCloseNav] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    if (closeNav) {
      setTimeout(() => {
        setOpenNav(false);
        setCloseNav(false);
      }, 300);
    }
  }, [closeNav]);

  return (
    <>
      {openNav && (
        <div
          onClick={() => setCloseNav(true)}
          className={clsx(
            "animate-duration-300 fixed left-0 top-0 z-10 h-screen w-full bg-gradient-to-b from-darkBlue to-transparent",
            {
              "animate-fade-down": !closeNav,
              "animate-fade-up animate-reverse": closeNav,
            },
          )}
        />
      )}

      <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-white p-6">
        <Logo />

        {openNav ? (
          <button onClick={() => setCloseNav(true)}>
            <CloseIcon />
          </button>
        ) : (
          <button onClick={() => setOpenNav(true)}>
            <MenuIcon />
          </button>
        )}

        {openNav && (
          <nav
            className={clsx(
              "animate-duration-300 absolute left-0 top-24 w-full px-6",
              {
                "animate-fade-down": !closeNav,
                "animate-fade-up animate-reverse": closeNav,
              },
            )}
          >
            <ul className="flex flex-col gap-6 rounded-md bg-white p-6">
              {pages.map((page, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={() => setCloseNav(true)}
                    className="text-lg text-darkBlue/90 transition-colors hover:text-darkBlue"
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
