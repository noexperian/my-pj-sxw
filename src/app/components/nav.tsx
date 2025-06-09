"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/logo1.png";


const Nav = () => {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= lastScrollY.current) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  const getLinkClass = (path: string) =>
    `px-3 py-2 rounded-lg border-2 transition-all font-bold ${
      pathname.startsWith(path)
        ? "text-gray-400 border-gray-400"
        : "text-white border-transparent hover:text-gray-400 hover:border-gray-400"
    }`;

  return (
    <div
      className={`bg-green-900 p-3 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center container max-w-10xl max-w-full mx-auto px-4">
      <Link href="/">
          <Image src={Logo} alt="Logo" width={200} height={200} />
        </Link>
        <ul className="flex gap-7 text-base">
          <li>
            <Link href="/about" className={getLinkClass("/about")}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/greenbeans" className={getLinkClass("/greenbeans")}>
              GREEN BEANS
            </Link>
          </li>
          <li>
            <Link href="/contact" className={getLinkClass("/contact")}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
