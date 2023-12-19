import FacebookIcon from "@/assets/icon-facebook.svg?react";
import InstagramIcon from "@/assets/icon-instagram.svg?react";
import PinterestIcon from "@/assets/icon-pinterest.svg?react";
import TwitterIcon from "@/assets/icon-twitter.svg?react";
import YoutubeIcon from "@/assets/icon-youtube.svg?react";

import { CallToActionButton } from "./call-to-action-button";
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
    <footer className="bg-darkBlue p-8 pb-14 md:flex md:justify-center">
      <div className="flex max-w-screen-lg flex-col items-center gap-8 md:w-full md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-8">
          <Logo color="#fff" />

          <ul className="flex items-center gap-4">
            {socialMedias.map((item, index) => (
              <li key={index}>
                <a href={item.href} target="_blank">
                  <item.icon
                    fill="#fff"
                    className="scale-110 transition-transform hover:scale-125 hover:fill-emerald-500"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-col items-center gap-2 text-white/80 md:h-1/2 md:-translate-x-1/2 md:flex-wrap">
          {pages.map((page, index) => (
            <li key={index} className="md:flex md:w-28 md:justify-start">
              <a href="#" className="transition-colors hover:text-emerald-500">
                {page}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-8">
          <CallToActionButton />

          <p className="text-white/40">© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
