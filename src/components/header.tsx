import CloseIcon from "@/assets/icon-close.svg?react";
import MenuIcon from "@/assets/icon-hamburger.svg?react";

import clsx from "clsx";
import { useEffect, useState } from "react";

import { CallToActionButton } from "./call-to-action-button";
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

      <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-center bg-white p-6 md:min-w-[1300px] md:p-0">
        <div className="flex w-full max-w-screen-lg items-center justify-between md:h-24">
          <Logo />

          <ul className="hidden h-full gap-4 rounded-md bg-white md:flex">
            {pages.map((page, index) => (
              <li
                key={index}
                className="group relative flex h-full flex-col justify-center px-2"
              >
                <a
                  href="#"
                  onClick={() => setCloseNav(true)}
                  className="text-darkBlue/75 transition-colors group-hover:text-darkBlue"
                >
                  {page}
                </a>

                <div className="absolute bottom-0 left-0 h-1 w-full scale-0 rounded-full bg-gradient-to-br from-limeGreen to-brightCyan transition-transform group-hover:scale-100" />
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <CallToActionButton />
          </div>

          <div className="md:hidden">
            {openNav ? (
              <button onClick={() => setCloseNav(true)}>
                <CloseIcon />
              </button>
            ) : (
              <button onClick={() => setOpenNav(true)}>
                <MenuIcon />
              </button>
            )}
          </div>
        </div>

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
