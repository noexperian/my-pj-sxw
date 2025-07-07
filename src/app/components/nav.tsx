"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/assets/logob.png";

const Nav = () => {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= lastScrollY.current) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        setMenuOpen(false); // ปิดเมนูอัตโนมัติเมื่อ scroll ลง
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (path: string) =>
    `block px-3 py-2 rounded-lg border-2 transition-all font-bold ${
      pathname.startsWith(path)
        ? "text-gray-400 border-gray-400"
        : "text-white border-transparent hover:text-gray-400 hover:border-gray-400"
    }`;

  return (
    <nav
      className={`bg-green-900  fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
         
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </Link>
       

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-base">
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

        {/* Hamburger button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 mt-4 space-y-2">
          <li>
            <Link
              href="/about"
              className={getLinkClass("/about")}
              onClick={() => setMenuOpen(false)}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/greenbeans"
              className={getLinkClass("/greenbeans")}
              onClick={() => setMenuOpen(false)}
            >
              GREEN BEANS
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={getLinkClass("/contact")}
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;

