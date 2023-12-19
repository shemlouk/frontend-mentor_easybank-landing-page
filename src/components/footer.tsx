import FacebookIcon from "@/assets/icon-facebook.svg?react";
import InstagramIcon from "@/assets/icon-instagram.svg?react";
import PinterestIcon from "@/assets/icon-pinterest.svg?react";
import TwitterIcon from "@/assets/icon-twitter.svg?react";
import YoutubeIcon from "@/assets/icon-youtube.svg?react";

import { Logo } from "./logo";

const socialMedias = [
  { href: "https://facebook.com", icon: FacebookIcon },
  { href: "https://youtube.com", icon: YoutubeIcon },
  { href: "https://x.com", icon: TwitterIcon },
  { href: "https://pinterest.com", icon: PinterestIcon },
  { href: "https://instagram.com", icon: InstagramIcon },
];

const pages = [
  "About Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privacy Policy",
];

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-8 bg-darkBlue p-8 pb-14">
      <Logo color="#fff" />

      <ul className="flex items-center gap-4">
        {socialMedias.map((item, index) => (
          <li key={index}>
            <a href={item.href} target="_blank">
              <item.icon className="scale-110 transition-transform hover:scale-125" />
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col items-center gap-2 text-white/80">
        {pages.map((page, index) => (
          <li key={index}>
            <a href="#" className="transition-colors hover:text-white">
              {page}
            </a>
          </li>
        ))}
      </ul>

      <button className="rounded-full bg-gradient-to-r from-limeGreen to-brightCyan px-9 py-3 font-semibold text-white">
        Request Invite
      </button>

      <p className="text-white/40">© Easybank. All Rights Reserved</p>
    </footer>
  );
}
