import MenuIcon from "@/assets/icon-hamburger.svg?react";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-white p-6">
      <Logo />

      <button>
        <MenuIcon />
      </button>
    </header>
  );
}
